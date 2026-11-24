---
name: StackLab
description: A full-cycle development studio's site drawn as a metro line scheme on white enamel, with ink signage and four service lines.
colors:
  red: "#e4251b"
  violet: "#8c3fc8"
  blue: "#0a6fd8"
  green: "#11a24a"
  ink: "#16171a"
  ink-2: "#565961"
  ink-3: "#8b8e95"
  unlit: "#dcdde0"
  rule: "#e6e7e9"
  tint: "#f4f4f2"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "4.75rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  h1:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "4.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.034em"
  h2:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  h3:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.018em"
  lead:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.34
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  meta:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
  button:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1
  chip:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  pill: "999px"
  panel: "24px"
  frame: "26px"
  poster: "28px"
spacing:
  gutter: "48px"       # fluid: clamp(20px, 3.4vw, 48px)
  section: "140px"     # fluid: clamp(80px, 8.4vw, 140px), top and bottom of a section
  block: "88px"        # heading to content, fluid: clamp(48px, 6vw, 88px)
  rail-indent: "72px"  # 44px below 768px
  header: "88px"       # 68px below 768px
  container: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
  button-sm:
    padding: "0 20px"
    height: "46px"
  button-lg:
    padding: "0 32px"
    height: "64px"
  badge:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  chip:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "9px 12px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 11px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "46px"
  filter-chip-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  lang-segment-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "34px"
  menu-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "48px"
  station-ring:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "28px"
  contact-station:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "64px"
  contact-station-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
  faq-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "44px"
  faq-toggle-open:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
  callout:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "22px 24px"
  hub:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "32px"
    padding: "32px 28px"
  poster:
    backgroundColor: "{colors.tint}"
    rounded: "{rounded.poster}"
  card-media:
    backgroundColor: "{colors.tint}"
    rounded: "{rounded.frame}"
  portrait:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.frame}"
  status-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 14px 8px 10px"
---

# Design System: StackLab

## Overview

**Creative North Star: "The Line Scheme"**

«Схема линий»: the site is a metro scheme printed on white enamel. StackLab's services are coloured lines, the systems a client already runs (MAX, 1С МИС, ЮKassa, live schedules, an AI assistant) are stations, and every page is one route the reader rides from heading to heading. The world's whole vocabulary is the scheme's own: thick round-capped lines, white stations with heavy ink rings, small white trains, ink signage, and a legend of coloured discs. Case images and the founders' portraits are the destinations the lines lead to.

The register is municipal signage set for a formal Russian business reader. One heavy grotesque with full Cyrillic speaks at 800 weight, big and tightly tracked; reading text stays plain and neutral; lists read like timetables; white ground does the separating. Colour is rationed by meaning: red is the route and whatever is lit or current, and violet, blue and green only ever name their lines. Depth is drawn with rings and rules rather than lit with shadows. Motion is the scheme coming alive (lines draw themselves once, trains run, the route fills red behind the reader), and every frame is complete and legible at rest.

The world refuses two category defaults by name: the dark agency showreel (black ground, neon accent, WebGL blob, kinetic type) and the white SaaS template (a centred hero over rows of three icon cards). A product constraint sets its budget: the site must stay fast on weak machines and slow mobile connections, so everything is drawn in CSS and inline SVG. The existing StackLab logo stays unchanged, top left (44px tall, 36px below 1100px) and in the footer (52px).

**Key Characteristics:**
- White enamel ground with ink signage; no dark sections.
- Four line colours, one per service line; red doubles as the lit route.
- Stations are white discs with heavy ink rings; interchanges are larger rings.
- Thick round-capped strokes; on a scheme, segments run horizontal, vertical or at 45° only.
- One typeface, Golos Text, with signage at 800 and tight tracking.
- Every content page is one route: a rail in the left gutter, a station at every section heading.
- Flat surfaces: rings and rules, never a drop shadow on anything static.
- Pills for every control; 26–28px rounded frames for every picture.

## Colors

Enamel and ink, plus four line colours that each mean one thing. The tokens are custom properties on the root, named exactly as the frontmatter keys, so a line colour is always referenced and never retyped.

