# Complete Portal QA and Polish

## Goal
Validate and repair the existing prototype so the five demonstration journeys work end to end, remain saved locally, enforce role and organisation boundaries, and present cleanly across the requested screen sizes.

## Functional and permission fixes
- Connect knowledge deflection to a prefilled support request, render published New Starter form fields, validate required and conditional answers, and announce queued/synchronised states.
- Make approval, invitation, ticket updates, assignment, comments, internal notes, sync retry, form publishing, notices, audit entries, and dashboard counters update shared persisted state consistently.
- Enforce customer/support/platform route access and per-object organisation membership checks; show a professional access-denied state with the correct return action for unauthorised ticket links.
- Keep internal notes explicitly private and ensure organisation switching changes all tickets, users, notices, counts, and policy-sensitive knowledge without stale Riverside content.
- Add reset-demo-data confirmation, prototype disclosure, form/comment failure-safe retry states, useful attachment status, and success/error feedback where missing.

## Responsive, visual, and accessibility QA
- Test 360×800, 390×844, 430×932, tablet portrait/landscape, 1280×800, and 1440×900 with automated browser journeys and screenshots.
- Repair overflow, mobile navigation coverage, safe-area spacing, touch targets, long references, tablet administration, and overly wide desktop layouts while preserving the approved visual system.
- Add a branded loading state, reduced-motion handling, sub-200ms transitions, theme colour, print rules, keyboard focus, labelled controls, field-linked validation, accessible async announcements, and complete dialog cancel/close behavior.

## Verification
- Run all five role journeys in the live prototype, including refresh persistence and the forbidden Riverside deep link after switching to Northfield.
- Check console/runtime errors, current build status, route metadata, responsive overflow, and focused accessibility checks.
- Correct every reproducible blocker or inconsistency found without adding any backend or external service.
