# GitHub Copilot Instructions

## Project Overview

This project is built using Nuxt.js and TypeScript. Only documentation and comments should be generated in British
English. All other code elements should use standard English (US English).

## Project Management

The team uses Jira for project management. When referencing tickets or issues, please use the Jira ticket format (e.g.
PROJ-123).

## Coding Standards and Guidelines

Please follow these guidelines when generating code:

### General Coding Standards

- Follow the coding standards defined
  in [.github/instructions/coding_standards.instructions.md](instructions/coding_standards.instructions.md)
- Write clear, concise, and easy-to-understand code
- Add JSDoc comments or equivalents for public functions, complex types, and non-obvious logic
- All documentation and comments must be written in British English (using British spelling, grammar, and punctuation)

### TypeScript Guidelines

- Follow the TypeScript guidelines defined
  in [.github/instructions/typescript.instructions.md](instructions/typescript.instructions.md)
- Use strict typing and avoid `any` at all costs
- Explicitly define types for all variables, parameters, and return values

### Vue.js and Nuxt Guidelines

- Follow the Vue.js guidelines defined in [.github/instructions/vue.instructions.md](instructions/vue.instructions.md)
- Use the Composition API with `<script setup lang="ts">` syntax
- Keep components small and focused on a single responsibility

### CSS Styling Guidelines

- Follow the CSS styling guidelines defined in [.github/instructions/css.instructions.md](instructions/css.instructions.md)
- Use the BEM method for class naming
- Maintain alphabetical ordering of CSS properties
- Ensure compatibility with Tailwind CSS

### Development Tools

- Follow the development tools guidelines defined in [.github/instructions/development_tools.instructions.md](instructions/development_tools.instructions.md)
- Use ESLint for linting JavaScript and TypeScript code
- Use Prettier for code formatting
- Use StyleLint for linting CSS, SCSS, and styles in Vue files
- Use Husky for Git hooks to ensure code quality before commits
- Use CommitLint to enforce conventional commit message format

### Testing Guidelines

- Follow the testing guidelines defined
  in [.github/instructions/tests_generation.instructions.md](instructions/tests_generation.instructions.md)
- Write comprehensive tests for all new functionality

### Code Review Guidelines

- Follow the code review guidelines defined
  in [.github/instructions/code_review.instructions.md](instructions/code_review.instructions.md)

### Commit Message Guidelines

- Follow the commit message guidelines defined
  in [.github/instructions/commit_message_generation.instructions.md](instructions/commit_message_generation.instructions.md)

### Pull Request Guidelines

- Follow the pull request guidelines defined
  in [.github/instructions/pull_request_description.instructions.md](instructions/pull_request_description.instructions.md)

## Language Requirements

- Only documentation and comments should be written in British English
- Use British spelling for documentation and comments (e.g. "colour" instead of "color", "optimise" instead of "
  optimize")
- Use British grammar and punctuation conventions for documentation and comments
- All variable names, function names, class names, and other code elements should use standard English (US English)
