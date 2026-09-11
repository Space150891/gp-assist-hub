# Health IT Services Customer Portal prototype

## Goal
Build the complete authenticated customer portal experience at `/`, using fictional operational IT data only. The prototype will run entirely in the browser with local TypeScript data, simulated delays, and localStorage persistence.

## Experience
- Branded Microsoft-style sign-in with Customer Demo and Platform Demo entry points.
- Authenticated application shell with desktop sidebar, mobile bottom navigation, organisation switcher, and discreet prototype-role control.
- Strict organisation-scoped views for Riverside Medical Practice and Northfield Primary Care Network.
- Dashboard with operational summaries, recent requests, service health, knowledge recommendations, and a prominent support action.
- Guided two-step support flow with dynamic Incident, New Starter, and Leaver forms; category-aware knowledge suggestions; confirmation; and simulated Autotask queue-to-sync transition.
- Searchable, filterable requests view with desktop table and mobile cards, plus full ticket detail, customer timeline, comments, attachments, escalation, reopening, approvals, and satisfaction feedback where permitted.
- Unified approved knowledge search with article details, helpfulness, recent history, visibility labels, and support handoff.
- Service status covering active incidents, planned maintenance, historical notices, organisation impact, and simulated subscriptions.
- Organisation and profile areas with role-aware user administration, invitation, role change, deactivation, preferences, and sign-out.
- Support Analyst and Platform Owner navigation and operational views, shown only to authorised prototype roles.

## Design
- Preserve the official GP IT Services logo from the company website without modification.
- Use a calm NHS-informed application aesthetic: deep navy structure, healthcare teal, action blue, pale clinical background, white surfaces, restrained status colours, clear labels, subtle borders, and minimal shadows.
- Highly readable sans-serif typography, 44px minimum touch targets, visible keyboard focus, text-plus-icon status communication, and responsive layouts.
- No marketing page, stock photography, gradients, glass effects, decorative controls, or empty destinations.
- Keep the production principle visible in the authenticated product: “Autotask is the system of record. The portal is the secure customer-facing workflow layer.”

## Technical approach
- Create route files for sign-in, dashboard, support, requests, ticket details, knowledge, service status, organisation, profile, and role-restricted operations.
- Keep seed data, domain types, organisation authorisation, and the simulated service adapter separate from page components.
- Use a single browser store with validated organisation membership, role capabilities, selected identity, and scoped reads; URL or browser-supplied organisation values will never grant access by themselves.
- Persist authentication choice, role, organisation, submitted requests, timeline activity, comments, attachments metadata, approvals, user administration, article feedback, and preferences in localStorage.
- Simulate service latency and Autotask state transitions while keeping adapters replaceable by production APIs later.
- Use reusable application-shell, status, request, timeline, form, article, feedback, and empty-state components.

## Validation
- Verify the end-to-end journey: sign-in → dashboard → knowledge suggestion → structured submission → queued/synced state → ticket timeline → customer response.
- Verify refresh persistence, role permissions, organisation isolation, every visible action, desktop layout, and mobile navigation.
- Check all routes for unique metadata, accessibility basics, runtime errors, and successful preview build.
