# Commit Message Guidelines

## Format

- Strictly follow the Conventional Commits specification (e.g., `feat: add new login function`)
- Common types include: `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`
- Include appropriate emojis to visually categorise the type of change

## Style

- Avoid overly verbose descriptions or unnecessary details
- Start with a short imperative sentence, no more than 100 characters
- The subject line should be in an imperative mood (e.g. "Add..." instead of "Added..." or "Adds...")
- The subject line should start with a capital letter
- The subject line should not end with a period
- Write only one sentence for the subject line

## Examples

- `feat(adapters): ✨ Add auth adapter for user data transformation`
- `refactor(pages): ♻️ Refactor password-related pages and component structure`
- `fix(home): ✏️ Fix typos`
- `fix(pages): 🔍 Remove extraneous spaces in Lifetime Achievement Award pages content`

## Message Body

- Justify the "why" of the change, not just the "what"
- If there are breaking changes, they should be clearly indicated in the footer with `BREAKING CHANGE:`
- Reference GitHub issues if applicable (e.g., `Closes #123`)
