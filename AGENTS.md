# AGENTS.md

This document provides guidance for agentic coding agents working in this repository.

## Project Overview

This is a Next.js 13 application that implements a sorting/choosing interface. Users compare pairs of items and select their preference, which generates a ranked score list.

## Build/Lint/Test Commands

All commands should be run from the `app/` directory.

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Run a single test file (if tests exist)
# Note: No test framework is currently configured
```

## Code Style Guidelines

### TypeScript
- TypeScript strict mode is enabled in `tsconfig.json`
- Use explicit type annotations for function parameters and return types
- Use `type` aliases for object shapes and union types
- Use `Record<string, T>` for dictionary-like objects

### React Components
- Use functional components with arrow functions or `function` keyword
- Use `React.FC<PropsType>` for component typing
- Use named exports for components (e.g., `export const Card: React.FC<CardProps> = ...`)
- Define prop types as separate type aliases (e.g., `type CardProps = { ... }`)

### Naming Conventions
- PascalCase for component names and types (e.g., `Card`, `CardProps`)
- camelCase for variables, functions, and object keys (e.g., `updateScore`, `currentEntry`)
- UPPER_SNAKE_CASE for constants if needed

### Imports
- Order imports: external libraries first, then relative paths
- Use `import type` for type-only imports when possible
- Group: React imports, then library imports, then relative imports

```typescript
import React from 'react';
import { cloneDeep } from 'lodash';
import { Card } from './Card';
import { styles } from './styles';
```

### Formatting
- Use tabs for indentation (2 spaces)
- Use single quotes for strings
- Add trailing commas in arrays and objects
- Use semicolons
- Maximum line length: 80-120 characters

### Error Handling
- Handle errors gracefully with appropriate user feedback
- Use try/catch for async operations
- Validate props with TypeScript types

### File Organization
```
app/
├── pages/          # Next.js pages
│   ├── api/        # API routes
│   ├── _app.tsx    # App wrapper
│   └── index.tsx   # Main page
├── components/     # React components
│   ├── Card.tsx
│   ├── Comparison.tsx
│   └── styles.ts
└── package.json
```

### Linting
- The project uses ESLint with `next/core-web-vitals` config
- Run `npm run lint` before committing
- Fix lint errors before pushing

### Best Practices
- Keep components small and focused
- Extract logic into reusable functions outside components when appropriate
- Use meaningful variable and function names
- Add key props when mapping over arrays

## Cursor/Copilot Rules

No custom Cursor rules (`.cursor/rules/`) or Copilot rules (`.github/copilot-instructions.md`) were found in this repository.
