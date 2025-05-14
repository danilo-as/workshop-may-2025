---
applyTo: '**/*.vue'
---

# Vue.js Guidelines

## Component Structure

- Always use the `<script setup lang="ts">` syntax for components
- Prefer the Composition API over the Options API for better organization and reuse of logic
- Keep components small and focused on a single responsibility
- Name component files in `PascalCase.vue`

## TypeScript Integration

- All guidelines from `typescript.instructions.md` apply here
- Define types for `props`, `emits`, `refs`, and composition logic
- Use `defineProps<T>()` and `defineEmits<T>()` with explicit types

## Props

- Define `props` with explicit types
- Provide validators for `props` whenever possible
- Specify default values for optional `props`
- Prefer `type` for defining the shape of `props`: `defineProps<{ user: UserType; count?: number }>()`

## Events

- Define emitted events with `defineEmits< { (e: 'updateName', name: string): void; (e: 'close'): void } >()`
- Use the `kebab-case` convention for event names in the template (`@update-name`)

## Reactivity

- Use `ref()` for reactive primitive values and `reactive()` for objects
- Use `computed()` for derived values
- Destructure `props` with `toRefs()` if you need to maintain reactivity in local variables

## Styling

- Use `<style scoped>` by default to avoid CSS conflicts
- Consider using CSS Modules or methodologies like BEM if the project requires it

## Component Communication

- Use slots for flexible and reusable content
- For complex state management, consider Pinia
- For simple state within a component or between nearby components, use `props`, `emits`, or `provide`/`inject`

## Accessibility

- Take into account accessibility best practices when generating templates
