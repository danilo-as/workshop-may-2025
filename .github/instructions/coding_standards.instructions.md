---
applyTo: '**'
---

# Project coding standards

## Naming Conventions

- Use PascalCase for component names and type aliases
- Use camelCase for variables, functions, methods, composables, and stores
- Prefix private class members with underscore (\_)
- Use ALL_CAPS for constants

## Typing

- Always use explicit and strict types
- Avoid using `any` unless absolutely unavoidable and justified
- For defining object shapes, unions, intersections, or complex types, prefer `type` over `interface`
- Reserve `interface` mainly for class implementation or when you need declaration merging

## Code Style and Quality

- Write clear, concise, and easy-to-understand code
- Where applicable and beneficial, prioritise pure functions
- Add JSDoc comments or equivalents for public functions, complex types, and non-obvious logic
- Do not comment on the obvious
- Design cohesive functions and modules with low coupling
- Avoid unexpected side effects—functions should do what their name indicates

## Error Handling

- Use try/catch blocks for async operations
- Implement proper error handling in Vue components
- Always log errors with contextual information
- Implement robust and meaningful error handling

## Code Organisation

- Follow the Nuxt.js style guide for component organisation
- Keep components small and focused on a single responsibility
- Use the Composition API for complex component logic
