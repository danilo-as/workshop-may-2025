---
applyTo: '**/*.{css,scss,sass,html,vue}'
---

# CSS Styling Guidelines

## General Principles

- Follow the BEM (Block, Element, Modifier) methodology for class naming
- Use kebab-case for custom properties (CSS variables)
- Maintain alphabetical ordering of properties for better readability
- Ensure compatibility with Tailwind CSS

## Class Naming Conventions

- Follow the BEM methodology: `.block__element--modifier`
- Use lowercase letters, numbers, hyphens, and underscores
- Examples:
  - Block: `.card`
  - Element: `.card__title`
  - Modifier: `.card--featured`

## Custom Properties

- Use kebab-case for custom property names
- Example: `--primary-color`, `--heading-font-size`

## StyleLint Configuration

This project uses StyleLint with the following configuration:

- Extends:
  - `stylelint-config-standard`
  - `stylelint-config-recommended-vue`
- Plugins:
  - `@stylistic/stylelint-plugin`
  - `stylelint-order`
  - `stylelint-prettier`
- Custom syntax: `postcss-html`

### Key Rules

- Properties should be in alphabetical order
- Class selectors should follow the BEM pattern
- Custom properties should use kebab-case
- Tailwind CSS directives are allowed (`@tailwind`, `@apply`, etc.)
- Integration with Prettier for consistent formatting

## Running StyleLint

Use the following npm scripts to run StyleLint:

- `pnpm stylelint`: Lint all CSS, SCSS, Sass, HTML, and Vue files
- `pnpm stylelint:fix`: Lint and automatically fix issues where possible
