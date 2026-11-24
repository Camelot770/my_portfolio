---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/services/page.tsx","src/app/portfolio/page.tsx","src/app/about/page.tsx","src/app/contact/page.tsx"]
---

## Scope

Whole marketing site, Persuade mode: home (`src/app/page.tsx`) leads; /services, /portfolio, /portfolio/[slug], /about, /contact, /privacy, 404 and error extend the same world. RU is the SSR language, EN is the client toggle; both must render the same composition.

Audience: decision-makers at mid-size and large Russian businesses and institutions (clinic networks, retail and service chains, Tatarstan government and NGOs). Job: decide that StackLab can wire their systems into MAX quickly. Action: open a conversation (Telegram @Naum0 first, MAX, e-mail). Proof: shipped cases with named institutional clients, founders' faces, concrete numbers already on the site.

## Direction contract

THESIS: StackLab's integrations are a metro scheme: MAX, 1С МИС, ЮKassa and live schedules are stations of one map that data rides along. It refuses the dark agency showreel (black ground, neon accent, WebGL blob, kinetic type) and the white SaaS template (centred hero, three icon cards).

OWN-WORLD: white enamel ground #FFFFFF, ink #16171A; line colours red #E4251B, blue #0A6FD8, green #11A24A, violet #8C3FC8 (violet = ИИ-интеграции only, added by amendment below) drawn as thick round-capped strokes with 45° bends only; stations are white discs with heavy ink rings, interchanges are larger rings; signage typography in one heavy grotesque with full Cyrillic; ink pill buttons; line badges as coloured discs; thin grey "unlit" route vs lit red route.

STORY: the visitor sees their own systems drawn into one MAX line, understands StackLab connects 1С, payments and schedules, builds AI assistants into websites, bots and business processes, and ships from one week, believes it through named cases (Здоровье семьи, Национальная электронная библиотека РТ, АНО «Диалог Регионы») and the founders, and writes from any station on the route.

FIRST VIEWPORT: as `.impeccable/mocks/decision/model-pick.html` at 1440×900: logo left, route-strip nav and ink pill CTA right; h1 «Ваши системы — одна линия в MAX» ~76px in a 600px left column, lead under it, ink pill «Обсудить проект» below; right 60% is the map: red, blue and green lines crossing at two interchanges (MAX WebApp, 1С МИС) with stations Бриф, Заявка, ЮKassa, Запись за 30 с, Запуск · от 1 недели, plus a short violet spur from MAX WebApp to the «ИИ-ассистент» terminal. Lines draw themselves once on load; small data trains then run along them.

FORM: line-map world, candidate #1 of 7 on my ordered list, seed:2a8649da042e2d63. Signature interaction: the page itself is one route, a red line down the left gutter that lights up with scroll and passes a station at every section heading; header nav is an in-car route strip whose train moves to the current page.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

AMENDMENT (mid-build, user request, 2026-11-24): «сделай еще акцент на тмо что мы занимаемся ИИ- интеграцией в сайты боты и бизнесы». The world gains a fourth line: violet #8C3FC8 means ИИ-интеграции and nothing else, used on the hero map spur «ИИ-ассистент», the «Четыре линии — одна команда» row, the /services item and the footer direction badge. Geometry, stroke, caps, 45° bends, rings and motion rules are unchanged.

## Open decisions

- Photography beyond the founders' portraits and the existing case images is not sourced; nothing generated without a cost-confirmed request.
