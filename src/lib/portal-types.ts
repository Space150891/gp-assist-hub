export type Role = "Organisation User" | "Organisation Admin" | "Support Analyst" | "Platform Owner";
export type TicketStatus = "Submitted" | "In Progress" | "Awaiting Customer" | "Awaiting Approval" | "Resolved" | "Closed";
export type SyncStatus = "Queued for Autotask" | "Processing" | "Retrying" | "Synced" | "Failed" | "Dead Letter" | "Successful";
export type Priority = "Low" | "Normal" | "High" | "Critical";
export type SlaState = "On Track" | "At Risk" | "Breached";
export type OrganisationId = "riverside" | "northfield";
export interface TimelineEntry { id:string; title:string; detail:string; at:string; internal?:boolean }
export interface Ticket { id:string; autotaskRef:string; orgId:OrganisationId; subject:string; category:string; status:TicketStatus; syncStatus:SyncStatus; requester:string; site:string; created:string; updated:string; description:string; answers:Record<string,string>; attachments:string[]; timeline:TimelineEntry[]; priority:Priority; assignedTo:string; slaState:SlaState; queue:string; lastSuccessfulSync:string; pendingChanges:number; correlationId:string; latestSource:string }
export interface Article { id:string; title:string; category:string; source:string; visibility:string; summary:string; body:string[]; orgIds?:OrganisationId[] }
export interface PortalUser { id:string; name:string; email:string; role:"Organisation User"|"Organisation Admin"; active:boolean; orgId:OrganisationId; invitationStatus:string; lastSignIn:string }
export interface AuditEntry { id:string; at:string; actor:string; orgId:OrganisationId|string; type:string; objectRef:string; detail:string }
export interface CatalogueItem { id:string; name:string; icon:string; published:boolean; queue:string; issueType:string; subIssue:string; order:number }
export interface FormField { id:string; label:string; type:string; required:boolean; help:string; condition:string; mapping:string }
export interface KnowledgeSource { id:string; name:string; source:string; folder:string; visibility:string; orgIds:OrganisationId[]; enabled:boolean; syncStatus:string; lastIndexed:string; articleCount:number; excludedReason:string }
export interface ServiceNotice { id:string; title:string; services:string[]; orgIds:OrganisationId[]; severity:string; starts:string; ends:string; status:"Draft"|"Published"|"Resolved"; detail:string }
export interface IntegrationJob { id:string; ticketId:string; type:string; state:SyncStatus; updated:string; correlationId:string; summary:string; reviewed:boolean }
export interface OrganisationRecord { id:OrganisationId; name:string; autotaskCompanyId:string; status:"Active"|"Suspended"; sites:string[]; knowledgePolicy:string; entitlement:string; lastActivity:string }
export interface Session { name:string; email:string; role:Role; orgId:OrganisationId; organisations:OrganisationId[] }
export interface SupportPrefill { category:string; subject:string; description:string }
export interface PortalState { session:Session|null; tickets:Ticket[]; users:PortalUser[]; recentArticles:string[]; articleVotes:Record<string,string>; notifications:boolean; highContrast:boolean; audit:AuditEntry[]; catalogue:CatalogueItem[]; newStarterFields:FormField[]; draftNewStarterFields:FormField[]; supportPrefill:SupportPrefill|null; knowledgeSources:KnowledgeSource[]; notices:ServiceNotice[]; jobs:IntegrationJob[]; organisationRecords:OrganisationRecord[]; knowledgeSearches:number; avoidedRequests:number; invitations:{id:string;email:string;orgId:OrganisationId;role:string;status:string}[] }
