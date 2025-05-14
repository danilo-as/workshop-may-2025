# Todo App - Nuxt Project

## Project Overview

This project is a Todo application built using Nuxt.js v3.17.3 and TypeScript. It follows a set of standardized
guidelines to ensure code quality, consistency, and maintainability.

### Features

- Create, edit and delete tasks
- Mark tasks as completed
- Filter tasks by status (all, active, completed)
- Persistent storage using localStorage
- Responsive design with TailwindCSS

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Language Requirements

- Documentation and comments should be written in British English
- Use British spelling for documentation and comments (e.g., "colour" instead of "color", "optimise" instead of "
  optimize")
- Use British grammar and punctuation conventions for documentation and comments
- All variable names, function names, class names, and other code elements should use standard English (US English)

## Project Management

- The team uses Jira for project management
- When referencing tickets or issues, use the Jira ticket format (e.g., PROJ-123)

## Setup

Make sure to install dependencies:

```bash
# Install dependencies
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# Start development server
pnpm dev
```

## Production

Build the application for production:

```bash
# Build for production
pnpm build
```

Locally preview production build:

```bash
# Preview production build
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Project Structure

The Todo application follows a modular structure:

```
├── assets/                      # Archivos estáticos que serán procesados
│   └── css/                     # Estilos globales (TailwindCSS)
├── components/                  # Componentes Vue reutilizables
│   └── todo/                    # Componentes específicos para tareas
│       ├── TodoItem.vue         # Componente para un ítem de tarea
│       ├── TodoList.vue         # Componente para la lista de tareas
│       ├── TodoForm.vue         # Formulario para crear/editar tareas
│       └── TodoFilter.vue       # Filtros para las tareas
├── composables/                 # Composables de Vue 3
│   ├── useTodos.ts              # Lógica para manejar tareas
│   └── useLocalStorage.ts       # Lógica para almacenamiento local
├── pages/                       # Páginas de la aplicación
│   └── index.vue                # Página principal
├── stores/                      # Stores de Pinia
│   └── todo.ts                  # Store para tareas
└── types/                       # Definiciones de tipos TypeScript
    ├── todo.ts                  # Tipos para tareas
    └── index.ts                 # Exportaciones de tipos
```

## IDE Configuration

This project includes standardized configurations for both JetBrains IDEs and Visual Studio Code.

### JetBrains IDEs

The `.idea` directory contains shared configuration files for JetBrains IDEs:

- Code style settings
- Inspection profiles
- Module configurations
- VCS settings
- JavaScript library mappings

These configurations are compatible across all JetBrains IDEs, ensuring that developers using different IDEs (e.g.,
WebStorm and IntelliJ IDEA) will have the same development experience.

User-specific files (workspace.xml, etc.) are ignored by Git via the `.idea/.gitignore` file.

### Visual Studio Code

The `.vscode` directory contains shared configuration files for VS Code:

- `settings.json`: Editor settings, formatting rules, and linting configurations
- `extensions.json`: Recommended extensions for this project
- `launch.json`: Debugging configurations

User-specific files are ignored by Git.

### Recommended Extensions for VS Code

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier
- EditorConfig
- Tailwind CSS IntelliSense
- DotENV
- Path Intellisense
- Auto Rename Tag
- StyleLint

## Development Tools

This project uses several development tools to ensure code quality, consistency, and maintainability:

- **ESLint**: Lints JavaScript and TypeScript code
- **Prettier**: Formats code according to project standards
- **StyleLint**: Lints CSS, SCSS, and styles in Vue files
- **Husky**: Manages Git hooks for pre-commit checks and commit message validation
- **CommitLint**: Enforces conventional commit message format

For detailed information about these tools, their configuration, and usage, refer to the [Development Tools Guidelines](.github/instructions/development_tools.instructions.md).

### Running Development Tools

```bash
# ESLint
pnpm lint
pnpm lint:fix

# Prettier
pnpm format

# StyleLint
pnpm stylelint
pnpm stylelint:fix
```

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
- Prefer the Composition API over the Options API for better organization and reuse of logic
- Keep components small and focused on a single responsibility

### Props

- Define `props` with explicit types
- Provide validators for `props` whenever possible
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
- Consider using CSS Modules or methodologies like BEM if the project requires it

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
- Verify `interface` is reserved for specific cases such as class implementation or declaration merging

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

- Look for potential vulnerabilities (e.g., XSS, SQL injection, if applicable to the code)

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
- Link to any relevant issue or Trello/Jira card (e.g., "Resolves #42", "Part of T-123")

### Description of Changes

- Summarize the main changes made
- Highlight any important architecture or design decisions
- Mention any new or updated dependencies

### Testing Instructions

- Provide clear steps for the reviewer to test the changes
- Include any necessary configuration or test data

### Additional Considerations

- Are there any breaking changes?
- Is there any necessary follow-up task?
- Have tests and documentation been updated?

### Checklist

- [ ] Unit tests added/updated
- [ ] Documentation updated
- [ ] Complies with project style guides
- [ ] Tested manually

## Additional Resources

For more detailed information about Nuxt.js and its features, refer to the following resources:

- [Nuxt.js Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vue.js Documentation](https://vuejs.org/guide/introduction.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)

## Contributing

Please read through this README and the guidelines before contributing to the project. If you have any questions or need
clarification on any of the guidelines, please reach out to the project maintainers.
