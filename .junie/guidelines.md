# Project Guidelines

## Project Overview

This project is built using Nuxt.js and TypeScript.
It follows a set of standardised guidelines to ensure code quality,
consistency, and maintainability.

> **Note:** This document provides an overview of the project guidelines. For more detailed information on specific
> topics, please refer to the corresponding files in the `.github/instructions` directory. This helps avoid duplication
> of
> information and ensures that guidelines are maintained in a single source of truth.

## Language Requirements

- Documentation and comments should be written in British English
- Use British spelling for documentation and comments (e.g. "colour" instead of "color", "optimise" instead of "
  optimize")
- Use British grammar and punctuation conventions for documentation and comments
- All variable names, function names, class names, and other code elements should use standard English (US English)
- Avoid adding unnecessary, obvious, or non-contributing comments to the code.

## Project Management

- The team uses Jira for project management
- When referencing tickets or issues, use the Jira ticket format (e.g. PROJ-123)

## IDE Configuration

This project includes standardised configurations for both JetBrains IDEs and Visual Studio Code.

### JetBrains IDEs

The `.idea` directory contains shared configuration files for JetBrains IDEs:

- Code style settings
- Inspection profiles
- Module configurations
- VCS settings
- JavaScript library mappings

### Visual Studio Code

The `.vscode` directory contains shared configuration files for VS Code:

- `settings.json`: Editor settings, formatting rules, and linting configurations
- `extensions.json`: Recommended extensions for this project
- `launch.json`: Debugging configurations

### Recommended Extensions for VS Code

- Vue Language Features (Volar)
- ESLint
- StyleLint
- Prettier
- EditorConfig
- Tailwind CSS IntelliSense
- DotENV
- Path Intellisense
- Auto Rename Tag

## Coding Standards

### Naming Conventions

- Use PascalCase for component names and type aliases
- Use camelCase for variables, functions, methods, composables, and stores
- Prefix private class members with underscore (\_)
- Use ALL_CAPS for constants
- Name component files in `PascalCase.vue`

### Typing

- Always use explicit and strict types
- Avoid using `any` unless absolutely unavoidable and justified
- For defining object shapes, unions, intersections, or complex types, prefer `type` over `interface`
- Reserve `interface` mainly for class implementation or when you need declaration merging
- If necessary, use `unknown` and perform the corresponding type validations
- Explicitly define the types of function parameters and return types
- Use TypeScript utility types (e.g., `Partial<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`) to create new types
  efficiently and safely
- Prefer string literal unions over numeric or string `enum`s for greater safety and ease of debugging
- Avoid type casting with `as Type` or `<Type>` as much as possible
- Avoid using the non-null assertion operator (`!`)

### Code Style and Quality

- Write clear, concise, and easy-to-understand code
- Where applicable and beneficial, prioritise pure functions
- Add JSDoc comments or equivalents for public functions, complex types, and non-obvious logic
- Do not comment on the obvious
- Design cohesive functions and modules with low coupling
- Avoid unexpected side effects—functions should do what their name indicates

### Error Handling

- Use try/catch blocks for async operations
- Implement proper error handling in Vue components
- Always log errors with contextual information
- Implement robust and meaningful error handling

### Code Organisation

- Follow the Nuxt.js style guide for component organisation
- Keep components small and focused on a single responsibility
- Use the Composition API for complex component logic

## Vue.js Guidelines

### Component Structure

- Always use the `<script setup lang="ts">` syntax for components
- Prefer the Composition API over the Options API for better organisation and reuse of logic
- Keep components small and focused on a single responsibility

### Props

- Define `props` with explicit types
- Give validators for `props` whenever possible
- Specify default values for optional `props`
- Prefer `type` for defining the shape of `props`: `defineProps<{ user: UserType; count?: number }>()`

### Events

- Define emitted events with `defineEmits< { (e: 'updateName', name: string): void; (e: 'close'): void } >()`
- Use the `kebab-case` convention for event names in the template (`@update-name`)

### Reactivity

- Use `ref()` for reactive primitive values and `reactive()` for objects
- Use `computed()` for derived values
- Destructure `props` with `toRefs()` if you need to maintain reactivity in local variables

### Styling

- Use `<style scoped>` by default to avoid CSS conflicts
- Follow the BEM (Block, Element, Modifier) method for class naming
- Use kebab-case for custom properties (CSS variables)
- Maintain alphabetical ordering of properties for better readability
- Ensure compatibility with Tailwind CSS

### Component Communication

- Use slots for flexible and reusable content
- For complex state management, consider Pinia
- For simple state within a component or between nearby components, use `props`, `emits`, or `provide`/`inject`

### Accessibility

- Take into account accessibility best practices when generating templates

## Testing Guidelines

### Naming and Clarity

- Test names should be descriptive, clearly indicating what is being tested and the expected result
- Example: `it('should return an empty array when no users are found')`

### Coverage

- Try to cover the main logical paths, edge cases, and invalid inputs
- Each unit test should focus on a single piece of functionality
- Avoid testing multiple things in a single test

### Test Independence

- Tests should be independent of each other
- The result of one test should not affect another

### Structure

- Structure tests following the Arrange, Act, Assert (AAA) pattern:
  - Arrange: Set up the preconditions and inputs
  - Act: Execute the function or method being tested
  - Assert: Verify that the result is as expected

### Simplicity

- Tests should be simple and straightforward
- Avoid complex logic in tests

### Mocking

- Use mocks or stubs to isolate the unit under test from its external dependencies

### Consistency

- Follow the testing framework and conventions already established in the project
- If the source code uses strict typing, tests should also adhere to it

## Code Review Guidelines

### Main Focus

- Review the logic, clarity, efficiency, and security of the code

### Type Checking

- Verify that explicit and strict types are used
- Identify any use of `any` and suggest safer alternatives
- Confirm that `type` is preferred for defining object shapes, unions, etc.
- Verify `interface` is reserved for specific cases this as class implementation or declaration merging

### Code Quality

- Is the code easy to understand and maintain?
- Is there duplicated code that could be refactored?
- Are SOLID principles followed (if applicable to the context)?
- Are variable and function names descriptive?

### Error Handling

- Are errors handled adequately and robustly?

### Performance

- Identify possible bottlenecks or inefficiencies

### Security

- Look for potential vulnerabilities (e.g. XSS, SQL injection, if applicable to the code)

### Testing

- If there are related tests, are they adequate and do they cover important cases?

### Documentation

- Are the comments clear?
- Is the documentation (if it exists) accurate?

### Project Consistency

- Does the code follow the conventions and patterns established in the project?

## Commit Message Guidelines

### Format

- Strictly follow the Conventional Commits specification (e.g., `feat: add new login function`)
- Common types include: `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`
- Include appropriate emojis to visually categorise the type of change

### Style

- Avoid overly verbose descriptions or unnecessary details
- Start with a short imperative sentence, no more than 100 characters
- The subject line should be in an imperative mood (e.g. "Add..." instead of "Added..." or "Adds...")
- The subject line should start with a capital letter
- The subject line should not end with a period
- Write only one sentence for the subject line

### Examples

- `feat(adapters): ✨ Add auth adapter for user data transformation`
- `refactor(pages): ♻️ Refactor password-related pages and component structure`
- `fix(home): ✏️ Fix typos`
- `fix(pages): 🔍 Remove extraneous spaces in Lifetime Achievement Award pages content`

### Message Body

- Justify the "why" of the change, not just the "what"
- If there are breaking changes, they should be clearly indicated in the footer with `BREAKING CHANGE:`
- Reference GitHub issues if applicable (e.g., `Closes #123`)

## Pull Request Guidelines

### Title

- The title should follow the same guidelines as commit messages (Conventional Commits, imperative, < 100 characters)

### Change Context

- What problem does this PR solve?
- What was the motivation behind this change?
- Link to any relevant issue or Trello/Jira card (e.g. "Resolves #42", "Part of T-123")

### Description of Changes

- Summarise the main changes made
- Highlight any important architecture or design decisions
- Mention any new or updated dependencies

### Testing Instructions

- Give clear steps for the reviewer to test the changes
- Include any necessary configuration or test data

### More Considerations

- Are there any breaking changes?
- Is there any necessary follow-up task?
- Have tests and documentation been updated?

### Checklist

- [ ] Unit tests added/updated
- [ ] Documentation updated
- [ ] Complies with project style guides
- [ ] Tested manually

## Development Workflow

### Setup

```bash
# Install dependencies
pnpm install
```

### Development Server

```bash
# Start the development server on http://localhost:3000
pnpm dev
```

### Production

```bash
# Build the application for production
pnpm build

# Locally preview production build
pnpm preview
```

For more information, refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
and [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Development Tools

This project uses several development tools to ensure code quality, consistency, and maintainability.

### ESLint

ESLint is used for linting JavaScript and TypeScript code.

- The project uses `@nuxt/eslint` which is specifically designed for Nuxt.js projects
- ESLint is configured to work with Prettier through `eslint-config-prettier` and `eslint-plugin-prettier`

```bash
# Lint all files
pnpm lint

# Lint and fix all files
pnpm lint:fix
```

### Prettier

Prettier is used for code formatting.

- Configuration is defined in `.prettierrc` and `.prettierignore` files
- Prettier is integrated with ESLint for consistent formatting

```bash
# Format all files
pnpm format
```

### StyleLint

StyleLint is used for linting CSS, SCSS, and styles in Vue files.

- Extends `stylelint-config-standard` and `stylelint-config-recommended-vue`
- Uses plugins: `@stylistic/stylelint-plugin`, `stylelint-order`, and `stylelint-prettier`
- Configuration is defined in `.stylelintrc.json` and `.stylelintignore` files

```bash
# Lint all style files
pnpm stylelint

# Lint and fix all style files
pnpm stylelint:fix
```

### Husky

Husky is used for Git hooks to ensure code quality before commits.

- Pre-commit hook: Runs linting and formatting checks
- Commit-msg hook: Validates commit messages using CommitLint

### CommitLint

CommitLint is used to enforce a conventional commit message format.

- Uses `@commitlint/config-conventional` for standard rules
- Configuration is defined in `commitlint.config.js` or through package.json
- Integrated with Husky to validate commit messages automatically when you make a commit
