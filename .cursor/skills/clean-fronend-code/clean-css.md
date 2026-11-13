# Clean Messy CSS

Use this reference when cleaning styles alongside frontend structure work.

## Goal

Turn messy, duplicated, or inline styling into clear, reusable classes. Shared look = shared class. One-off look = local class only if it is truly unique.

## Detect messy CSS

- Same `style={{ ... }}` or long utility string repeated on 2+ elements
- Copy-pasted rule blocks that differ only by selector name
- Giant inline `style` objects mixed into JSX
- One-off class names that are identical to another class’s declarations
- Unused selectors, dead media queries, commented-out blocks left in
- Overlapping specificity wars (`!important`, deep nests) fixing earlier mess

## Reusable styling → separate class

If the same visual pattern is used more than once (spacing, type, button, card chrome, section shell), extract it into a **named reusable class** (or shared utility / CSS module class / design-token class — match the project’s style system).

| Situation | Action |
|-----------|--------|
| Same styles on 2+ elements | One shared class; both elements use it |
| Near-duplicate with one difference | Shared base class + small modifier class |
| Truly unique one-off | Keep local; do not invent a “shared” name |
| Inline `style={{}}` for themeable/repeated look | Move to class (or tokens); keep inline only for truly dynamic values (e.g. runtime width %) |

## Where to put classes

Follow the project’s style system:

- **CSS / SCSS modules** — component-local for unique; shared module or `styles/` for reused
- **Global CSS** — shared layout/type/button classes in a clear shared stylesheet
- **Tailwind** — repeated utility clusters → `@apply` in a shared class, or a small shared component; do not leave identical long class strings copied everywhere if a shared class/component exists in the project
- **Design tokens** — colors, spacing, radii via variables/tokens; classes consume tokens, not raw one-off hex repeats

Prefer: `src/styles/**` or existing shared style folders for cross-component reusable classes. Do not invent a parallel system if the repo already has one.

## Cleaning workflow

1. List repeated style blobs (inline, modules, utilities).
2. Name the reusable pattern (`btn-primary`, `section-title`, `stack-md`, etc.).
3. Create/update the shared class once.
4. Replace duplicates with that class.
5. Delete unused CSS and unused class names on markup.
6. Keep specificity flat; avoid new `!important` unless matching an existing pattern.

## Do / Don’t

**Do**

- One class = one clear job (`btn-primary`, not `blueBox2`)
- Compose small classes when needed (`btn`, `btn-primary`)
- Remove dead selectors after refactors
- Keep dynamic values inline only when they must be computed at runtime

**Don’t**

- Duplicate the same declarations under new class names
- Stick reusable look in inline styles
- Mix three style systems for the same element without a project reason
- “Clean” by rewriting the whole visual design unless asked

## Quick examples

**Before (messy)** — duplicated inline / copy-paste:

```jsx
<button style={{ padding: "12px 20px", background: "#111", color: "#fff", borderRadius: "8px" }}>Save</button>
<button style={{ padding: "12px 20px", background: "#111", color: "#fff", borderRadius: "8px" }}>Publish</button>
```

**After** — reusable class:

```css
.btn-primary {
  padding: 12px 20px;
  background: #111;
  color: #fff;
  border-radius: 8px;
}
```

```jsx
<button className="btn-primary">Save</button>
<button className="btn-primary">Publish</button>
```

**Modifier pattern** when almost the same:

```css
.btn { padding: 12px 20px; border-radius: 8px; }
.btn-primary { background: #111; color: #fff; }
.btn-ghost { background: transparent; color: #111; }
```
