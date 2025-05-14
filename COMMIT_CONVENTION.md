# Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.
This leads to more readable messages that are easy to follow when looking through the project history.

## Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special format that
includes a **type**, a **scope**, and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated
from commit messages).

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should
include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues
that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit
message is then used for this.

## Examples

```
feat(auth): add login functionality

Implement user login with JWT authentication
```

```
fix(api): handle error responses correctly

Previously, error responses were not being properly handled, which caused the application to crash.

Closes #123
```

```
docs(readme): update installation instructions

Update the installation instructions to include the new dependencies
```

```
style: format code according to style guide

Run prettier to format all files according to the project's style guide
```

## Enforcement

This project uses [commitlint](https://commitlint.js.org/) and [husky](https://typicode.github.io/husky/) to enforce the
Conventional Commits specification. If your commit message does not follow the format, it will be rejected.

To help with creating compliant commit messages, you can use the following command:

```bash
git commit
```

This will trigger the pre-commit hooks that run linting and formatting checks, and the commit-msg hook that validates
your commit message.
