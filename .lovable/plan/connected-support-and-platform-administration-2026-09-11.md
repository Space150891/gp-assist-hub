# Connected Support and Platform Administration

## Goal
Extend the existing local prototype without changing its customer design or external-service stance. Support Analyst and Platform Owner views will share the same persisted tickets, approvals, notices, catalogue, users, and audit history as customer roles.

## Build

### Shared local model and permissions
- Expand the persisted TypeScript state with analyst assignment, priority, SLA, integration metadata, approvals, audit entries, invitations, catalogue/form definitions, knowledge sources, service notices, organisations, and integration jobs.
- Preserve existing seeded customer data and add one failed comment-sync demonstration ticket.
- Centralise role permissions and make role changes immediately replace navigation and accessible actions.
- Keep customer organisation isolation and permanently exclude internal notes from customer timelines.

### Support Analyst workspace
- Replace the current basic operations screen with role-specific navigation for Support Overview, Ticket Queue, Approvals, and Integration Alerts.
- Add working summary metrics, restrained category reporting, recent activity, queue filters, and saved presets.
- Expand ticket details into an operational workspace with assignment, priority, status, mappings, public updates, internal notes, information requests, resolve/reopen actions, customer context, and integration history.
- Make Retry Sync transition Processing to Successful, update the shared ticket timeline, append an audit entry, and persist after refresh.

### Approval workflow
- Add a shared Approval Inbox for Organisation Admin and Platform Owner.
- Use the existing New Starter request with structured approval detail and history.
- Implement Approve, Reject, and Request Changes so request status, timeline, counters, integration state, and audit log update together.

### Platform Owner workspace
- Add responsive administration routes for Overview, Organisations, Users & Invitations, Service Catalogue, Form Builder, Knowledge Sources, Service Status, Autotask Integration, Audit Log, and Roadmap.
- Implement working search/filter controls and local create/edit/publish/suspend/restore/retry/reconcile actions with feedback.
- Require confirmation dialogs for destructive or access-changing actions.
- Make catalogue and form changes affect Get Support; service notices affect customer status and dashboard.
- Keep payload previews concise and exclude secrets or sensitive full payloads.
- Mark all Roadmap modules clearly as Future phase and open each in a detail panel.

## Technical details
- Continue using the existing React context and localStorage key, extending state with backward-compatible defaults for previously saved sessions.
- Use the existing TanStack routes, UI components, semantic colour tokens, and local logo asset.
- Add route-specific metadata to every new page.
- Keep external systems simulated; no network integrations, authentication providers, or cloud/database setup.

## Validation
- Verify each role’s navigation and blocked permissions.
- Verify queue filters and presets, approval state transitions, public/internal note visibility, sync retry persistence, catalogue-to-support propagation, and service-notice propagation.
- Verify organisation isolation, refresh persistence, desktop support/admin layouts, tablet/mobile customer layouts, and a clean build with no runtime console errors.
