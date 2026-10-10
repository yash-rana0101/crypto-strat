# Strat Ai — Design System Specifications

This document outlines the design tokens, layout principles, typography rules, component architectures, and interaction systems governing the **Strat Ai** platform. The permanent light palette uses approximately **60% white, 30% lavender, and 10% pink**, with black and neutral gray text and subtle micro-interactions.

---

## 1. Core Principles

1. **White-Led Palette:** White canvas and cards provide the dominant 60%. Lavender sections, panels, borders, illustrations, and buttons supply 30%. Pink highlights, projections, and alerts supply the remaining 10%.
2. **Borderless Structure:** Replaced rigid, spreadsheet-like horizontal/vertical border dividers with content grouping, unified spacing (`gap`), and subtle card backgrounds (`bg-surface-soft/5` or `bg-surface-card`) to create a clear layout.
3. **Physical Micro-Animations:** Interaction elements (buttons, nav pills, transitions) use ease-out curves and subtle spring-like scales (`scale-[0.98]`) to feel tactile, responsive, and alive.
4. **Symmetrical Balance:** Precise visual alignment constraints across all screen breakpoints, with special care taken on mobile views to keep layouts uncluttered and visually balanced.

---

## 2. Color Palette & Theme Tokens

The design system uses Tailwind v4 theme tokens in `src/styles/global.css` and a permanent light color scheme for the marketing site. The phone demo uses a scoped dark palette with light text and lavender/pink accents. Its Find Trade button and dropdown align with the phone's content and input field.

### Color Tokens Mappings

| Token | Color | Usage |
| :---- | :---- | :---- |
| `canvas` | `#ffffff` | Main background |
| `surface-card` | `#ffffff` | Content cards |
| `surface-soft` | `#f5f3ff` | Lavender sections and panels |
| `surface-strong` | `#ede9fe` | Lavender media panels and selected states |
| `hairline` | `#ddd6fe` | Lavender borders |
| `hairline-soft` | `#ede9fe` | Subtle dividers |
| `ink` | `#000000` | Headings and primary text |
| `body` | `#262626` | Body text |
| `muted` | `#525252` | Secondary text |
| `muted-soft` | `#666666` | Captions |
| `brand-accent` | `#7c3aed` | Lavender accents and focus rings |
| `primary` | `#c4b5fd` | Lavender primary actions |
| `primary-active` | `#a78bfa` | Lavender hover and active actions |
| `brand-pink` | `#be185d` | Pink highlights and alerts |
| `brand-pink-soft` | `#fdf2f8` | Pink alert surfaces |

### Semantic Color Indicators

- **Success:** `#7c3aed` (positive trends and completed states)
- **Warning:** `#db2777` (caution and projection overlays)
- **Error:** `#be185d` (negative trends and alerts)
- Labels and icons continue to identify positive, negative, and warning states.

### Badge Pastels (Tag Categories)

- **Lavender / Violet:** Black text on translucent lavender fills.
- **Pink:** Black text on translucent pink fills.
- The existing `orange` badge variant uses pink for compatibility.

---

## 3. Typography Tokens

We use modern sans-serif typefaces to support rapid scanability of numbers, metrics, and labels:

- **Display Typeface:** `Manrope` (engineered for clean geometric numbers and high-contrast titles).
- **Body Typeface:** `Inter` (neutral, legible typeface for guides, descriptions, and copy).
- **Code Typeface:** `JetBrains Mono` (monospaced structure for indicators, parameters, API keys, and curl blocks).

### Typography Scale Classes

