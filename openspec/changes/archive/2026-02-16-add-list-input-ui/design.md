## Context

Currently users must edit `formatter.js`, run it with Node, copy output, and paste into `app/pages/api/choices.ts`. The goal is to replace this with a simple text box in the UI where users paste comma-separated items and click submit to start comparing.

## Goals / Non-Goals

**Goals:**
- Add a text input box on the homepage for comma-separated items
- Add a submit button that generates all comparison pairs and starts the comparison flow
- Keep it "stupid simple" - no external APIs, no hosting, local only

**Non-Goals:**
- Persisting lists (not needed, user can re-paste)
- Import/export functionality
- Any server-side changes (everything client-side)

## Decisions

1. **Client-side only** - No API routes needed. The pair generation logic will run in the browser.
2. **Single page flow** - Input form shows first. After submit, comparison view renders. User can refresh to start over.
3. **Reuse formatter.js logic** - Move the `generatePairs` and `randomize` functions to a shared utility in `app/utils/pairGenerator.ts` that both the old formatter.js and new React component can use.
4. **Minimal UI** - Use existing Card component styling for the input form. No new dependencies.

## Risks / Trade-offs

None
