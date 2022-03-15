# Refactoring Plan

### Condensed Objectives

- Utilize Router
- Use the pg library
- Connect to a Postgres DB using the pg node module

### Task

- refactor the `orders` controller
  - by extracting any database-related functionality into the corresponding `Order` model
- You can then refactor the existing tests to use your `Order` model.

### Acceptance Criteria

- `orders` controller doesn't include any SQL queries
- `Order` model has all existing methods implemented
- `app.test.js` uses the `Order` model instead of SQL

### Rubric

| Task                                  | Points |
| ------------------------------------- | ------ |
| `orders` controller refactored        | 4      |
| `Order` model implementation complete | 4      |
| Tests refactored to use `Order` model | 2      |
