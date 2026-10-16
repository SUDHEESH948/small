# S mall (Small Mall) — Commercial Property Sales, Rentals, Floor Plans & Mall Directory

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7.3.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-Proprietary-0E5EC8)](#license)

A modern, high-performance, fully responsive commercial property and retail complex web platform for **S mall (Small Mall)**, located in **Edakkara, Malappuram District, Kerala, India**.

Engineered with **React 19**, **Vite 6**, **Tailwind CSS v4**, **React Router v7**, and **Framer Motion**, this application provides commercial tenants, investors, retailers, and visitors with an interactive property portal. It features **interactive 2D architectural blueprint floor plan visualizers**, **commercial inventory filters (Sale & Lease)**, **multi-floor space breakdowns**, **entertainment & cinema showcases**, **regional branch networks**, and **direct WhatsApp lead routing to mall management**.

---

## 📌 Table of Contents

- [What is Included](#-what-is-included)
  - [1. Web Pages & Application Routes](#1-web-pages--application-routes)
  - [2. Interactive UI Components & Modules](#2-interactive-ui-components--modules)
  - [3. Architectural Blueprints & Media Assets](#3-architectural-blueprints--media-assets)
  - [4. Data Models & Inventory Stores](#4-data-models--inventory-stores)
- [Key Features](#-key-features)
  - [Interactive 2D Blueprint & Floor Plan Explorer](#1-interactive-2d-blueprint--floor-plan-explorer)
  - [Commercial Property Search & Filter Engine](#2-commercial-property-search--filter-engine)
  - [Instant WhatsApp Lead Generation](#3-instant-whatsapp-lead-generation)
  - [Commercial Leasing & Anchor Showcase](#4-commercial-leasing--anchor-showcase)
  - [Experiences, Cinema & Lifestyle Destination](#5-experiences-cinema--lifestyle-destination)
  - [Multi-Branch Regional Network](#6-multi-branch-regional-network)
  - [Mobile-First Responsive Design](#7-mobile-first-responsive-design)
- [Specialities & Architectural Details](#-specialities--architectural-details)
  - [1. Strategic Confluence Location](#1-strategic-confluence-location)
  - [2. Floor-by-Floor Blueprint Specifications](#2-floor-by-floor-blueprint-specifications)
  - [3. Commercial Facilities & Infrastructure](#3-commercial-facilities--infrastructure)
- [Mall Location & Contact Details](#-mall-location--contact-details)
- [Tech Stack & Dependencies](#-tech-stack--dependencies)
- [Getting Started](#-getting-started)
- [Project Directory Structure](#-project-directory-structure)
- [Deployment Guide](#-deployment-guide)
- [License](#-license)

---

## 📦 What is Included

The repository contains a complete, production-ready, client-side web application with comprehensive UI components, architectural layout blueprints, verified commercial property data, and brand assets.

### 1. Web Pages & Application Routes

| Route | Page Component | Purpose & Included Sections |
|---|---|---|
| `/` | `HomePage.jsx` | **Flagship Visitor Experience**: Premium cinematic hero (`HomeHero`), Mall Highlights across retail, fashion, dining, and family fun (`HomeAdvantages`), Entertainment & Experiences showcasing Magic Frames Cinemas, KFC & Salons (`HomeExperiences`), Visitor Facilities & Amenities (`HomeFacilities`), Mall Location & Dual-Highway Accessibility (`HomeBranches`), and Visitor "Plan Your Visit" concierge banner (`HomeContact`). |
| `/properties` | `PropertiesPage.jsx` | **Architectural Floor Plans & Units for Sale**: Interactive master blueprint visualizer, floor-level tabs (Ground, First, Second, All Floors), high-resolution blueprint modals with zoom/pan, unit crop diagrams, and individual specification sheets. |
| `/leasing`<br>`/rentals`<br>`/rooms` | `RentalsPage.jsx` | **Commercial Leasing & Rentals Portal**: Opportunity sector showcases (Supermarket, Food Court, Gaming & Entertainment, Retail Shops, Pop-up Kiosks, Clinics/Studios), live filterable commercial rental inventory, business growth pillars, and commercial enquiry form. |
| `/explore`<br>`/branches` | `BranchesPage.jsx` | **Mall Directory & Regional Branches**: Categorized brand directory (Shopping, Dining, Entertainment, Lifestyle & Services), interactive floor plan quick-links, and regional branch network overview with live property counts and Google Maps directions. |
| `/experiences` | `ExperiencesPage.jsx` | **Cinema & Lifestyle Showcase**: Features Magic Frames Multiplex Cinemas with online ticket booking integration, KFC & multi-cuisine food court, toys & kids play area, gaming arcade, and premium salons. |
| `/contact` | `ContactPage.jsx` | **Contact, Location & Inquiries**: Management phone and WhatsApp channels, physical address with highway junctions, opening hours (10:00 AM – 10:00 PM), parking guide, and browser-validated contact form with automatic WhatsApp message formatting. |
| `*` | `HomePage.jsx` | **Catch-all Fallback**: Gracefully routes unknown paths back to the home page to preserve single-page application (SPA) integrity. |

### 2. Interactive UI Components & Modules

- **`Navbar.jsx`**: Responsive navigation bar featuring 5 primary destinations (`Home`, `Properties`, `Explore`, `Experiences`, `Contact`), an interactive **Properties dropdown menu** (with quick links for *Commercial Leasing*, *Properties for Sale*, *All Properties*, and category shortcuts), an expandable mobile drawer, and a golden **"Enquire Space"** action button.
- **`HomeHero.jsx`**: Cinematic full-width hero section with photography background carousel, headline *"Discover More at S Mall"*, visitor supporting text, and action buttons (*Explore the Mall*, *Plan Your Visit*).
- **`HomeAdvantages.jsx`**: Section 2 Experience Pillars presenting 4 interactive pillars (*Shop*, *Style*, *Dine*, and *Play*) with interactive photo galleries and feature checklists.
- **`HomeBrandDirectory.jsx`**: Section 3 Featured Brands & Outlets Explorer (Forum Kochi Store Finder model) with category filter tabs (*All Brands*, *Shopping*, *Dining*, *Entertainment*, *Lifestyle*) and brand cards with floor locations.
- **`HomeExperiences.jsx`**: Section 4 Entertainment & Experiences featuring Magic Frames Multiplex Cinemas (with direct BookMyShow booking link), KFC & food court, toys store, arcade gaming, and premium salon.
- **`HomeFacilities.jsx`**: Section 5 Visitor Facilities & Amenities with 200+ vehicle parking capacity, central escalators & elevators, dual-highway accessibility, and 24/7 security & power backup.
- **`HomeBranches.jsx`**: Section 6 Mall Location & Accessibility detailing Main Road Edakkara, State Highway (Calicut–Ooty / CNG Road) frontage, Malayora Highway corner access, distance guides, and Google Maps directions.
- **`HomeContact.jsx`**: Section 7 Plan Your Visit visitor concierge banner (*"Your Next Experience Starts Here"*), opening hours, and direct action buttons (*Get Directions*, *WhatsApp Us*, *Contact Us*).
- **`HomePropertySections.jsx`**: Floor-by-floor architectural blueprint layout browser with level badges, unit cards, status indicators, and an interactive zoomable floor plan modal (preserved for property discovery).
- **`PropertySection.jsx`**: Versatile property search and filter engine supporting multi-parameter filtering (text search, category, type, branch, price range, square footage, availability) with animated transitions, image galleries, and detailed property specification modals.
- **`BranchSection.jsx`**: Multi-branch location showcase with active branch filtering, key statistics, Google Maps navigation links, and associated property listings.
- **`ContactSection.jsx`**: Management office contact cards, operational details, parking information, and a validated direct-inquiry form.
- **`FloatingWhatsApp.jsx`**: Persistent, animated floating WhatsApp button available across all pages, offering instant one-click messaging to mall management (`+91 94471 75232`).
- **`Footer.jsx`**: Modern deep-navy footer with brand identity, quick navigation links, opening hours, commercial leasing disclaimer, and social media links.

### 3. Architectural Blueprints & Media Assets

Located in `public/images/` and `public/logo/`:
- **Master Blueprint Plans**:
  - `ground-floor-plan.png` / `ground-floor-plan.jpg`: Ground floor layout (Level 0 — 6,220 sq. ft.)
  - `first-floor-plan.png` / `first-floor-plan.jpg`: First floor layout (Level 1 — 7,779 sq. ft.)
  - `second-floor-plan.png` / `second-floor-plan.jpg`: Second floor layout (Level 2 — 5,800 sq. ft.)
  - `all-floors-plan.png` / `all-floors-plan.jpg` / `commercial-leasing-floor-plans.png`: Complete 3-level master blueprint diagram.
- **Isolated Unit Blueprint Crops**:
  - `unit-gf-rr.png`: Ground Floor Rear Right Wing (3,720 sq. ft. anchor)
  - `unit-gf-ext.png`: Ground Floor Driveway Extension Area (2,500 sq. ft.)
  - `unit-ff-rl.png`: First Floor Rear Left Wing partitioned clinic/office bays (1,457 sq. ft.)
  - `unit-ff-rw.png`: First Floor Entire Right Wing Supermarket space (6,322 sq. ft.)
- **Curated WebP Photography**: Responsive image sets (`hero`, `shopping`, `dining`, `entertainment`, `experience`, `about`) formatted in 480w, 640w, 800w, 960w, 1200w, and 1600w resolutions for fast loading times.
- **Official Brand Logos**: High-resolution trimmed, horizontal, transparent, tulip mark, and text logos in `public/logo/`.

### 4. Data Models & Inventory Stores

- **`src/data/properties.js`**: Verified listings for commercial spaces for sale and lease:
  - Commercial showrooms with State Highway frontage
  - Corner retail spaces with dual-road exposure
  - First-floor high-footfall concourse shops
  - Executive corporate office suites
  - Highway-front dining & cafe units with commercial exhaust ducting
  - Turnkey fashion boutiques with pre-fitted dressing rooms
  - Private consulting suites & clinical chambers
  - Basement secure storage units with direct vehicle loading dock
- **`src/data/branches.js`**: Directory and metadata for regional commercial centers:
  - **S. Mall — Edakkara (Flagship)**: State Highway & Malayora Highway confluence
  - **S. Mall — Nilambur Promenade**: Transit commercial hub near Nilambur Railway Junction
  - **S. Mall — Gudalur Gateway**: Ooty tourist and freight highway junction
  - **S. Mall — Valley Commercial Centre**: Executive commercial & medical suites corridor

---

## ✨ Key Features

### 1. Interactive 2D Blueprint & Floor Plan Explorer
- High-definition architectural blueprints rendered directly in interactive modal views.
- **Controls**: Smooth **Zoom In (+)**, **Zoom Out (-)**, and **Reset View** controls.
- **Unit Breakdown**: Highlights unit boundaries, square footage allocations, tenant zoning, and status indicators.
- **ESC Key & Mobile Touch Support**: Instant close on Escape key or overlay click, with body scroll locking to prevent background scrolling.

### 2. Commercial Property Search & Filter Engine
- **Search by Keyword**: Filter spaces by name, description, floor level, or tenant suitability.
- **Category Filter**: Toggle between **All Spaces**, **Properties for Sale**, and **Commercial Rentals / Leasing**.
- **Property Type Filter**: Showrooms, Retail Shops, Office Spaces, Rental Rooms, and Basement Storage.
- **Price & Area Sliders/Inputs**: Filter by custom budget ranges and square footage criteria.
- **Availability Toggle**: Switch between currently available units and all inventory.
- **Property Detail Modal**: Displays high-resolution image carousels, detailed specifications (ceiling height, electrical phase capacity, frontage width, monthly CAM charges), and direct inquiry buttons.

### 3. Instant WhatsApp Lead Generation
- Validated enquiry forms automatically build structured WhatsApp messages including:
  - User name, phone number, and email
  - Selected business category / brand name
  - Specific property unit ID or square footage interest
  - Custom user message
- Opens directly into WhatsApp Web or mobile app directed to mall management at `+91 94471 75232`.
- Persistent pulsing floating WhatsApp widget across every page.

### 4. Commercial Leasing & Anchor Showcase
- Categorized presentation of anchor tenant opportunities:
  - **Supermarket / Hypermarket Anchor** (6,322 sq. ft. contiguous wing)
  - **Food Court & Dining Plaza** (equipped with exhaust shafts, grease traps, and patio seating)
  - **Gaming & Family Entertainment Centre**
  - **Retail Fashion & Jewellery Concourse**
  - **Pop-up Kiosks & Forecourt Driveway Spaces**
  - **Corporate & Clinical Consultation Suites**

### 5. Experiences, Cinema & Lifestyle Destination
- **Magic Frames Multiplex Cinemas**: Direct integration to book tickets via BookMyShow.
- **Food & Dining Showcase**: Outlets including KFC and the upcoming Multi-Cuisine Food Court.
- **Family Fun & Retail**: Dedicated spaces for toys, arcade games, and lifestyle salons.

### 6. Multi-Branch Regional Network
- Showcases the broader network of S mall commercial properties in northern Kerala.
- Includes operational hours, direct phone numbers, Google Maps GPS coordinates, and property unit statistics for each location.

### 7. Mobile-First Responsive Design
- Clean layout optimized for displays from 320px mobile screens up to 4K ultra-wide monitors.
- Fast client-side routing with instant scroll-to-top behavior upon route changes.
- Official color scheme: Primary Royal Blue (`#0E5EC8`), Golden Yellow (`#F9B00C`), Deep Navy (`#0B2545`), and Slate Gray (`#F5F7FA`).

---

## 💎 Specialities & Architectural Details

### 1. Strategic Confluence Location
S mall Edakkara occupies one of the most prominent commercial positions in eastern Malappuram district:
- **Front-Side Access**: **State Highway (Calicut–Nilambur–Gudalur / CNG Road / Calicut–Ooty Main Road)** — captures heavy interstate commuter traffic, freight transport, and tourism transit between Calicut, Nilambur, and Ooty (The Nilgiris).
- **Corner-Side Access**: **Malayora Highway (Hill Highway)** — serves daily commuters and residents from the surrounding hill townships and agricultural hubs.
- **Footfall Advantage**: Continuous dual-road exposure with an expansive paved customer forecourt and separate entry/exit vehicular gates.

---

### 2. Floor-by-Floor Blueprint Specifications

The website directly models the official 2D architectural blueprint layout for S mall Edakkara:

```
+-----------------------------------------------------------------------------------+
|                            S MALL EDAKKARA - MASTER LAYOUT                        |
+===================================================================================+
| LEVEL 2 : SECOND FLOOR (5,800+ sq. ft.)                                           |
|   • Magic Frames Multiplex Cinema Concourse                                       |
|   • Planned Anchor Project Expansion Wing (SF-BP)                                 |
|   • Beauty Parlour, Bridal Grooming & Wellness Suite (SF-BTY)                     |
|   • Toys & Kids Retail Concourse (SF-TOY)                                         |
+-----------------------------------------------------------------------------------+
| LEVEL 1 : FIRST FLOOR (7,779+ sq. ft.)                                            |
|   • Supermarket / Hypermarket Anchor Wing (FF-RW: 6,322 sq. ft.)                  |
|     - Rear Main Hall: 4,200 sq. ft.                                               |
|     - Front Units: 2,122 sq. ft.                                                  |
|   • Boutique & Fashion Corridor (FF-BTQ: 2,122 sq. ft. across 4 units - പുതിയത്)  |
|   • Vacant Commercial Bays (FF-RL: 1,457 sq. ft. - 3 units marked NIL)            |
+-----------------------------------------------------------------------------------+
| LEVEL 0 : GROUND FLOOR (6,220+ sq. ft.)                                           |
|   • Rear Right Wing Anchor (GF-RR: 3,720 sq. ft. - Waiting for Big Project)       |
|   • Driveway Extension Area (GF-EXT: 2,500 sq. ft. - അനുമതിക്ക് Area)             |
|   • State Highway Frontage Showrooms (GF-SHW: 2,068 sq. ft. across 4 units)       |
|   • Jewellery Concourse (GF-JWL: 2,118 sq. ft. across 4 units)                    |
|   • Fancy & Footwear Wing (GF-FCY: 1,387 sq. ft. across 3 units)                  |
+-----------------------------------------------------------------------------------+
| BASEMENT LEVEL B1 : PARKING & LOGISTICS                                           |
|   • 200+ Vehicle Parking Capacity (Basement + Surface Forecourt)                  |
|   • Heavy Goods Loading Dock & Direct Vehicle Ramp                                |
|   • Dry Inventory Storage Units (SM-RN-205) & Freight Lift Access                 |
+-----------------------------------------------------------------------------------+
```

#### Detailed Floor Breakdown:

#### Level 0 — Ground Floor (`6,220+ sq. ft. Available Inventory`)
- **Rear Right Wing (GF-RR — 3,720 sq. ft.)**:
  - *Status*: Waiting for Big Project
  - *Suitability*: Department store, anchor showroom, or brand flagship.
  - *Features*: High clear commercial ceiling, direct visibility from the central concourse.
- **Driveway Extension Area (GF-EXT — 2,500 sq. ft.)**:
  - *Status*: Available (`അനുമതിക്ക് Area`)
  - *Suitability*: Open-air cafe, drive-through food kiosk cluster, or outdoor display pavilion.
  - *Features*: Adjacent to the vehicular driveway connecting to Malayora Highway.
- **State Highway Frontage Showrooms (GF-SHW — 2,068 sq. ft. total)**:
  - 4 units: 730, 485, 425, and 428 sq. ft.
  - *Features*: Frameless double-height glass facades facing Calicut-Ooty Highway.
- **Jewellery Concourse (GF-JWL — 2,118 sq. ft. total)**:
  - 4 units: 780, 485, 425, and 428 sq. ft.
  - *Features*: High-security retail corridor situated at the primary pedestrian entrance.
- **Fancy & Footwear Corridor (GF-FCY — 1,387 sq. ft. total)**:
  - 3 units: 485, 474, and 428 sq. ft.
  - *Features*: Adjacent to the central escalator and elevator hub.

#### Level 1 — First Floor (`7,779+ sq. ft. Available Inventory`)
- **Anchor Supermarket Space (FF-RW — 6,322 sq. ft.)**:
  - *Status*: Reserved for Supermarket / Big Project
  - *Composition*: Rear main hall (4,200 sq. ft.) + front units (2,122 sq. ft.).
  - *Features*: Direct goods elevator connection, escalator landing, high-load concrete floor.
- **Boutique & Designer Corridor (FF-BTQ — 2,122 sq. ft. total — `പുതിയത്`)**:
  - 4 units: 735, 485, 474, and 428 sq. ft. (Cyan-highlighted anchor unit).
  - *Features*: Natural light from the central mall atrium, ideal for designer fashion, cosmetics, and footwear.
- **Vacant Commercial Bays (FF-RL — 1,457 sq. ft. total — `Marked NIL`)**:
  - 3 units: 462, 515, and 480 sq. ft.
  - *Features*: Partitioned bays tailored for multi-specialty clinics, dental studios, or corporate consulting offices.

#### Level 2 — Second Floor (`5,800+ sq. ft. Planned Area`)
- **Planned Big Project Expansion Wing (SF-BP — 5,800 sq. ft.)**:
  - *Status*: Now Planned for Big Project
  - *Features*: Marked with red architectural boundary lines; suited for family amusement, banquet hall, or fitness center.
- **Magic Frames Multiplex Cinema Concourse (SF-MF)**:
  - Premier multi-screen theatre driving consistent evening, weekend, and holiday audiences.
- **Beauty Parlour & Wellness Suite (SF-BTY)**:
  - Specialized lifestyle studio for bridal grooming, spa, and beauty treatments.
- **Toys & Kids Retail Concourse (SF-TOY)**:
  - Located beside the cinema ticket lobby for high impulse family shopping.

---

### 3. Commercial Facilities & Infrastructure

- **Dedicated Parking**: Over 200 vehicle parking capacity spanning ground-level paved bays and basement covered parking.
- **Power Infrastructure**: 3-Phase commercial power connections with dedicated commercial generator (genset) backup.
- **HVAC & Ventilation**: Dedicated commercial kitchen exhaust shafts, grease trap connections, and natural cross-ventilation.
- **Vertical Circulation**: High-speed passenger elevators, central escalators, wide staircases, and dedicated freight elevator access.
- **Security & Safety**: 24/7 CCTV surveillance, fire sprinkler systems, night security guards, and heavy-duty rolling shutters.
- **Logistics & Delivery**: Covered basement delivery dock with direct ramp for pickup trucks and logistics handling.

---

## 🏢 Mall Location & Contact Details

| Detail | Information |
|---|---|
| **Property Name** | S mall (S. Mall Edakkara) |
| **Address** | Main Road Edakkara, Malappuram District, Kerala — 679331, India |
| **Highway Confluence** | **Front**: State Highway (Calicut–Nilambur–Gudalur / CNG Road / Calicut–Ooty Main Road)<br>**Corner**: Malayora Highway (Hill Highway) |
| **Direct Phone** | `+91 94471 75232` |
| **WhatsApp Inquiries** | [`+91 94471 75232`](https://wa.me/919447175232) |
| **Email** | `smallmalledakkara@gmail.com` |
| **Operating Hours** | 10:00 AM – 10:00 PM (Open 7 Days a Week) |
| **Cinema Partner** | Magic Frames Cinemas (Edakkara) |

---

## 🛠️ Tech Stack & Dependencies

```
small/
 ├── React 19.0.0          # Next-generation UI library
 ├── Vite 6.0.0            # Next-generation frontend build tooling
 ├── Tailwind CSS v4.0.0   # Utility-first styling engine with @tailwindcss/vite
 ├── React Router v7.3.0   # Client-side SPA routing & URL state management
 ├── Framer Motion 14.1.0  # Production-ready animations and gesture control
 ├── Lucide React 1.56.0   # Clean, modern SVG icon set
 ├── React Icons 5.7.0     # Social & brand icons (WhatsApp, etc.)
 ├── Lenis 1.1.20          # Smooth momentum scroll engine
 └── GSAP 3.12.7           # High-performance timeline animation suite
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (version 18.0 or later recommended) and **npm** installed on your workstation.

Check your versions:
```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd small
   ```

2. Install the required project dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server with hot module replacement (HMR):
```bash
npm run dev
```

The application will be running locally at:
```text
http://localhost:5173
```
*(or your local IP address for testing on mobile devices connected to the same Wi-Fi network)*.

### Building for Production

Create an optimized, minified production build:
```bash
npm run build
```

The bundled static assets will be output to the `dist/` directory, ready to deploy.

### Previewing the Production Build

Test the production bundle locally before deploying:
```bash
npm run preview
```

---

## 📁 Project Directory Structure

```text
small/
├── public/
│   ├── images/                          # High-resolution WebP photos and blueprint drawings
│   │   ├── all-floors-plan.png          # Complete 3-level master architectural blueprint
│   │   ├── ground-floor-plan.png        # Ground floor blueprint (6,220 sq. ft.)
│   │   ├── first-floor-plan.png         # First floor blueprint (7,779 sq. ft.)
│   │   ├── second-floor-plan.png        # Second floor blueprint (5,800 sq. ft.)
│   │   ├── unit-gf-rr.png               # Isolated blueprint: Rear Right Wing anchor
│   │   ├── unit-gf-ext.png              # Isolated blueprint: Driveway Extension area
│   │   ├── unit-ff-rl.png               # Isolated blueprint: Rear Left Wing clinic bays
│   │   ├── unit-ff-rw.png               # Isolated blueprint: Entire Right Wing supermarket
│   │   ├── hero-1600.webp               # Full-width mall exterior photography
│   │   ├── shopping.webp                # Retail concourse photography
│   │   ├── dining.webp                  # Dining and food court photography
│   │   ├── entertainment.webp           # Cinema and gaming photography
│   │   └── about.webp                   # Mall interior and architecture photography
│   ├── logo/                            # Official S mall brand logos
│   │   ├── small-logo-horizontal.png    # Primary horizontal branding
│   │   ├── small-logo-trimmed.png       # Trimmed logo for banners & headers
│   │   ├── small-tulip.png              # Tulip brand mark
│   │   └── small-text.png               # Brand logotype
│   └── small-mark.svg                   # Vector icon
│
├── src/
│   ├── components/                      # Reusable modular UI components
│   │   ├── home/
│   │   │   ├── HomeHero.jsx             # Section 1: Cinematic hero slider with quick stats bar
│   │   │   ├── HomeAdvantages.jsx       # Section 2: 4 Experience Pillars (Shop, Style, Dine, Play)
│   │   │   ├── HomeBrandDirectory.jsx   # Section 3: Store Finder & Brands Explorer (Forum Kochi model)
│   │   │   ├── HomeExperiences.jsx      # Section 4: Entertainment & Experiences (Cinema, KFC, Salons)
│   │   │   ├── HomeFacilities.jsx       # Section 5: Visitor facilities (Parking, Lifts, Security)
│   │   │   ├── HomeBranches.jsx         # Section 6: Mall Location & Dual-Highway Accessibility
│   │   │   ├── HomeContact.jsx          # Section 7: Plan Your Visit visitor concierge banner
│   │   │   └── HomePropertySections.jsx # Floor-by-floor blueprint visualizer (for property discovery)
│   │   ├── BranchSection.jsx            # Multi-branch showcase with stats & maps
│   │   ├── ContactSection.jsx           # Full contact page layout with WhatsApp form
│   │   ├── FloatingWhatsApp.jsx         # Global animated WhatsApp floating button
│   │   ├── Footer.jsx                   # Deep navy footer with quick links & legal notice
│   │   ├── Navbar.jsx                   # Sticky header with Properties dropdown & mobile drawer
│   │   └── PropertySection.jsx          # Comprehensive property search & filter engine
│   │
│   ├── data/
│   │   ├── branches.js                  # Regional branch records & specifications
│   │   └── properties.js                # Commercial listings for sale and lease
│   │
│   ├── pages/
│   │   ├── HomePage.jsx                 # Home landing page (/)
│   │   ├── PropertiesPage.jsx           # Properties for sale & floor plans (/properties)
│   │   ├── RentalsPage.jsx              # Commercial leasing & rentals (/leasing, /rentals)
│   │   ├── BranchesPage.jsx             # Mall directory & regional centers (/explore)
│   │   ├── ExperiencesPage.jsx          # Cinema, dining & leisure page (/experiences)
│   │   └── ContactPage.jsx              # Contact info & directions (/contact)
│   │
│   ├── App.jsx                          # Main routing, scroll-to-top handler & layout shell
│   ├── index.css                        # Tailwind v4 directives, custom styles & font imports
│   └── main.jsx                         # React DOM application root
│
├── index.html                           # Root HTML document with SEO meta tags
├── package.json                         # Project dependencies, metadata, and scripts
├── vite.config.js                       # Vite 6 configuration with Tailwind v4 plugin
└── README.md                            # Comprehensive project documentation
```

---

## 🌐 Deployment Guide

Because **S mall** is architected as a 100% client-side static application, it can be deployed to any static host with zero database provisioning:

### Deploying on Vercel
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Ensure a rewrite rule is in place for React Router SPA routes:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

### Deploying on Netlify
Create a `public/_redirects` file with the following line to handle React Router client-side routing:
```text
/*    /index.html   200
```
Deploy via the Netlify CLI or connect your Git repository.

### Deploying on Cloudflare Pages or GitHub Pages
- Set build command to `npm run build` and output directory to `dist`.
- For single-page apps, configure the 404 page redirect to point to `index.html`.

---

## 📄 License

Proprietary commercial web application designed and developed for **S mall (Small Mall)**, Edakkara, Malappuram, Kerala, India.

All architectural plans, photographic assets, brand identifiers, and trademarks are the exclusive property of **S mall Management**. All rights reserved.