### Primary
- **Route Red** (#e4251b): the MAX & Telegram line, and the colour of whatever is lit or current: the rail filling behind the reader, the red core of the station the reader is at, the current page's station in the nav, the red line that sweeps through a pill on hover, an open FAQ toggle, the contact route, the mobile menu's line, the lit stretch of the 404 line, bullets in legal prose, text selection and the caret. On the hero scheme it is the trunk from «Заявка» to «Запуск». At 4.6:1 on white it appears as text only on 700–800 weight titles and links in their hover or active state.

### Secondary
- **AI Line Violet** (#8c3fc8): ИИ-интеграции and nothing else: the hero spur to «ИИ-ассистент», the AI row of «Четыре линии», the AI item on /services and its footer direction badge. The fourth line, added by amendment; 5.7:1 on white.
- **Web Line Blue** (#0a6fd8): the Web line (sites and web services). On the hero scheme it is the brief-to-payment line (Бриф, MAX WebApp, ЮKassa). Its one job outside the lines is the focus ring.
- **iOS Line Green** (#11a24a): the iOS line. On the hero scheme it is the 1С МИС-to-booking line. Its one job outside the lines is the "on the line now" dot on a founder's status pill during contact hours. At 3.3:1 it never sets text.

### Neutral
- **Signage Ink** (#16171a): headings and body text, station rings, pill buttons, the 2px frame around every picture, the 2px rule on top of every list, the menu button, the scrollbar thumb.
- **Platform Grey** (#565961): secondary text: section leads, sublines, descriptions, timetable values, notes. 7:1 on white.
- **Dim Grey** (#8b8e95): the hollow off-hours ring on a founder's status pill. Never text (3.3:1).
- **Unlit Track** (#dcdde0): everything not yet reached: the rail ahead of the reader, unlit station rings, the process track before the train, the dotted dead end and empty station of the 404 line.
- **Hairline** (#e6e7e9): 1px dividers between list rows and the solid header's bottom edge.
- **Enamel Tint** (#f4f4f2): the only second surface: the ground behind contained logos and screenshots, tech chips, callouts, and the hover of unpressed segments and filters.
- **White Enamel** (#ffffff): the page ground, and the fill of every station disc, train, caption and status pill.

### Named Rules
**The One Colour, One Line Rule.** Each colour draws one line, and wherever a service, project or direction is named the mapping is fixed: MAX & Telegram Mini Apps and bots red, ИИ-интеграции violet, Web blue, iOS green. Telegram rides the red line with MAX and never gets its own colour. A project's badge, filter dot and poster wipe take its platform's line. A new colour arrives only with a new service line.

**The Lit Route Rule.** Route elements have three states: unlit (an Unlit Track ring or track), lit (an ink ring) and here (a red core or a red fill). Progress, the current page and the active item are red; hover darkens to ink or runs red, except on the hero map, where a hovered station fills with its own line's colour.

**The Enamel Ground Rule.** Line colours fill lines, discs, badges, the poster's passing train and the red state fills; they never fill a section, card or panel. Surfaces are White Enamel, with Enamel Tint as the only second surface.

## Typography

**Display Font:** Golos Text (with system-ui, sans-serif)
**Body Font:** Golos Text (with system-ui, sans-serif)

**Character:** One plain, heavy grotesque with a full Cyrillic set, loaded through next/font with Latin and Cyrillic subsets: transit signage at 800 weight with tight tracking, over quiet 400-weight reading text that holds up in long, formal Russian sentences.

### Hierarchy
- **Display** (800, fluid 2.5rem → 4.75rem, line-height 0.98, −0.035em): the home hero headline only, about 76px at 1440. The break falls after the dash and the phrase after it moves down whole.
- **Headline (h1)** (800, fluid 2.375rem → 4.25rem, line-height 1, −0.034em): inner-page titles, 404 and error.
- **Section headline (h2)** (800, fluid 2rem → 3.5rem, line-height 1.02, −0.03em): every section's station heading. Service titles on /services step down to 1.75rem → 2.75rem.
- **Title (h3)** (800, fluid 1.3125rem → 1.75rem, line-height 1.12, −0.018em): line names, founders' names, the hub. Names in lists run larger in the same voice (800, −0.03em): projects 1.625rem → 2.5rem, contact channels 1.5rem → 2.25rem, case cards 1.5rem → 2.125rem.
- **Lead** (500, fluid 1.1875rem → 1.5rem, line-height 1.34, −0.01em): the paragraph under a heading; ink in the hero at 34ch, Platform Grey under section headings at 44ch.
- **Body** (400, 1.0625rem, line-height 1.55): running text at 66ch; legal prose 72ch, FAQ answers 70ch; case-study paragraphs 1.125rem at 1.6.
- **Meta** (600, 0.9375rem, line-height 1.4, Platform Grey): sublines under titles, hours, notes, list descriptions.
- **Label** (700–800, 0.8125–1.125rem, line-height 1): buttons (800, 1.125rem, −0.01em), badges (700, 0.9375rem), nav stations (700, 1rem), chips (700, 0.875rem), filters and the language switch (800).

Headings balance their lines and paragraphs wrap pretty. Numerals are lining everywhere and tabular for years, hours, counts and step numbers.

### Named Rules
**The One Voice Rule.** Golos Text sets everything: display, signage, body, labels and the station names on the map. Hierarchy comes from weight and size; there is no second family, no serif and no monospace.

**The Signage Weight Rule.** Headings, names, station labels and buttons are 800 with negative tracking, from −0.035em at display to −0.018em at title and never tighter. Reading text stays at 400–600; 700 belongs to small labels, links, chips and the founders' pull quote.

## Layout

A 1440px container with fluid gutters (20px → 48px) holds every page. The left gutter belongs to the route: section content is indented 72px (44px on phones) from the gutter, and each heading's station hangs in that indent, centred on the rail at the heading's first line. Sections are padded 80px → 140px top and bottom (0.6 of that for follow-on sections on case pages). Content starts 48px → 88px below its heading (up to 96–104px for the service lines and the process track) and 40px → 72px below for list-shaped content such as FAQ, values and timetables. Inner pages start at the header height plus 48px → 104px.

Compositions are asymmetric, left-hung splits; nothing is centred on the page axis. The hero sets a text column of min(640px, 45vw) over a full-bleed map anchored bottom-right. Works pair a station list with a sticky 4:5 poster (1 : 0.86); contact pairs the heading with the channel route (1 : 1.15); case pages pair the facts with the poster (1.1 : 1); service items run 1 : 1.2; the team row is two portraits plus a 1.1 column for the quote and timetable; the footer runs 1.3 : 1 : 1 : 1.

The header is fixed at 88px (68px on phones): transparent over the hero, 98% white with a hairline after 8px of scroll, hidden while scrolling down past 260px and back on any scroll up.

Responsive behaviour steps down from desktop:
- **Below 1240px** each service line turns vertical and the hub drops beneath the lines.
- **Below 1200px** the hero map leaves the background and sits under the text as a tablet crop of the same scheme; below 768px it switches to a redrawn phone scheme.
- **Below 1100px** the nav strip, language switch and header CTA fold into the menu button; the team row becomes two columns.
- **Below 1000px** works lose the sticky poster and each project gets its own 4:3 picture; the process line turns vertical; contact stacks and the footer drops to two columns.
- **Below 900px** service items, the case hero and case blocks stack.
- **Below 768px** the phone tokens apply (rail indent 44px, header 68px, rail 5px, station ring 5px, heading station 24px); case cards go single-column.
- **Below 600px** the team, footer and timetables go single-column and the contact route loses its run-in.

Russian is the server-rendered language and both languages render the same composition, so layouts are sized for whichever runs longer: headings balance and button labels never wrap.

### Named Rules
**The Route Rule.** Every content page is one route. Each section opens with a station heading hung on the rail in the left gutter; the rail runs from the first station to the last, Unlit Track ahead of the reader and red behind, with a white train at the reading line (mid-viewport). Below the hero, content never starts left of the rail indent; a section without a station heading is off the route. Only the home hero (the map is where the route begins) and the 404 and error pages (the broken line) sit outside the rail.

## Elevation & Depth

Flat enamel. Depth is drawn, not lit: inset ink rings, the 2px ink rule on top of a list, 1px hairlines between rows, and the white casing that opens a gap where one line passes over another. Shadows belong only to things that ride or float on top of content, and they are soft and ink-tinted. The solid header separates with a hairline, not a shadow.

### Shadow Vocabulary
- **Train lift** (`box-shadow: 0 6px 14px rgba(22, 23, 26, 0.16)`): under the capsule trains on the page rail and the process track.
- **Floating caption** (`box-shadow: 0 8px 24px rgba(22, 23, 26, 0.14)`): the white caption pill that sits on a poster.
- **Header hairline** (`box-shadow: 0 1px 0 #e6e7e9`): the solid header's bottom edge.

### Named Rules
**The Flat Enamel Rule.** Static surfaces never cast shadows. A shadow means "this rides on top": trains and floating caption pills only. Borders are rings, not shadows.

## Shapes

Circles, pills, round-capped strokes and generously rounded frames; no square corner on anything that holds content.

- **Lines** are thick strokes with round caps and joins, weighted by role: 6px for the page rail (5px on phones), 8px for tracks inside content (the process line, a service's stop list), 14px for the service lines and the contact route, 18–24px for illustrative schemes (the 404 line, the hero map; 14px on the phone map). On a scheme every segment runs horizontal, vertical or at 45°; where a line passes over another without a station, a white casing (40px around a 24px stroke) cuts a gap in the lower line.
- **Stations** are white discs with an inset ring whose weight grows with the disc: 16px with a 4px ring in the nav strip; 26–28px with 6px for heading stations (24px with 5px on phones), stop lists and the menu sheet; 32–34px with 7px on the service lines and the process track; 64px with 9px for contact channels (52px with 8px on phones). Map stations are r20 with an 8px ring; interchanges are r30.
- **Trains** are white capsules: 20×44px on the rail and 52×28px on the process track, both with a 5px ink ring; 28×10 on the hero map. On a poster the train is a band of the project's line colour, 18% of the frame wide.
- **Controls** are pills: buttons, chips, tags, filters, the language switch, captions and status pills. The menu button, FAQ toggle and contact stations are circles.
- **Frames**: posters 28px, case cards and portraits 26px, phone thumbnails 22px. Case pictures carry a 2px inset ink ring drawn above the image on an Enamel Tint ground; portraits sit on an ink ground without one. Panels: 24px callouts and the 32px hub.
- **Lists** are open: no boxes, a 2px ink rule on top and 1px hairlines between rows.

### Named Rules
**The Ring Rule.** Every outline around a shape is an inset ring in ink (Unlit Track before it is reached, red when it is here), drawn inside the element so it never shifts layout: 2px for frames, ghost controls and tags; 3–4px for small toggles, indicators and nav stations; 5–9px for stations and trains, growing with the disc. The only plain borders are the horizontal rules of lists and the footer.

**The Round-Cap Rule.** Every visible line end is round, and every segment on a scheme runs horizontal, vertical or at 45°. A line may end square only where it runs under a station or the hub.

## Components

### Buttons
The ink pill is the only filled button, and its hover is the route running through it.
- **Shape:** full pill (999px).
- **Primary:** Signage Ink with a white 800 label (1.125rem), 56px tall, 28px side padding, a trailing arrow 12px after the label. Small (46px, 20px padding, 1rem) in the header; large (64px, 32px padding, 1.25rem) in the hero, the mobile sheet and on 404 and error.
- **Hover / Focus:** a red line sweeps through the pill from the left (0.45s, ease-out) and the arrow nudges 3px; pressing scales it to 0.97 (0.18s). Focus is the blue ring.
- **Ghost:** transparent with a 2px ink ring; on hover the ring turns red, the label white, and the same red sweep fills it.
- **Arrow link:** the secondary action: an 800 label (1.0625rem) with the arrow; on hover a 2px underline appears at 0.24em and the arrow nudges 4px.
- **Text link:** 700 with a 2px ink underline at 0.22em; on hover text and underline turn red.

### Chips
- **Line badge:** a 14px disc in the line colour beside a 700 label (0.9375rem). The legend of the scheme: project platforms, footer directions, poster captions.
- **Tech chip:** an Enamel Tint pill, 700 at 0.875rem, 9px by 12–13px padding: stacks on case pages and in the hub.
- **Tag:** a transparent pill with a 2px ink ring, 700 at 0.8125rem: the founders' skills.
- **Filter:** a 46px pill with a 2px ink ring, 800 at 0.9375rem, with a 12px line dot. Pressed: ink fill, white label and a white halo around the dot. Unpressed hover: Enamel Tint.

### Cards / Containers
There are no icon cards. The containers are:
- **Picture frames:** Enamel Tint ground, 26–28px radius, a 2px inset ink ring above the image; logos sit contained with 7–9% padding and photographs cover the frame. A case card is a 4:3 frame, then title, year, line badge and a short description; on hover the picture eases to 1.035 (0.9s) and the title turns red.
- **Callout:** an Enamel Tint panel, 24px radius, 22px by 24px padding, 600 weight: the one-sentence result of each service.
- **Hub:** the interchange where all four service lines end: a white panel, 32px radius, an 8px inset ink ring, 32px by 28px padding, a note in Platform Grey and tech chips.

### Navigation
- **Route strip** (1100px and up): four stations (16px discs, 4px ink ring) joined by 22×4px ink dashes, labels 700 at 1rem. Hover fills the ring with ink. The current page's station is solid red and is the one element that travels between pages: on navigation the red train slides to the new page's station (0.55s, ease-in-out) while the page itself fades and rises (out 0.26s, in 0.5s).
- **Language switch:** a pill with a 2px ink ring and 3px inner padding; 40×34px segments at 800 0.875rem; the active segment is ink with white text, an inactive one hovers to Enamel Tint.
- **Mobile:** a 48px ink circle with a two-bar icon opens a full-screen white sheet with a circular reveal from the button (0.6s ease-out; closing 0.55s ease-in-out). Inside, the menu is a vertical red line with 28px stations (6px ink ring, the current one red), items at 800 2.125rem, then the language switch and a large pill.
- **Skip link:** an ink pill that drops in from the top on keyboard focus.
- **Footer:** a 2px ink rule on top; a brand column plus three link columns; the directions column is a legend of line badges in their service colours; links at 600 0.9375rem turn red on hover.

### Station Heading
The device that puts a section on the route. A 28px white disc (24px on phones) with a 6px ring (5px) hangs on the rail, level with the heading's first line. It starts Unlit Track, takes an ink ring once the reader passes it, and the station the reader is at grows an 8px red core (0.35s). The lead follows 20px below in Platform Grey.

### Line Map
The hero is an inline SVG scheme of the visitor's own systems, anchored bottom-right: a red trunk Заявка → 1С МИС → MAX WebApp → Запуск · от 1 недели; a blue line Бриф → MAX WebApp → ЮKassa; a green line through 1С МИС to «Запись за 30 с»; and a short violet spur from MAX WebApp to «ИИ-ассистент». MAX WebApp and 1С МИС are the interchanges. Strokes are 24px, stations r20 with 8px ink rings, labels 800 at 24px. On load each line draws itself once (1.5s, staggered 0.15–1.1s), stations scale in and labels rise; then small white trains run back and forth along every line (two per line, one on the spur, 5–20s loops) and pause when the map leaves the screen. Hover or focus fills a station with its line colour and underlines its label (3px). The scheme has three geometries: desktop, a tablet crop of the same drawing, and a phone redraw with 14px strokes.

### Service Lines
«Четыре линии — одна команда»: each service is a 14px line in its colour carrying four 32px stations (7px ink ring) with 600-weight labels, running into the hub on the right. When the block first scrolls into view, each line draws from the left (1.2s, 0.18s apart) and its stops rise in turn (0.12s apart). On /services each service opens with a 120px stub of its line, and its list of inclusions is a vertical 8px line in the service colour with 26px stations.

### Process Track
Six numbered stations (34px, 7px ring) on an 8px Unlit Track line. As the reader scrolls, the red fill and a 52×28px train advance and each passed station lights to an ink ring. The track turns vertical below 1000px.

### Works List and Poster
Projects read as a timetable: a 2px ink rule, hairline rows, names at 800, tabular years, and a meta row with the line badge and the client. The project at the reading line is active: its name turns red and steps 10px right. Beside the list a sticky 4:5 poster shows the active project; on each change a band of the project's line colour crosses the frame (0.75s, braking curve) and uncovers the new picture behind it. Below 1000px the same band uncovers each thumbnail as it scrolls in, where scroll-driven animation is supported.

### Contact Route
Telegram, MAX and E-mail are stations on one 14px red route that runs in from the left and down through each channel: 64px white discs with 9px ink rings, names at 800, notes in Platform Grey. Hover or focus fills the station red and slides a white arrow in. Home, services, portfolio, case and about pages all close on this route.

### Timetables and FAQ
Facts, case details and the founders' hours are timetables: a 2px ink rule on top, hairline rows, keys at 800 in ink, values at 500 in Platform Grey. FAQ rows set the question at 800 with a 44px ring toggle (3px ring, plus icon): hover fills it ink; open turns it 45° into a red cross and the answer slides open (0.45s). The first question starts open.

### Founders
4:5 portraits on an ink ground with 26px corners and a slow zoom to 1.03 on hover (1.2s). A white status pill sits bottom-left: a green dot and «На связи» inside 09:00–22:00 МСК, a hollow Dim Grey ring and «Ответит с 09:00 МСК» outside; it appears only once the visitor's time is known.

### Broken Line
On 404 and error: a red line runs from one station to the next and stops, then a dotted Unlit Track stretch trails off to an empty grey station.

## Do's and Don'ts

### Do:
- **Do** open every section with a station heading so it hangs on the route, and keep content at the rail indent (72px; 44px on phones).
- **Do** take a line colour only from the line mapping: MAX & Telegram red, ИИ-интеграции violet, Web blue, iOS green.
- **Do** move route stations and tracks through unlit (#dcdde0), lit (ink) and here (red).
- **Do** draw stations as white discs with inset ink rings sized to the disc (16/4, 28/6, 32–34/7, 64/9px).
- **Do** draw scheme lines horizontal, vertical or at 45°, round-capped, with a white casing where one line crosses another without a station.
- **Do** keep calls to action to the ink pill (46, 56 or 64px), the ghost pill and the arrow link.
- **Do** lay out lists as timetables: a 2px ink rule on top, 1px #e6e7e9 hairlines between rows.
- **Do** frame case pictures on Enamel Tint with a 2px inset ink ring at 26–28px radius; contain logos with 7–9% padding and let photographs cover.
- **Do** draw icons as inline SVG on a 24-unit grid with one round-capped stroke (2.6px; 2.8px for the plus).
- **Do** keep every frame complete at rest: lines and stations are drawn by default, motion arms only when reduced motion is off, trains pause off-screen, and durations follow distance (0.18s press, 0.2–0.35s colour and rings, 0.45s sweeps and accordions, 0.75s cross-frame wipes on the braking curve, 1.2–1.5s for lines drawing themselves).
- **Do** theme the browser's own surfaces from the palette: red selection and caret, an ink scrollbar thumb that turns red on hover, and a 3px blue focus ring at 3px offset.

### Don't:
- **Don't** build the dark agency showreel (black ground, neon accent, WebGL blob, kinetic type) or the white SaaS template (a centred hero over rows of three icon cards).
- **Don't** fill a section, card or panel with a line colour, or set running text in one; green and Dim Grey never set text at all.
- **Don't** add a colour without adding a service line, and don't split Telegram off the red line.
- **Don't** give a static surface a drop shadow; only trains and floating caption pills carry the soft ink shadow.
- **Don't** bring in a second typeface, a monospace "tech" voice, or headings below 800.
- **Don't** set a text label above a heading; a line badge sits beside or below the title.
- **Don't** use Unicode arrows or emoji as icons.
- **Don't** reach for WebGL, video or other heavy effects; the world is drawn in CSS and inline SVG so it stays fast on weak devices and slow connections.
