---
applyTo: '**'
---

# Code Review Guidelines

## Main Focus

- Review the logic, clarity, efficiency, and security of the code

## Type Checking

- Verify that explicit and strict types are used
- Identify any use of `any` and suggest safer alternatives
- Confirm that `type` is preferred for defining object shapes, unions, etc.
- Verify `interface` is reserved for specific cases such as class implementation or declaration merging

## Code Quality

- Is the code easy to understand and maintain?
- Is there duplicated code that could be refactored?
- Are SOLID principles followed (if applicable to the context)?
- Are variable and function names descriptive?

## Error Handling

- Are errors handled adequately and robustly?

## Performance

- Identify possible bottlenecks or inefficiencies

## Security

- Look for potential vulnerabilities (e.g., XSS, SQL injection, if applicable to the code)

## Testing

- If there are related tests, are they adequate and do they cover important cases?

## Documentation

- Are the comments clear?
- Is the documentation (if it exists) accurate?

## Project Consistency

- Does the code follow the conventions and patterns established in the project?
