# Health Portal Pro

Build a polished, mobile-first clickable prototype called “Health IT Services Customer Portal” for IT Auxilium Ltd / GP IT Services.

This is a client demonstration, not the production implementation. Use realistic fictional data, local TypeScript data files and localStorage. Do not connect Supabase, Lovable Cloud, Microsoft Entra, Autotask, IT Glue, Azure, email services or any external API. Simulate those integrations convincingly through the interface.

The production principle must remain visible in the prototype:

“Autotask is the system of record. The portal is the secure customer-facing workflow layer.”

Use https://gpitservices.co.uk/ only as a business and brand reference. Use the uploaded official logo without altering, recolouring, stretching or recreating it.

Do not build a marketing landing page. Build the actual authenticated product.

PROJECT PURPOSE

The portal is for GP practices, Primary Care Networks and other UK healthcare organisations receiving managed IT services from Health IT Services.

Customers should be able to:

Sign in using Microsoft

Access only their authorised organisation

View service status

Search approved knowledge

Submit structured incidents and service requests

Track requests and timelines

Add customer-visible comments

Upload attachments

Respond to approvals

Manage their organisation’s portal users when authorised

No real patient or clinical information should appear anywhere. Use fictional operational IT data only.

BRAND AND DESIGN

Create a calm, trustworthy healthcare-technology interface.

If the uploaded brand assets contain clear colours, derive the theme from them. Otherwise use:

Deep navy: #12334A

Healthcare teal: #159A9C

Action blue: #1976D2

Page background: #F4F8FA

Card background: #FFFFFF

Primary text: #172B3A

Muted text: #617482

Border: #D9E4EA

Success: #28865C

Warning: #B7791F

Error: #C2414B

Use Inter or a similar highly readable sans-serif font.

Style requirements:

Clean application interface, not a template-like SaaS landing page

Professional and reassuring

Restrained use of colour

Clear information hierarchy

Rounded cards with subtle borders

Minimal shadows

No glassmorphism

No decorative gradients

No generic doctor or patient stock photography

No oversized hero section

Minimum 44 × 44 px touch targets

WCAG 2.2 AA-oriented contrast

Status must never be communicated by colour alone

Use a left navigation sidebar on desktop and compact bottom navigation on mobile.

DEMO AUTHENTICATION

Create a branded sign-in screen with:

Official logo

“Sign in with Microsoft” primary action

Short security message

“Enter Customer Demo” action

“Enter Platform Demo” action

Microsoft sign-in is simulated. It must not trigger real OAuth.

After selecting a demo, show a discreet “Prototype role” switcher in the header with:

Organisation User

Organisation Admin

Support Analyst

Platform Owner

Also allow organisation switching for authorised demo users:

Riverside Medical Practice

Northfield Primary Care Network

Switching organisation must immediately update all dashboard, ticket and user data. Never combine data from both organisations.

Persist the selected user, role and organisation after refresh.

CUSTOMER NAVIGATION

Create and connect:

Dashboard

Get Support

My Requests

Knowledge

Service Status

Organisation

Profile

Hide support and platform administration navigation unless the correct prototype role is selected.

CUSTOMER DASHBOARD

Create a useful operational dashboard containing:

Personal greeting

Current organisation

Prominent “Get Support” action

Open Requests

Awaiting Your Response

Planned Maintenance

Service Alerts

Recent Requests

Recommended Knowledge

Service Health summary

Use realistic fictional data, including:

INC-10482 — Microsoft 365 sign-in problem — In Progress

SR-20541 — New starter onboarding — Awaiting Approval

INC-10466 — Patient call display offline — Resolved

SR-20498 — Shared mailbox access — Awaiting Customer

INC-10434 — Consultation-room printer problem — Closed

Show both the portal reference and Autotask reference where relevant.

GET SUPPORT

Create a guided two-step request journey:

Step 1 — Choose request type:

Report an IT Incident

New Starter

Leaver / Offboarding

Access or Permissions

Microsoft 365

Computer or Device

Patient Check-In System

Call Board / Digital Signage

Cybersecurity Concern

General Service Request

Step 2 — Complete a dynamic form.

Incident fields:

