# Supportive Therapy Network — Website

Public-facing STN website source.

## Deployment status

**GitHub Pages deployment: successful.** Build and deploy jobs passed on 15 November 2026.

- Current Pages URL: supportive therapy.network
- Workflow: https://github.com/drpsych26/STN-Website/actions/runs/43658020226

## Intended custom domain

STN has supplied `supportivetherapy.network` as its custom domain. A root `CNAME` marker has been committed to this repository. **The custom domain is not yet confirmed active.**

This repository deploys through a custom GitHub Actions workflow. GitHub's documentation states that a `CNAME` file is ignored for this publishing method. The repository owner must therefore set the custom domain in the GitHub Pages settings:

1. Open https://github.com/drpsych26/STN-Website/settings/pages
2. Under **Custom domain**, enter `supportivetherapy.network` and save.
3. Confirm GitHub displays the domain and begins DNS/HTTPS checks.

Then configure DNS at the domain registrar/provider:

| Type | Host/name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `drpsych26.github.io` |

Remove conflicting apex A/AAAA/ALIAS/ANAME records and any conflicting `www` CNAME before adding the GitHub Pages records. Do not use wildcard DNS records. DNS propagation may take up to 24 hours. After GitHub verifies DNS and provisions the certificate, enable **Enforce HTTPS**. See the official [GitHub Pages custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Required before operational launch

- Confirm the public phone number and service address. Email: the published addresses (info@, help@, partnership@, investors@, support@, accounts@, privacy@ supportivetherapy.network) forward to the STN Gmail via ImprovMX. Delivery to the STN inbox was confirmed on 25 November 2026 with test messages. Re-test after any DNS or forwarding change.
- Publish a reviewed privacy notice and website terms.
- Confirm which services are currently accepting referrals and the regions covered.
- Confirm approved logo/brand assets and all public claims about clinical validation, registrations, accreditations or service availability.
- Complete a real-device accessibility, navigation and content review.

The site deliberately does not invent contact details, service availability, professional registrations or regulatory approvals. Contact email is verified as of 25 November 2026 (see above); the enquiry section remains informational until the phone number and service address are confirmed. `PRIVACY-NOTICE-DRAFT.md` is a draft and must not be treated as a completed Privacy Act 2020 or Health Information Privacy Code assessment. Do not collect health information through this static site.
