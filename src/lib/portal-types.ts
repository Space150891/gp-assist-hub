export type Role = "Organisation User" | "Organisation Admin" | "Support Analyst" | "Platform Owner";
export type TicketStatus = "Submitted" | "In Progress" | "Awaiting Customer" | "Awaiting Approval" | "Resolved" | "Closed";
export type SyncStatus = "Queued for Autotask" | "Synced";
export type OrganisationId = "riverside" | "northfield";
export interface Ticket { id:string; autotaskRef:string; orgId:OrganisationId; subject:string; category:string; status:TicketStatus; syncStatus:SyncStatus; requester:string; site:string; created:string; updated:string; description:string; answers:Record<string,string>; attachments:string[]; timeline:{id:string; title:string; detail:string; at:string; internal?:boolean}[] }
export interface Article { id:string; title:string; category:string; source:string; visibility:string; summary:string; body:string[]; orgIds?:OrganisationId[] }
export interface PortalUser { id:string; name:string; email:string; role:"Organisation User"|"Organisation Admin"; active:boolean; orgId:OrganisationId }
export interface Session { name:string; email:string; role:Role; orgId:OrganisationId; organisations:OrganisationId[] }
export interface PortalState { session:Session|null; tickets:Ticket[]; users:PortalUser[]; recentArticles:string[]; articleVotes:Record<string,string>; notifications:boolean; highContrast:boolean }