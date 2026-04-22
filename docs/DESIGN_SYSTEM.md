# StackLab Design System

Дизайн-система сайта StackLab. Актуально на 2026-04-22.

**Стек:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

---

## 1. Бренд и палитра

Тёмная тема с тёплыми акцентами. Конфигурация — `tailwind.config.ts` + CSS-переменные в `src/app/globals.css`.

| Токен | HEX | Tailwind | Назначение |
|---|---|---|---|
| `background` | `#0B1030` | `bg-background` | Основной фон страниц |
| `foreground` | `#F5EBDF` | `text-foreground` | Основной текст |
| `accent` | `#E3B7A0` | `bg-accent text-accent` | Акценты, ссылки, focus ring |
| `accent-hover` | `#D9A385` | `hover:bg-accent-hover` | Hover-состояние акцента |
| `dark` | `#070B22` | `bg-dark` | Темнее фона (Services, Footer) |
| `dark-secondary` | `#131A3F` | `bg-dark-secondary` | Карточки, инпуты |
| `brand-blue` | `#1F2F6A` | `bg-brand-blue` | Левая точка градиента |
| `brand-peach` | `#E3B7A0` | `bg-brand-peach` | Правая точка градиента |
| `muted` | `#A5ADCC` | `text-muted` | Второстепенный текст (AA 5.2:1) |
| `border` | `#24305F` | `border-border` | Разделители, рамки карточек |

**Градиенты (используй класс):**

- `bg-gradient-brand` — `135deg, #1F2F6A → #E3B7A0` (CTA, кнопки)
- `bg-gradient-brand-vertical` — `180deg` (Accordion акцент)
- `bg-gradient-brand-horizontal` — `90deg` (ScrollProgress)

---

## 2. Типографика

**Шрифты (`src/app/layout.tsx`):**
- Heading: **Manrope** (Google Fonts, cyrillic, swap)
- Body: **Inter** (Google Fonts, cyrillic, swap)

**Шкала (Tailwind tokens):**

| Token | Size (clamp) | Line-height | Letter-spacing | Пример использования |
|---|---|---|---|---|
| `text-display-1` | 48–112 px | 1.05 | -0.02em | Зарезервирован для full-screen интро |
| `text-display-2` | 40–80 px | 1.10 | -0.02em | CTA-секции |
| `text-display-3` | 32–56 px | 1.15 | -0.01em | Заголовки секций (Услуги, FAQ) |
| `text-heading-1` | 28–40 px | 1.20 | — | Project card h3 |
| `text-heading-2` | 24–32 px | 1.25 | — | Card titles |
| `text-heading-3` | 20–24 px | 1.30 | — | Feature labels |
| `text-body-lg` | 18 px | 1.60 | — | Section leads |
| `text-body-base` | 16 px | 1.60 | — | Body |
| `text-body-sm` | 14 px | 1.50 | — | Captions, categories |

**Правила:**
- Один `<h1>` на страницу
- Не пропускать уровни (h1 → h3 без h2 — запрещено)
- Kicker-лейблы (например "Кто мы") — `uppercase tracking-[0.2em] text-sm text-accent`

---

## 3. Сетка и спейсинг

**Container (`.container` в globals.css):**

- `max-width: 1400px`
- `px-5 md:px-8 lg:px-12` (20 / 32 / 48 px)
- Центрирован: `mx-auto`

**Брейкпоинты (Tailwind default):**
- `sm` — 640px
- `md` — 768px (мобилка / десктоп)
- `lg` — 1024px
- `xl` — 1280px

**Секционные отступы:**
- `py-section` — `clamp(48px, 6vw, 80px)` (основные секции)
- `py-section-sm` — `clamp(32px, 4vw, 60px)` (плотные секции)

**Сетки:**
- Карточки проектов: `grid-cols-1 md:grid-cols-2 gap-8 md:gap-10`
- About preview: `grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20`
- Bento (About page): `grid-cols-1 lg:grid-cols-3` с col-span/row-span

---

## 4. Компоненты

### Button (`src/components/ui/Button.tsx`)
Основной React-компонент.

```tsx
<Button href="/contact" variant="primary|secondary|accent" size="sm|md|lg">
  Действие
</Button>
```

- `primary`: `bg-foreground text-background`, hover `bg-dark-secondary`
- `secondary`: transparent border, hover invert
- `accent`: `bg-gradient-brand text-white`, hover opacity-90
- `sm` px-5 py-2.5 / `md` px-8 py-4 / `lg` px-10 py-5
- Hover scale: 1.02 (spring `stiffness 400 damping 17`)

### ArrowButton (`src/components/ui/ArrowButton.tsx`)
Кнопка с анимированной стрелкой (текст-пилюля + круг).

```tsx
<ArrowButton href="/contact" variant="light|dark">
  Запустить проект
</ArrowButton>
```

