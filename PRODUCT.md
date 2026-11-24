# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: decision-makers at mid-size and large businesses in Russia (clinic networks, retail and service chains with an IT budget) who need a customer-facing digital channel (a MAX or Telegram Mini App, a bot, a native iOS app or a web service) that plugs into the systems they already run: 1C, payments, live schedules. They are comparing studios and must decide quickly whether StackLab can be trusted with a contract-backed, integration-heavy launch.

Secondary (present in the portfolio, not the target of this site): regional government bodies and NGOs in Tatarstan, small businesses (cafés, studios, shops), and StackLab's own iOS products.

## Product Purpose

StackLab is a full-cycle development studio: design, development, infrastructure, launch and support inside one team. It builds MAX and Telegram Mini Apps and bots, native iOS apps and web services. The site exists to win briefs: a visitor understands what StackLab builds, believes it can ship an integrated product fast, and writes to the founders.

Success: a qualified visitor opens a conversation (Telegram, MAX or e-mail) describing their task.

## Positioning

- **MAX expertise.** Among the first studios building Mini Apps and bots for MAX, the national messenger; MAX is the studio's priority platform.
- **Speed.** Publication from one week depending on scope; reply within 30 minutes in working hours (09:00–22:00 MSK).
- **Complex integrations.** Real-time schedules from 1C MIS, ЮKassa payments, own backend (Node.js, Python/FastAPI, PostgreSQL).

## Operating Context

- Contact channels: Telegram @Naum0 (primary), e-mail stacklab@mail.ru, the official StackLab account in MAX. There is no form: first contact is a free-form description of the task, answered with a preliminary estimate of scope, cost and timing.
- Work is done under contract with documented requirements; a technical specification is not needed to start.
- The site is bilingual: Russian (default, formal business voice) and English, switched client-side with the RU/EN toggle; server rendering is Russian.
- Domain stacklab.su.

## Capabilities and Constraints

- Services: native iOS (Swift, SwiftUI), MAX Mini Apps and bots, Telegram Mini Apps and bots (with payments), web services (Next.js, React, TypeScript), backend and integrations (Node.js, Python/FastAPI, PostgreSQL/Prisma/SQLite, ЮKassa, 1C MIS).
- Routes: home, /about, /services, /portfolio, /portfolio/[slug], /contact, /privacy, 404 and error pages.
- Performance is a hard constraint: the site must stay fast on weak machines and slow mobile internet. Heavy effects are gated off for reduced motion, coarse pointers, save-data, slow connections and low core counts.
- All copy lives in `src/lib/copy.ts` (RU and EN) and `src/data/{projects,services,faq}.ts`; both languages must stay in sync.

## Brand Commitments

- Name: StackLab. The existing StackLab logo in `public/images` stays unchanged.
- The founders' photos stay on the home page: Naum Kogan (co-founder, technical lead) and Kamil Iskhakov (co-founder, director of growth / директор по развитию).
- Voice: formal Russian business register, plain and factual.
- Explicitly not binding (free to replace in a redesign): the orange accent `#ff5a1f`, the current fonts, the WebGL scenes.

## Evidence on Hand

- Eight case studies with client, year, challenge, solution, result, stack and imagery (`src/data/projects.ts`, images in `public/images`):
  - Zdorovie Semyi: MAX WebApp for booking at a network of 10 medical centres in Kazan; real-time schedules from 1C MIS; booking path down to 30 seconds (2026).
  - Zabota o SVOikh: MAX bot supporting SVO participants and their families, for ANO "Dialog Regiony", Tatarstan (2026).
  - Roza Tsvetov: MAX WebApp online shop for stabilised floristry with ЮKassa payments (2026).
  - Kitapkhane: MAX bot for the National Electronic Library of the Republic of Tatarstan (2025).
  - Lull and LoveExplore: StackLab's own iOS apps (2025).
  - Pelikan: Telegram Mini App for a floating studio (2025).
  - Pink Purple: Telegram Mini App for a bubble-tea café (2025).
- Claims currently on the site: 18 launched projects (part under NDA), 3+ years average team experience, publication from one week, reply within 30 minutes.
- Founders' photos: `public/images/my_photo.jpg`, `public/images/kamil_photo.jpg`.
- Absent, never to be fabricated: client testimonials or quotes, client logos beyond the case studies, prices, team size beyond the two founders, awards, metrics not stated in the case studies.

## Product Principles

1. Lead with MAX: the platform where StackLab is earliest comes first.
2. Prove with shipped work: real launches, clients and integrations instead of adjectives.
3. Speed is stated as numbers (one week, 30 minutes), never as a slogan.
4. Integration depth is the difference from template builders: show the systems a product connects to.
5. The founders are one step away from every page.

## Accessibility & Inclusion

No product-specific requirement beyond the existing baseline: reduced-motion support, a keyboard skip link, and a correct `lang` attribute for RU/EN.