| CSS Utility        | Font    | Size (desktop) | Weight | Line-Height | Description                          |
| :----------------- | :------ | :------------- | :----- | :---------- | :----------------------------------- |
| `.type-display-xl` | Display | `64px`         | `600`  | `1.05`      | Massive hero landing page headlines  |
| `.type-display-lg` | Display | `48px`         | `600`  | `1.1`       | Section titles, header page titles   |
| `.type-display-md` | Display | `36px`         | `600`  | `1.15`      | Subsection headings, callout headers |
| `.type-display-sm` | Display | `28px`         | `600`  | `1.2`       | Minor section headers                |
| `.type-title-lg`   | Body    | `22px`         | `600`  | `1.3`       | Major card headings                  |
| `.type-title-md`   | Body    | `18px`         | `600`  | `1.4`       | Standard card titles                 |
| `.type-title-sm`   | Body    | `16px`         | `600`  | `1.4`       | Details headers, list labels         |
| `.type-body-md`    | Body    | `16px`         | `400`  | `1.5`       | Standard reading copy                |
| `.type-body-sm`    | Body    | `14px`         | `400`  | `1.5`       | Footnotes, sidebar descriptions      |
| `.type-caption`    | Body    | `13px`         | `500`  | `1.4`       | Metadatas, categories, badges        |
| `.type-nav`        | Body    | `14px`         | `500`  | `1.4`       | Navigation list links                |
| `.type-button`     | Body    | `14px`         | `600`  | `1.0`       | Call to action labels                |

_Note: On mobile viewports (widths < 768px), display font sizes scale down automatically via media queries in `global.css` (e.g. `type-display-xl` shrinks to `36px`)._

---

## 4. Spacing & Spacing Standards

To keep header lines and text blocks separated from the floating top navbar, sections follow strict top-padding alignments:

1. **Homepage Hero Section:** Styled with `pt-24 lg:pt-20` padding. Pushes the title block down on mobile to clear the navbar, while maintaining a compact padding of `80px` on desktop viewports.
2. **Inner Page layouts (`PageLayout.astro`):** Shared subpages (legal pages, docs listing, blog listing, changelog) use `pt-24 lg:pt-24` padding, keeping spacing symmetrical.
3. **Section Divisions:** Sections do not use line separators. They are bounded by clear `py-16 md:py-20` block paddings or distinct background cards with `rounded-2xl` styling.

---

## 5. Main Component Architectures

### 5.1 Dynamic Island Navigation (`<DynamicIsland>`)

The central navigation unit is a floating bar pinned to the top viewport edge.

- **Responsive Top Positioning:** Pinned to `top-6` (`24px` from the top) on mobile viewports for clean screen clearance, and snaps to `top-4` (`16px` from top) on desktop.
- **Symmetrical Visual Padding:**
  - Mobile: Left padding `pl-4` (logo), right padding `pr-3` (mobile toggle button).
  - Desktop: Left padding `pl-6`, right padding `pr-2`.
  - These values balance the circular shape of the hover circles on actions with the text block of the brand logo.
- **Fixed Corner Geometry:** Styled with a static class `rounded-[28px]`. This border-radius remains unchanged when expanding or collapsing the mobile menu, preventing the shape from temporarily ballooning into a circle or oval as the container height transitions.
- **Scroll Constraints:** Height-constrained to a viewport-relative `85vh` on mobile expansion, with the internal content container capped at `calc(85vh - 80px)` and set to `overflow-y-auto`. This allows the mobile expanded list of links to remain fully scrollable and accessible on any device height.
- **Direct Flex alignment:** Menu icons are styled directly without inline spans to support centering inside their interactive buttons.

### 5.2 Interactive Button System (`<Button>`)

The `<Button>` component renders a primary anchor (`a`) or button tag depending on the presence of the `href` attribute.

```typescript
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text-link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  class?: string;
  id?: string;
}
```

- **Animations:** Custom hover translations (`hover:-translate-y-0.5`) paired with a brand-accented drop shadow:
  ```css
  hover:shadow-[0_4px_12px_rgba(16,185,129,0.25)] active:scale-[0.98]
  ```
- **Mobile CTAs:** Primary navbar CTA buttons are marked with `!hidden md:!inline-flex` so they hide on mobile headers to avoid crowding the layout, while displaying on desktop viewports.
