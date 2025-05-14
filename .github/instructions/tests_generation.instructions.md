---
applyTo: '**'
---

# Test Generation Guidelines

## Naming and Clarity

- Test names should be descriptive, clearly indicating what is being tested and the expected result
- Example: `it('should return an empty array when no users are found')`

## Coverage

- Try to cover the main logical paths, edge cases, and invalid inputs
- Each unit test should focus on a single piece of functionality
- Avoid testing multiple things in a single test

## Test Independence

- Tests should be independent of each other
- The result of one test should not affect another

## Structure

- Structure tests following the Arrange, Act, Assert (AAA) pattern:
- Arrange: Set up the preconditions and inputs
- Act: Execute the function or method being tested
- Assert: Verify that the result is as expected

## Simplicity

- Tests should be simple and straightforward
- Avoid complex logic in tests

## Mocking

- Use mocks or stubs to isolate the unit under test from its external dependencies

## Consistency

- Follow the testing framework and conventions already established in the project
- If the source code uses strict typing, tests should also adhere to it