- `light` — светлая пилюля, тёмный текст
- `dark` — тёмная пилюля (для gradient backgrounds)
- Анимация: 500ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`
- Стрелка справа → скрывается, появляется слева при hover

### Accordion (`src/components/ui/Accordion.tsx`)
```tsx
<Accordion items={[{ id, title, content, number? }]} variant="default|numbered" />
```
- `default` — FAQ
- `numbered` — Services (01, 02, 03…)
- Keyboard: Enter/Space — toggle; Escape — close open item
- aria-expanded, aria-controls — реализованы

### ProjectCard (`src/components/ui/ProjectCard.tsx`)
- `layout="grid"` — квадратная превью с 3D-tilt на hover (отключён на мобилке)
- `layout="list"` — горизонтальный, для /portfolio
- data-project-card — для CustomCursor

### GradientBlobs (`src/components/ui/GradientBlobs.tsx`)
Декоративные blur-круги. На мобилке или `prefers-reduced-motion` — статические. `aria-hidden`.

### ScrollProgress (`src/components/ui/ScrollProgress.tsx`)
Прогресс-бар 2px сверху. `aria-hidden`. Gradient-brand horizontal.

### CustomCursor (`src/components/ui/CustomCursor.tsx`)
- Hides system cursor только на fine-pointer devices (`@media (hover: hover) and (pointer: fine)`)
- Reacts on `[data-project-card]` ("Подробнее ↘"), hides on `[data-no-cursor-fill]`
- `aria-hidden role="presentation"`

### AnimatedHeading (`src/components/ui/AnimatedHeading.tsx`)
Word-by-word reveal с `rotateX`. Для section h2.

---

## 5. Анимация и motion

### Easing

**Primary curve:** `cubic-bezier(0.22, 1, 0.36, 1)` — Tailwind-токен `ease-brand`.

Используется в: ArrowButton, Accordion, slideInFromBottom, menuSlideIn, AnimatedHeading.

### Durations

| Назначение | Duration |
|---|---|
| Быстрые hover/фидбек | 300ms |
| Стандартные переходы | 400ms |
| Reveals / разворот контента | 500ms |
| Полные page-анимации | 600ms |

### Spring presets

| Компонент | stiffness | damping | mass |
|---|---|---|---|
| CustomCursor | 400 | 30 | 0.5 |
| ProjectCard tilt | 300 | 20 | — |
| Header button scale | 400 | 17 | — |
| MagneticButton (Hero) | 200 | 15 | — |

### Framer Motion варианты (`src/lib/animations.ts`)

`fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `staggerContainer` (0.1s stagger), `staggerContainerSlow` (0.15s), `menuSlideIn`, `imageReveal`, `letterAnimation`.

---

## 6. Accessibility (WCAG 2.1 AA)

**Реализовано:**
- Skip link (`#main-content`)
- `:focus-visible` double outline (2px foreground + 5px dark shadow) — видно на любом фоне
- `prefers-reduced-motion` — CSS-override + `useReducedMotion()` в framer-motion
- Semantic HTML (`<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`)
- aria-expanded/aria-controls на Header menu toggle и Accordion
- role="dialog" aria-modal на Menu + focus trap + Escape
- aria-current="page" на активной ссылке меню
- aria-hidden на декоративных: GradientBlobs, ScrollProgress, CustomCursor, marquee-дубликаты
- Контраст: foreground 16.8:1, accent 9:1, muted 5.2:1 — все пройдены

**Правила для новых компонентов:**
- Icon-only buttons — всегда `aria-label`
- Interactive SVG — с альт-текстом или `aria-hidden="true"`
- Touch targets ≥ 44×44 px
- Декоративные элементы — `aria-hidden="true"`
- Анимации — оборачивать в `useReducedMotion()`

---

## 7. SEO

**Метаданные (`src/app/layout.tsx`):**
- metadataBase: `https://stacklab.su`
- Title template: `%s | StackLab — студия разработки`
- Default OpenGraph + Twitter
- 14 keywords targeting MAX / iOS / Telegram / Web

**Структурированные данные (`src/components/seo/JsonLd.tsx`):**
- `Organization` (ProfessionalService) — в layout
- `WebSite` — в layout
- `BreadcrumbList` — на страницах проектов
- `FAQPage` — на главной (секция FAQ)
- `SoftwareApplication` — на страницах проектов

**Sitemap + robots:** `src/app/sitemap.ts`, `src/app/robots.ts`.

---

## 8. Responsive правила

| Элемент | <768px | ≥768px |
|---|---|---|
| Container padding | 20px | 32–48px |
| Grid cols | 1 | 2–3 |
| Custom cursor | hidden | shown |
| GradientBlobs | static | animated (20–25s loop) |
| ProjectCard 3D tilt | off | on |
| Hero circle size | 220px | 320px |
| Hero DOM text lines | 20×3 | 45×8 |

---

## 9. Структура репо

```
src/
├── app/
│   ├── layout.tsx           # Root + metadata + skip link
│   ├── globals.css          # Tokens, base, components
│   ├── page.tsx             # Home: Hero → Manifesto → FounderSection → FeaturedProjects → AboutPreview → Services → CTA → FAQ
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── contact/
│   ├── privacy/
│   ├── error.tsx            # Error boundary
│   └── not-found.tsx
├── components/
│   ├── layout/              # Header, Footer, Menu, CookieBanner
│   ├── sections/            # Hero, Manifesto, FounderSection, FeaturedProjects, AboutPreview, Services, CTA, FAQ
│   ├── ui/                  # Button, ArrowButton, Accordion, ProjectCard, GradientBlobs, ScrollProgress, CustomCursor, AnimatedHeading
│   └── seo/                 # JsonLd components
├── data/                    # projects, services, faq
├── hooks/                   # useInView, useCountUp
└── lib/                     # animations.ts
```

---

## 10. Принципы

1. **Tokens first.** Не хардкодить hex/px/duration — только через Tailwind config + CSS vars.
2. **One button API.** `<Button>` для типовых, `<ArrowButton>` для hero-CTA, `.btn` — deprecated.
3. **Сначала клавиатура.** Любой интерактив работает с Tab/Enter/Space/Escape.
4. **Motion с уважением.** Все анимации уважают `prefers-reduced-motion`.
5. **SR-чистота.** Декоративное → `aria-hidden`. Интерактивное → правильные ARIA-атрибуты.
6. **Dark by default.** Пишем `text-foreground`, не `text-white` — палитра должна остаться менеймой.
