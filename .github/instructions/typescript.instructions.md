---
applyTo: '**/*.ts,**/*.tsx'
---

# TypeScript Guidelines

## Strict Typing

- Assume that the `strict: true` configuration is enabled in `tsconfig.json`
- Avoid `any` at all costs
- If necessary, use `unknown` and perform the corresponding type validations
- Explicitly define the types of function parameters and return types

## Type Definitions

- Use `type` to define all object types, type aliases, unions, intersections, tuples, and mapped types
- Reserve `interface` only for when you need to declare the shape of an object that will be implemented by a `class` or
  when you need declaration merging

## Utility Types

- Use TypeScript utility types (e.g., `Partial<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`) to create new types
  efficiently and safely

## Type Safety

- Prefer string literal unions over numeric or string `enum`s for greater safety and ease of debugging
- Example: `type Status = 'active' | 'inactive' | 'pending';`
- Avoid type casting with `as Type` or `<Type>` as much as possible
- If necessary, ensure that the assertion is safe or use type guards
- Avoid using the non-null assertion operator (`!`)
- Explicitly handle `null` or `undefined` cases or ensure non-nullability through code logic

## Module System

- Use ES modules (`import`/`export`)

## Generics

- Use generics to create reusable components or functions that can work with a variety of types safely
