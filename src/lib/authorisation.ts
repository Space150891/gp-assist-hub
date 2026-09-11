import type {OrganisationId,Role,Session} from "./portal-types";
export const isCustomerRole=(role:Role)=>role==="Organisation User"||role==="Organisation Admin";
export const canAccessOrganisation=(session:Session|null,orgId:OrganisationId)=>Boolean(session&&(isCustomerRole(session.role)?session.orgId===orgId:session.organisations.includes(orgId)));
export const canManageUsers=(role:Role)=>role==="Organisation Admin"||role==="Platform Owner";
export const canApprove=(role:Role)=>role==="Organisation Admin"||role==="Platform Owner";
export const canEscalate=(role:Role)=>role!=="Organisation User";
export const isOperationsRole=(role:Role)=>role==="Support Analyst"||role==="Platform Owner";
export const isPlatformOwner=(role:Role)=>role==="Platform Owner";
export const canAccessPath=(role:Role,path:string)=>{
 if(path.startsWith("/admin"))return role==="Platform Owner";
 if(path.startsWith("/operations"))return role==="Support Analyst"||role==="Platform Owner";
 if(path.startsWith("/approvals"))return role==="Organisation Admin"||role==="Platform Owner";
 if(path.startsWith("/requests/") )return true;
 if(["/dashboard","/support","/requests","/knowledge","/status","/organisation","/profile"].some(p=>path===p||path.startsWith(`${p}/`)))return isCustomerRole(role);
 return true;
};
