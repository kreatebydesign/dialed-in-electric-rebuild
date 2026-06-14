# SEO Plan — Dialed In Electric
**Focus:** Generator-first, Roseburg local, Douglas County regional  
**Platform:** Next.js (SSG) → Vercel  
**Timeline:** Build into every page from day one

---

## Primary Keyword Targets

### Tier 1 — Generator (Top Priority)
| Keyword | Monthly Est. | Intent |
|---|---|---|
| generator installation Roseburg OR | High | Commercial |
| backup generator installation Roseburg | High | Commercial |
| whole home generator Roseburg | Medium | Commercial |
| standby generator Roseburg | Medium | Commercial |
| Generac generator installation Roseburg | Medium | Commercial |
| Generac dealer Roseburg Oregon | Medium | Commercial |
| whole house generator Oregon | Medium | Commercial |
| generator installer Douglas County OR | Low-Med | Commercial |
| automatic standby generator Roseburg | Low-Med | Commercial |
| generator installation Sutherlin OR | Low | Commercial |

### Tier 2 — Electrician (Core)
| Keyword | Monthly Est. | Intent |
|---|---|---|
| electrician Roseburg OR | High | Commercial |
| licensed electrician Roseburg | Medium | Commercial |
| electrical contractor Roseburg OR | Medium | Commercial |
| residential electrician Roseburg | Medium | Commercial |
| commercial electrician Roseburg | Medium | Commercial |
| electrical services Roseburg Oregon | Medium | Commercial |
| electrician near me Roseburg | Medium | Commercial |

### Tier 3 — Service-Specific
| Keyword | Monthly Est. | Intent |
|---|---|---|
| panel upgrade Roseburg OR | Low-Med | Commercial |
| 200 amp panel upgrade Roseburg | Low | Commercial |
| EV charger installation Roseburg | Low-Med | Commercial |
| home wiring Roseburg OR | Low | Commercial |
| new home wiring Roseburg Oregon | Low | Commercial |
| commercial wiring Roseburg OR | Low | Commercial |
| manual transfer switch Roseburg | Low | Commercial |

### Tier 4 — Douglas County Regional
| Keyword | Monthly Est. | Intent |
|---|---|---|
| electrician Sutherlin OR | Low | Commercial |
| electrician Winston OR | Low | Commercial |
| electrician Green OR | Low | Commercial |
| electrician Myrtle Creek OR | Low | Commercial |
| generator installation Douglas County | Low | Commercial |
| generator installer Canyonville OR | Low | Commercial |

---

## Page-Level SEO Assignments

### Home `/`
- **Title:** `Electrician Roseburg OR | Generator Installation | Dialed In Electric`
- **H1:** `Roseburg's Generator & Electrical Contractor`
- **Description:** `Licensed electrician in Roseburg, OR. Generac standby generator installation, panel upgrades, new home wiring, and commercial electrical. Same-week availability. CCB# 228668.`
- **Schema:** LocalBusiness, Electrician

### Generators `/generators`
- **Title:** `Generator Installation Roseburg OR | Generac Standby | Dialed In Electric`
- **H1:** `Generac Standby Generator Installation in Roseburg, OR`
- **Description:** `Turnkey Generac standby generator installation in Roseburg, OR. Automatic backup power with pad, transfer switch, and gas coordination. Licensed electrician. Call 541-817-6480.`
- **Schema:** Service, LocalBusiness
- **Target:** generator installation Roseburg OR, backup generator Roseburg, Generac dealer Roseburg

### Backup Power `/backup-power`
- **Title:** `Manual Transfer Switch Installation Roseburg OR | Dialed In Electric`
- **H1:** `Manual Transfer Switch & Portable Generator Hookups`
- **Description:** `Safe, code-compliant manual transfer switch installation in Roseburg, OR. Connect your portable generator to essential circuits. Licensed. Fast install.`
- **Schema:** Service

