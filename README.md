# S mall — Commercial Property Sales, Rentals & Mall Directory

A modern, responsive, static website for **S mall (Small Mall)**, located in Edakkara, Malappuram, Kerala. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router v7**, this platform enables visitors and prospective commercial tenants to explore available properties for sale, vacant shop spaces, leasing opportunities, brand directories, entertainment experiences, and mall branch details.

---

## 🌟 Overview & Key Features

- **Frontend-Only Static Architecture**: 100% client-side application with zero external backend or database dependencies. Fast, secure, and ready for deployment on static hosting platforms (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
- **Official Brand Design**: Styled using S mall's primary brand blue (`#0E5EC8`), action golden yellow (`#F9B00C`), deep navy accents (`#0B2545`), and sky-blue highlights (`#38BDF8`).
- **Interactive Property Search & Filters**: Filter units by transaction type (Sale vs. Lease), category, price, square footage, and availability with instant frontend state updates and detail modals.
- **Leasing & Anchor Opportunities**: Detailed showcases for anchor supermarkets, retail shops, food court stalls, office suites, and pop-up kiosks.
- **Interactive Mall Directory & 2D Floor Plan**: Multi-floor visual layout diagrams with categorized store listings for shopping, dining, entertainment, and lifestyle.
- **Direct WhatsApp & Phone Integration**: Browser-validated enquiry forms that generate formatted WhatsApp messages sent directly to mall management (`+91 94471 75232`).
- **Fully Responsive**: Optimized for desktop, tablet, and mobile displays down to 320px screen width.

---

## 🗺️ Website Structure & Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Full-screen mall photography slider, key advantages, location & highway access details, and floor leasing inventory. |
| `/properties` | **Properties for Sale & Lease** | Comprehensive commercial space inventory with real-time filters (type, price, area, status), spec sheets, and enquiry modals. |
| `/leasing` | **Leasing & Commercial Rentals** | Opportunities grid (Supermarket, Food Court, Gaming, Retail Shops, Kiosks), 4 business growth pillars, and commercial enquiry form. |
| `/explore` | **Explore & Mall Directory** | Store directory categorized into Shopping, Dining, Entertainment, Lifestyle, and Services with interactive 2D floor plans. |
| `/experiences` | **Experiences & Entertainment** | Highlights Magic Frames Cinemas, family entertainment zones, dining options, and wellness centers. |
| `/contact` | **Contact & Location** | 3 floating contact cards, browser-validated message form with WhatsApp link, opening hours, parking info, and directions. |

---

## 🧭 Navigation Bar

The header navigation features exactly 5 primary destinations designed with a modern minimalist aesthetic:

1. **Home** (`/`)
2. **Properties** (`/properties`): Interactive dropdown menu featuring:
   - *Leasing & Commercial Rentals* (`/leasing`)
   - *Properties for Sale* (`/properties?category=sale`)
   - *All Property Listings* (`/properties`)
   - *Quick category links* (Commercial Shops, Office Suites, Food Court, Supermarket Anchor)
3. **Explore** (`/explore`)
4. **Experiences** (`/experiences`)
5. **Contact** (`/contact`)

Includes smooth hover states, active blue underline indicator, right-aligned **"Enquire Space"** button, and an expandable mobile drawer.

---

## 🏢 Mall Location & Contact Details

- **Property Name**: S mall (S. Mall Edakkara)
- **Address**: Main Road Edakkara, Malappuram District, Kerala, India
- **Highway Access**:
  - **Front Side**: State Highway (Calicut–Nilambur–Gudalur / CNG Road / Calicut–Ooty Main Road)
  - **Corner Access**: Malayora Highway (Hill Highway)
- **Direct Phone / WhatsApp**: `+91 94471 75232`
- **Email**: `smallmalledakkara@gmail.com`
- **Operating Hours**: 10:00 AM – 10:00 PM (Open 7 Days a Week)
- **Parking**: 200+ dedicated vehicle parking capacity

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or later recommended) and npm installed.

### Installation

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd small
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite local development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

### Building for Production

Compile and bundle the project for production:
```bash
npm run build
```
The optimized static build output will be placed in the `dist/` directory.

### Previewing Production Build

Preview the compiled distribution build locally:
```bash
npm run preview
```

---

## 📁 Project Directory Structure

```text
small/
├── public/
│   ├── images/              # Optimized static photography & floor plans
│   ├── small-mark.svg       # Official S mall brand icon
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── HomeHero.jsx             # Clean photography slider hero
│   │   │   ├── HomeAdvantages.jsx       # The Small Mall Difference pillars
│   │   │   ├── HomeBranches.jsx         # S. Mall Edakkara highway access
│   │   │   └── HomePropertySections.jsx # Commercial inventory floor breakdown
│   │   ├── BranchSection.jsx            # Mall branches & locations showcase
│   │   ├── ContactSection.jsx           # Full contact page layout & forms
│   │   ├── Footer.jsx                   # Navy footer with links & social SVGs
│   │   ├── Navbar.jsx                   # 5-item navbar with Properties dropdown
│   │   └── PropertySection.jsx          # Interactive property search & filter grid
│   ├── data/
│   │   ├── branches.js                  # Branch details & specifications
│   │   └── properties.js                # Commercial properties for sale & lease
│   ├── pages/
│   │   ├── HomePage.jsx                 # Home page
│   │   ├── PropertiesPage.jsx           # Properties for sale page
│   │   ├── RentalsPage.jsx              # Leasing & commercial spaces page
│   │   ├── BranchesPage.jsx             # Explore & directory page
│   │   ├── ExperiencesPage.jsx          # Cinema, dining & leisure page
│   │   └── ContactPage.jsx              # Contact & directions page
│   ├── App.jsx                          # Main routing, scroll-to-top, floating WhatsApp
│   ├── index.css                        # Tailwind v4 configuration & animations
│   └── main.jsx                         # React DOM application root
├── index.html                           # Root HTML document
├── package.json                         # Project dependencies and npm scripts
├── vite.config.js                       # Vite build configuration
└── README.md                            # Project documentation
```

---

## 📄 License

Private property of **S mall Edakkara**. All rights reserved.

