import type { OrganisationId, Role, Session } from "./portal-types";
export const canAccessOrganisation=(session:Session|null,orgId:OrganisationId)=>Boolean(session?.organisations.includes(orgId));
export const canManageUsers=(role:Role)=>role==="Organisation Admin"||role==="Platform Owner";
export const canEscalate=(role:Role)=>role!=="Organisation User";
export const isOperationsRole=(role:Role)=>role==="Support Analyst"||role==="Platform Owner";