### Electrical Services Hub `/electrical-services`
- **Title:** `Electrical Services Roseburg OR | Panel, Wiring, EV Charger | Dialed In Electric`
- **H1:** `Electrical Services in Roseburg, Oregon`
- **Description:** `Full-service electrical contractor in Roseburg, OR. Panel upgrades, new home wiring, commercial wiring, EV charger installation. Licensed & insured. CCB# 228668.`

### Panel Upgrades `/panel-upgrades`
- **Title:** `Panel Upgrade Roseburg OR | 200 Amp Service Upgrade | Dialed In Electric`
- **H1:** `Panel & Service Upgrades in Roseburg, OR`
- **Schema:** Service

### Service Areas Hub `/service-areas`
- **Title:** `Electrician Service Areas | Roseburg, Sutherlin, Winston | Dialed In Electric`
- **H1:** `Serving Roseburg and Douglas County, Oregon`
- **Schema:** LocalBusiness with areaServed

### City Pages `/service-areas/[city]`
- One page per city, unique H1, unique intro paragraph, 350+ words
- Embed schema for that city

---

## Service Area City Pages (Priority Order)

1. `/service-areas/roseburg` — Primary, most search volume
2. `/service-areas/sutherlin` — Second market
3. `/service-areas/winston` — Close suburb
4. `/service-areas/green` — Confirmed current area
5. `/service-areas/myrtle-creek` — User-requested target
6. `/service-areas/canyonville` — User-requested target
7. `/service-areas/glide` — User-requested target
8. `/service-areas/oakland` — User-requested target
9. `/service-areas/melrose` — Current coverage, add page
10. `/service-areas/lookingglass` — Current coverage, add page
11. `/service-areas/tri-city` — User-requested target
12. `/service-areas/garden-valley` — Current coverage, add page
13. `/service-areas/wilbur` — Current coverage, add page

---

## Technical SEO Requirements

### Must-Haves at Launch
- [ ] Canonical tags on all pages
- [ ] robots.txt (allow all, discard /api/ routes)
- [ ] XML sitemap at `/sitemap.xml` (Next.js built-in)
- [ ] Port Google Search Console verification meta tag: `dkQWFvw6CPfAhk-sDHzwxHYWHZNfK524ME-pf8pmJmI`
- [ ] OG tags on all pages (og:title, og:description, og:image, og:type)
- [ ] Twitter card tags
- [ ] Structured data: LocalBusiness schema on Home and service area pages
- [ ] Structured data: Service schema on each service page
- [ ] Structured data: FAQPage schema on FAQ page
- [ ] 301 redirects from all old Wix URLs
- [ ] Next.js Image optimization on all photos
- [ ] Mobile-first responsive

### Performance Targets (Core Web Vitals)
- LCP: < 2.5s
- CLS: < 0.1
- INP: < 200ms
- Lighthouse performance score: 90+

### Local SEO Signals
- NAP consistency: "Dialed In Electric Inc. · 2819 Cleveland Hill Rd · Roseburg, OR · 541-817-6480"
- Same NAP in footer on every page
- LocalBusiness schema with geo coordinates
- City + service keywords in H1s and first 100 words
- Google Business Profile link in footer

---

## Content Writing Rules

1. Lead every service page with the city + service in the first sentence.
2. Use "Roseburg, OR" not just "Roseburg" for geo signals.
3. Include CCB license number on Home, About, and Contact pages.
4. Don't stuff — write for humans, optimize for crawlers as a secondary goal.
5. No duplicate meta descriptions. Every page unique.
6. FAQ answers should use complete sentences (voice search optimization).
7. City pages: minimum 300 words, unique intro, services offered in that area.

---

## Competitive Landscape Notes

- Most electrician sites in rural Oregon are Wix/Squarespace templates, low performance, generic copy
- A clean, fast, locally-optimized Next.js site will outrank most competitors within 3–6 months of indexing
- Generac-specific pages are underserved in this market — this is the biggest SEO opportunity
- Target featured snippets for "how does a standby generator work" and "generator installation cost Oregon"
