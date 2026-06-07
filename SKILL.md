# tanluc.dev Code Rules

Use this skill when editing this portfolio app so new code follows the existing source style.

## Stack

- Next.js App Router under `app/[locale]`.
- Localized routes always receive `params.locale` and should render locale-specific content.
- `next-intl` messages live in `messages/{locale}.json`; use `getTranslations` in server components.
- MDX content is managed by Contentlayer from `content/{locale}/{type}/*.mdx`.
- Shared MDX rendering uses `app/[locale]/blog/components/MdxWrapper.tsx`.
- Styling uses Tailwind utility classes and existing theme tokens: `text-primary`, `text-secondary`, `text-tertiary`, `bg-contrast`, `bg-secondary`, `bg-tertiary`, `border-primary`.

## Contentlayer Pattern

- Add new content types in `contentlayer.config.ts` with `defineDocumentType`.
- Keep common computed fields consistent: `slug` from source filename, `locale` from `content/{locale}/...` path.
- Prefer frontmatter for list/detail metadata: `title`, `summary`, `date`, `year`, `category`, `tags`, `href`, `action`, images, stats.
- Keep prose/detail content in MDX body. Do not hardcode article copy inside route components.
- Add localized MDX in both `content/en/...` and `content/vi/...` when the page exists in both locales.

## Page Pattern

- Page components should query `allBlogs`, `allProjects`, or `allMilestones`, filter by `params.locale`, then sort by `date` when listing content.
- Detail routes should find content by `locale + slug`; call `notFound()` when missing.
- Keep route files focused on data selection, metadata, layout, and rendering. Put reusable view logic in components only when duplication appears.
- Metadata should use content frontmatter where possible and localized messages for index pages.

## Milestone Pattern

- Milestone cards are sourced from `content/{locale}/milestone/*.mdx`.
- Use `detail: true` for milestones with a dedicated detail page.
- Use `href` for cards that should link elsewhere, such as `/projects/cafemaps` or `/blog`.
- Use `action` only when the card should render a CTA link.
- Use ISO `date` for sorting and optional localized `displayDate` for UI text.

## Editing Style

- Preserve existing route structure, import aliases, and Tailwind token names.
- Avoid broad refactors unrelated to the requested page/content flow.
- Prefer concise, typed helpers near the route when they are route-specific.
- Run at least `npm run build` or `npm run lint` after structural/contentlayer changes when feasible.
