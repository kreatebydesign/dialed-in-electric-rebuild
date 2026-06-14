# Media Plan — Dialed In Electric
**Goal:** Download and re-host all existing photos. Plan new shoots for Phase 3+.

---

## Existing Photos to Preserve

All currently hosted on Wix CDN (`static.wixstatic.com`). Must be re-downloaded before Wix site goes offline.

### Confirmed Project Gallery Images (10 photos)

| # | Alt Text / Description | Wix URL Fragment |
|---|---|---|
| 1 | Generac & Transfer Equipment | `24f460_6cfde1c6985a45a485a72e22fdbe9920~mv2.jpg` |
| 2 | Multi-Meter Service Wall | `24f460_063d062ebc9943c8832f4e77431b5624~mv2.jpg` |
| 3 | Rough-In Subpanel & Homeruns | `24f460_e6ed9d60739d40d2a18ca7860359a922~mv2.jpg` |
| 4 | Service Upgrade — Conduit Work | `24f460_2c97063cd58f476daefa672b7d66f982~mv2.jpg` |
| 5 | Switchgear Row | `24f460_4bc33fc78c7b4057abf98537bc573f3d~mv2.jpg` |
| 6 | Interior Fused Disconnects | `24f460_6168a7a570ba416f8c204f64f1d6c20e~mv2.jpg` |
| 7 | Propane Tank & Generator Pad | `24f460_8c2cf536cab44065a8353a5f79857c20~mv2.jpg` |
| 8 | Residential Generator Set | `24f460_1ccedc9879634758bcec6b313ef9d819~mv2.jpg` |
| 9 | Service Equipment Array | `24f460_707171d6596747d6adbb683c183ca25c~mv2.jpg` |
| 10 | Panel & Service Work | `24f460_abfed686382e4802b08b4f5eb019fdc2~mv2.jpg` |

### Logo
- Current logo: `24f460_95e1ca14ca2a4c4096b154ff97568cd5~mv2.png`
- Used as favicon, OG image, and header logo
- Download and save as `/public/images/logo.png`

**Action Required:** Download all images from Wix CDN before site migration.  
Download script target: `/public/images/projects/`

---

## Image Naming Convention

```
/public/
  images/
    logo.png
    logo-white.png
    og-default.jpg              (1200x630 for social sharing)
    projects/
      generac-transfer-equipment.jpg
      multi-meter-service-wall.jpg
      rough-in-subpanel-homeruns.jpg
      service-upgrade-conduit.jpg
      switchgear-row.jpg
      interior-fused-disconnects.jpg
      propane-tank-generator-pad.jpg
      residential-generator-set.jpg
      service-equipment-array.jpg
      panel-service-work.jpg
    hero/
      hero-home.jpg             (new — see Phase 3 shoot list)
      hero-generators.jpg       (new or from existing)
```

---

## Optimization Requirements

- All photos: WebP format with JPEG fallback
- Max width: 2400px (retina)
- Compressed under 300KB per image where possible
- Use `next/image` for automatic size/format serving
- Alt text: descriptive, includes service type and location where relevant
  - Example: `Generac standby generator installation in Roseburg, OR`
  - NOT: `image1.jpg` or `IMG_4923`

---

## Phase 3+ New Media Needs

### Priority Shoots

**1. Truck / Exterior**
- Company truck with logo, clean background or jobsite
- Used: Hero section, About page, social
- Notes: Clean the truck first. Daytime, good light.

**2. Generator Install (in progress or completed)**
- Generac unit installed on pad, transfer switch, clean conduit run
- Used: /generators hero, homepage services section
- Best shot: Exterior pad with generator, neat conduit, label visible

**3. Crew / Team**
- Owner or lead tech, professional but approachable
- Hard hat optional, tools or panel in background
- Used: About page, trust section on Home

**4. Panel Work**
- Neat panel with labeled breakers
- Used: /panel-upgrades, Homepage "Recent Work"
- Notes: Good lighting inside, phone flashlight if needed

**5. Jobsite (active or completed)**
- Conduit runs, service entrance, clean trim-out
- Multiple types — commercial and residential if possible

---

## OG / Social Image Plan

- Default OG image: Logo + tagline on charcoal background, 1200x630
- Generator page OG: Generator photo cropped to 1200x630
- About OG: Team/truck photo

---

## Brand Asset Status

| Asset | Status | Action |
|---|---|---|
| Logo (PNG) | Exists on Wix | Download + optimize |
| Logo (SVG) | Unknown | Request from client or recreate |
| Logo (white version) | Unknown | Request from client |
| Brand colors | Defined in rebuild-plan.md | Implement in Tailwind |
| Brand fonts | Defined in rebuild-plan.md | Implement with next/font |
| Truck photos | Unknown | Request from client |
| Team photos | Unknown | Request from client |
| Google Business photos | Unknown | Pull from GBP |

---

## Client Media Request List

Ask client to provide:
1. High-res logo (SVG or PNG, both color and white versions)
2. Any truck / exterior company photos
3. Any crew / owner photos
4. Any additional project photos not on current site
5. Google Business Profile login (to pull reviews and photos)
6. Any before/after photos from jobs

---

## Notes on Using Real vs Stock Photography

**DO NOT use stock photography for:**
- Generators (use real Dialed In installs only)
- Team/crew (use real photos only)
- Trucks (use real truck only)

**Stock is acceptable for:**
- Background textures (dark metal, electrical pattern)
- Icon illustrations
- Map/location graphics

Real photos of real work are the #1 trust signal for a local contractor site.
