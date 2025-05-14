---
applyTo: '**'
---

# Development Tools

This project uses several development tools to ensure code quality, consistency, and maintainability. This document provides an overview of these tools and how they are configured in the project.

## ESLint

ESLint is used for linting JavaScript and TypeScript code.

### Configuration

- The project uses `@nuxt/eslint` which is specifically designed for Nuxt.js projects
- ESLint is configured to work with Prettier through `eslint-config-prettier` and `eslint-plugin-prettier`

### Usage

```bash
# Lint all files
pnpm lint

# Lint and fix all files
pnpm lint:fix
```

## Prettier

Prettier is used for code formatting.

### Configuration

- Configuration is defined in `.prettierrc` and `.prettierignore` files
- Prettier is integrated with ESLint for consistent formatting

### Usage

```bash
# Format all files
pnpm format
```

## StyleLint

StyleLint is used for linting CSS, SCSS, and styles in Vue files.

### Configuration

- Extends `stylelint-config-standard` and `stylelint-config-recommended-vue`
- Uses plugins: `@stylistic/stylelint-plugin`, `stylelint-order`, and `stylelint-prettier`
- Configuration is defined in `.stylelintrc.json` and `.stylelintignore` files

### Usage

```bash
# Lint all style files
pnpm stylelint

# Lint and fix all style files
pnpm stylelint:fix
```

## Husky

Husky is used for Git hooks to ensure code quality before commits.

### Configuration

- Pre-commit hook: Runs linting and formatting checks
- Commit-msg hook: Validates commit messages using CommitLint

### Hooks

- `.husky/pre-commit`: Runs before each commit to ensure code quality
- `.husky/commit-msg`: Validates commit messages against CommitLint rules

## CommitLint

CommitLint is used to enforce conventional commit message format.

### Configuration

- Uses `@commitlint/config-conventional` for standard rules
- Configuration is defined in `commitlint.config.js` or through package.json

### Integration

CommitLint is integrated with Husky to validate commit messages automatically when you make a commit.

## Running Development Tools

All development tools can be run through npm scripts defined in `package.json`:

```bash
# ESLint
pnpm lint
pnpm lint:fix

# Prettier
pnpm format

# StyleLint
pnpm stylelint
pnpm stylelint:fix

# CommitLint (usually run automatically by Husky)
pnpm commitlint --edit
```
