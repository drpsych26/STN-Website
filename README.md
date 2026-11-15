# Supportive Therapy Network — Website

Public-facing STN website source.

## Current content
- Whole-person care model and support pathways.
- Digital assessment journey overview.
- Human clinical oversight, safety and privacy principles.
- Responsive layout for mobile, tablet and desktop.

## Deployment status
The website source is committed, but **a live deployment has not yet been verified**.

The GitHub Pages workflow is configured in `.github/workflows/pages.yml`. Its latest run failed because GitHub rejected the Pages site creation request with `Resource not accessible by integration`. The connected GitHub integration can write repository contents and workflows but cannot enable the Pages site through the repository administration endpoint.

### One-time owner action to enable Pages
1. Open **Settings → Pages** in this repository: https://github.com/drpsych26/STN-Website/settings/pages
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Save the setting.
4. Open **Actions → Deploy STN website to GitHub Pages** and rerun the latest workflow, or push a subsequent commit.
5. Confirm the deployment job succeeds and verify the published URL before announcing the site as live.

Only after Pages is enabled and the deployment succeeds should the verified STN domain and DNS be connected. Do not add a CNAME or DNS records until the exact domain and hosting target are confirmed.

## Required before publishing operational contact details
- Confirm the public STN email address, phone number and service address.
- Publish a reviewed privacy notice and website terms.
- Confirm which services are currently accepting referrals and the regions covered.
- Confirm the approved logo/brand asset and public claims about clinical validation, registrations, accreditations or service availability.

The site deliberately does not invent contact details, service availability, professional registrations or regulatory approvals. The enquiry section is informational until a verified contact channel is supplied. The privacy notice is a draft and must not be treated as a completed Privacy Act 2020 or Health Information Privacy Code assessment.
