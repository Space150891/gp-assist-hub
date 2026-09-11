import { createContext,useContext,useEffect,useMemo,useState,type ReactNode } from "react";
import { initialState } from "@/data/portal-data";
import type { OrganisationId,PortalState,PortalUser,Role,Ticket } from "./portal-types";
type Store={state:PortalState; hydrated:boolean; signIn:(mode:"customer"|"platform")=>void; signOut:()=>void; setRole:(r:Role)=>void; setOrg:(o:OrganisationId)=>void; addTicket:(t:Ticket)=>void; updateTicket:(id:string,fn:(t:Ticket)=>Ticket)=>void; addUser:(u:PortalUser)=>void; updateUser:(id:string,fn:(u:PortalUser)=>PortalUser)=>void; viewArticle:(id:string)=>void; voteArticle:(id:string,v:string)=>void; setPreference:(k:"notifications"|"highContrast",v:boolean)=>void};
const Ctx=createContext<Store|null>(null); const KEY="health-it-portal-demo-v1";
export function PortalProvider({children}:{children:ReactNode}){const[state,setState]=useState(initialState);const[hydrated,setHydrated]=useState(false);
 useEffect(()=>{try{const raw=localStorage.getItem(KEY);if(raw)setState({...initialState,...JSON.parse(raw)});}catch{}setHydrated(true)},[]);
 useEffect(()=>{if(hydrated)localStorage.setItem(KEY,JSON.stringify(state))},[state,hydrated]);
 const value=useMemo<Store>(()=>({state,hydrated,
  signIn:(mode)=>setState(s=>({...s,session:mode==="customer"?{name:"Sarah Mitchell",email:"sarah.mitchell@riverside.example",role:"Organisation Admin",orgId:"riverside",organisations:["riverside","northfield"]}:{name:"Alex Morgan",email:"alex.morgan@gpitservices.example",role:"Platform Owner",orgId:"riverside",organisations:["riverside","northfield"]}})),
  signOut:()=>setState(s=>({...s,session:null})),setRole:(role)=>setState(s=>s.session?{...s,session:{...s.session,role}}:s),setOrg:(orgId)=>setState(s=>s.session?.organisations.includes(orgId)?{...s,session:{...s.session,orgId}}:s),
  addTicket:(t)=>setState(s=>({...s,tickets:[t,...s.tickets]})),updateTicket:(id,fn)=>setState(s=>({...s,tickets:s.tickets.map(t=>t.id===id?fn(t):t)})),
  addUser:(u)=>setState(s=>({...s,users:[...s.users,u]})),updateUser:(id,fn)=>setState(s=>({...s,users:s.users.map(u=>u.id===id?fn(u):u)})),viewArticle:(id)=>setState(s=>({...s,recentArticles:[id,...s.recentArticles.filter(x=>x!==id)].slice(0,3)})),voteArticle:(id,v)=>setState(s=>({...s,articleVotes:{...s.articleVotes,[id]:v}})),setPreference:(k,v)=>setState(s=>({...s,[k]:v}))}),[state,hydrated]);return <Ctx.Provider value={value}>{children}</Ctx.Provider>}
export function usePortal(){const v=useContext(Ctx);if(!v)throw new Error("PortalProvider missing");return v}