Affected service

Impact

Number of affected users

Location

Description

When the problem started

Is work completely blocked?

Attachment

Preferred contact method

New Starter fields:

Employee name

Start date

Job role

Site

Required systems

Microsoft 365 licence

Hardware required

Manager approval

Additional notes

Leaver fields:

Employee

Final working date

Disable-access time

Mailbox handling

Device return

Data ownership transfer

Manager approval

Use conditional fields. For example, selecting “Yes, work is completely blocked” should reveal an urgent-impact explanation.

Before submission, show three relevant knowledge suggestions based on category and keywords. The customer can open an article and mark “This solved my issue” or continue creating the request.

Submitting must:

Generate a fictional portal reference

Generate a fictional Autotask reference

Show “Queued for Autotask”

Change to “Synced” after a short simulated delay

Add the request to My Requests

Show a success confirmation

Persist after refresh

MY REQUESTS

Build a functional ticket list with:

Search

Status filter

Category filter

Date filter

Organisation filter when multiple organisations are available

Sort by newest, oldest or last updated

Desktop table and mobile cards

Statuses:

Submitted

In Progress

Awaiting Customer

Awaiting Approval

Resolved

Closed

Each ticket must show:

Portal and Autotask references

Subject

Category

Status

Updated time

Requester

Site

Visible synchronisation status

TICKET DETAILS

Build a connected ticket page containing:

Subject and references

Current status

Service/category

Requester

Organisation

Created and updated times

Structured request answers

Attachments

Customer-visible timeline

Add Comment action

Upload Attachment action

Escalate Request action where permitted

Reopen action for resolved requests

Customer satisfaction action after resolution

Create a clearly separated timeline:

Request created in portal

Synced with Autotask

Support analyst assigned

Customer-visible update

Customer reply

Status changed

Do not show internal notes to Organisation User or Organisation Admin roles.

Comments and attachments should update the local prototype data and remain visible after refresh.

KNOWLEDGE

Create unified knowledge search representing approved Autotask and IT Glue content.

Seed articles such as:

Reset Microsoft 365 multifactor authentication

Troubleshoot a patient call display

Prepare IT access for a new starter

Report a suspicious email

Connect securely when working remotely

Fix common printer problems

Request access to a shared mailbox

Provide:

Search

Category filters

Featured articles

Recently viewed

Helpful / Not Helpful actions

“Still need support?” action that carries the article and category into Get Support

Each article must display its approved source and visibility:

Approved IT Glue article

Approved Autotask article

Available to all customers

Available only to selected organisations

Never display passwords, credentials, private infrastructure details or internal-only instructions.

SERVICE STATUS

Create a service-status page with:

Overall service condition

Current incidents

Planned maintenance

Historical notices

Organisation-specific impact

Subscribe action simulated with a confirmation toast

Use:

Microsoft 365 — Operational

Patient Check-In Services — Degraded Performance

Call Boards — Operational

Remote Support — Operational

Network Maintenance — Planned for 22 September, 20:00–22:00

ORGANISATION AND PROFILE

Organisation User can view basic organisation details.

Organisation Admin can additionally:

View organisation users

Invite a user

Change a portal role

Deactivate access

View pending invitations

All actions are simulated and persisted.

Profile must include:

Name

Email

Microsoft account indicator

Authorised organisations

Notification preferences

Accessibility preferences

Sign out

TECHNICAL PROTOTYPE STRUCTURE

Use reusable React and TypeScript components.

Keep mock data separate from UI components.

Create a small mock service layer with simulated latency.

Persist meaningful changes in localStorage.

Keep organisation access logic in one reusable authorisation utility.

Do not use browser-supplied organisation IDs as the only access check, even in the prototype structure.

Make routes and data adapters easy to replace with real APIs later.

Every visible button must work.

Do not create empty routes or decorative controls without feedback.

Preserve data when refreshing.

The result should already demonstrate the complete customer journey:

Microsoft sign-in → Dashboard → Knowledge suggestion → Structured request → Autotask synchronisation state → Ticket timeline → Customer response.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://gp-assist-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/00b8e0d5-e20a-4c22-890f-4ee79055482a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
