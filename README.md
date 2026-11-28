# Supportive Therapy Network — Website

Public-facing STN website source.

## Deployment status

**Latest GitHub Pages deployment: successful.** Build validation, allow-listed site assembly, artifact upload and Pages deployment all passed on 28 November 2026.

- Public domain intended: https://supportivetherapy.network
- Latest deployment run: https://github.com/drpsych26/STN-Website/actions/runs/46129177600
- Deployed commit: `e52843b45dd0dd5147bb2abbf114adeb25eedacd`

## Intended custom domain

GitHub Pages deployment run 64 completed successfully on 28 November 2026 and returned `https://supportivetherapy.network/` as the deployment environment URL. This confirms the Pages deployment target, but it is not a substitute for an independent public DNS, TLS certificate, HTTP-to-HTTPS redirect and live-page check. Those external checks remain open because the live domain could not be independently fetched during this review.

This repository deploys through a custom GitHub Actions workflow. GitHub's documentation states that a `CNAME` file is ignored for this publishing method; the custom domain must be configured in GitHub Pages settings. Verify that the setting still shows `supportivetherapy.network`:

1. Open https://github.com/drpsych26/STN-Website/settings/pages
2. Under **Custom domain**, confirm `supportivetherapy.network` is present.
3. Confirm GitHub reports DNS checks passed, a valid HTTPS certificate is issued, and **Enforce HTTPS** is enabled.

Then verify DNS at the domain registrar/provider:

| Type | Host/name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `drpsych26.github.io` |

Remove conflicting apex A/AAAA/ALIAS/ANAME records and any conflicting `www` CNAME before adding the GitHub Pages records. Do not use wildcard DNS records. DNS propagation may take up to 24 hours. After GitHub verifies DNS and provisions the certificate, enable **Enforce HTTPS**. See the official [GitHub Pages custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Required before operational launch

- Confirm the public phone number and service address. The six active published addresses (info@, help@, partnership@, support@, accounts@ and privacy@ at supportivetherapy.network) are configured for forwarding to STN.ltd.management@gmail.com through ImprovMX. Keep these forwarding routes in place as the permanent destination for domain email. Confirm forwarding after any DNS or routing change.
- Formally designate and publish the STN privacy officer; approve the complete website privacy notice and confirm retention, mailbox access controls, processor terms and incident handling.
- Confirm which services are currently accepting referrals and the regions covered.
- Confirm approved logo/brand assets and all public claims about clinical validation, registrations, accreditations or service availability.
- Complete a real-device accessibility, navigation and content review.

The site deliberately does not invent service availability, professional registrations or regulatory approvals. Contact email is verified as of 25 November 2026. The Contact page now uses FormSubmit to forward general enquiries to `support@supportivetherapy.network` (the verified STN support alias, which forwards to `STN.ltd.management@gmail.com`); the first real submission must be used to activate and verify the recipient address. Do not use the form for health information, crisis details or identity documents. `PRIVACY-NOTICE-DRAFT.md` documents the current form flow but remains subject to privacy-officer/legal review and is not a completed Privacy Act 2020 or Health Information Privacy Code assessment.
