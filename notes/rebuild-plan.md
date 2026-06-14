# Rebuild Plan — Dialed In Electric
**Project:** KXD Premium Website Rebuild  
**Client:** Dialed In Electric Inc.  
**Location:** Roseburg, Oregon  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS  
**Retainer:** $250/month — build efficient, no overengineering

---

## Guiding Principles

1. Generator-first. Every page should funnel toward backup power inquiries.
2. Local-first SEO. Roseburg and Douglas County dominate every meta and heading.
3. Clean and fast. No bloat, no CMS, no animations until Phase 3.
4. Real over polished. Use real photos. Write like a real contractor.
5. Convert. Every page ends with a clear CTA.

---

## Recommended Sitemap

```
/                         → Home
/generators               → Generac Standby Generators (primary SEO page)
/backup-power             → Manual Transfer Switch + portable generator hookups
/electrical-services      → Services hub (panel upgrades, new wiring, commercial, EV)
/panel-upgrades           → Panel & Service Upgrades
/new-home-wiring          → New Home Wiring
/commercial               → Commercial Wiring
/ev-charger               → EV Charger Installation
/service-areas            → Service Areas hub
/service-areas/roseburg   → Roseburg (city page)
/service-areas/sutherlin  → Sutherlin (city page)
/service-areas/winston    → Winston (city page)
/service-areas/[...more]  → Other Douglas County cities
/projects                 → Gallery / Recent Work
/about                    → About Dialed In Electric
/faq                      → FAQ
/contact                  → Contact / Request Service
/careers                  → Careers (stub)
/privacy                  → Privacy Policy
```

**Total pages at launch:** ~20 (core) + city pages

---

## Phase Breakdown

### Phase 1 — Audit + Strategy (CURRENT)
- [x] Crawl and audit current Wix site
- [x] Define sitemap
- [x] Define SEO strategy
- [x] Write planning docs
- [ ] Get client sign-off on sitemap + direction

### Phase 2 — Foundation + Global Components
- Initialize Next.js project (done)
- Configure Tailwind with brand tokens
- Build layout: Header, Footer, Nav
- Build shared components: Button, Section, CTABanner
- Build Home page (hero + services + CTA)
- No individual service pages yet

### Phase 3 — Core Service Pages
- /generators (primary SEO page — most effort here)
- /backup-power (manual transfer switch)
- /electrical-services (hub)
- /panel-upgrades
- /new-home-wiring
- /commercial
- /ev-charger

### Phase 4 — Local SEO Pages
- /service-areas hub
- Individual city pages (Roseburg, Sutherlin, Winston, Green, etc.)
- Structured data (LocalBusiness, Service schema)

### Phase 5 — Trust + Conversion
- /projects gallery
- /about (with owner story)
- /faq (expanded)
- /contact (native form)
- /reviews integration (Google embed or display)

### Phase 6 — Polish + Launch
- Performance audit (Core Web Vitals)
- SEO meta review all pages
- Mobile QA
- Form testing
- DNS cutover plan
- Redirect map from old Wix URLs

---

## Technical Decisions

| Decision | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG/SSR, SEO, performance |
| Styling | Tailwind CSS | Fast build, consistent system |
| Language | TypeScript | Type safety, easier maintenance |
| Forms | Native Next.js API route or Formspree | No Wix dependency |
| Images | next/image | Automatic optimization |
| Hosting | Vercel (recommended) | Zero-config Next.js, edge performance |
| Analytics | Vercel Analytics + Google Search Console | Simple, free |
| CMS | None (Phase 1) | Avoid complexity, retainer-friendly |
| Fonts | Next/font (Google Fonts) | No layout shift |

---

## URL Migration Map (Wix → New)

| Old URL | New URL |
|---|---|
| `/generac-standby-generators` | `/generators` |
| `/manual-transfer-switch` | `/backup-power` |
| `/panel-and-service-upgrades` | `/panel-upgrades` |
| `/new-home-wiring` | `/new-home-wiring` |
| `/commercial-wiring` | `/commercial` |
| `/new-electrical-services` | `/electrical-services` (merged) |
| `/ev-charger-installation` | `/ev-charger` |
| `/locations` | `/service-areas` |
| `/projects` | `/projects` |
| `/reviews` | 301 → `/about` |
| `/services` | 301 → `/electrical-services` |
| `/faq` | `/faq` |
| `/about` | `/about` |
| `/contact` | `/contact` |
| `/careers` | `/careers` |
| `/privacy` | `/privacy` |

---

## Design System

### Colors
```
--color-white:        #FFFFFF
--color-charcoal:     #1C1C1E   (primary dark)
--color-charcoal-mid: #2D2D30   (secondary dark)
--color-amber:        #F5A623   (electric yellow/amber accent)
--color-amber-light:  #FFB84D   (hover/highlight)
--color-gray-light:   #F5F5F5   (section backgrounds)
--color-gray-mid:     #9B9B9B   (secondary text)
--color-border:       #E0E0E0   (dividers)
```

### Typography
```
Display:   Inter or DM Sans — Bold 700/800, tight tracking
Body:      Inter — Regular 400, 1.6 line height
Labels:    Inter — Medium 500, uppercase, tracked
Mono/data: JetBrains Mono or IBM Plex Mono (for license numbers etc.)
```

### Spacing
8px base grid. Section padding: 80px vertical (desktop), 48px (mobile).

### Component Patterns
- Buttons: Solid amber (primary), outlined white on dark (secondary)
- Sections: White / light gray / charcoal alternating
- Cards: White with 1px border, subtle shadow, hover lift
- Hero: Full-width, charcoal/dark background, white text, amber accent CTA
