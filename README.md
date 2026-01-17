# Bryn Mawr Design UI

Internal React + TypeScript component library for Bryn Mawr Design.
These components are shared across the `brynmawrdesign-web` app and
other internal projects.

> This repo is intentionally small and focused. It contains the
> current set of stable, reusable UI primitives (buttons, inputs,
> layout, feedback, etc.) plus Storybook documentation.

## Goals

- Provide a consistent, accessible UI foundation.
- Encapsulate shared styles, tokens, and interaction patterns.
- Make it easy to compose product UIs in `brynmawrdesign-web`.
- Serve as a clear artifact of my front-end and design-systems work.

## Tech stack

- React 18 + TypeScript
- Storybook for component docs and playgrounds
- Jest for unit tests
- ESLint for linting

## Getting started

```bash
# install dependencies
npm install

# typecheck
npm run typecheck

# build the library (outputs to dist/)
npm run build

# run Storybook
npm run storybook
```
