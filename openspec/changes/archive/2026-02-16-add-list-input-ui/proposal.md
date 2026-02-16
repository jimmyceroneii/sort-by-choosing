## Why

Currently, adding items to sort requires editing `formatter.js`, running it in Node, copying the output, and pasting it into `app/pages/api/choices.ts`. This manual process is error-prone and requires switching between files. A simple text input in the UI would make this workflow instant.

## What Changes

- Add a text input component to the homepage that accepts comma-separated items
- Add a submit button that processes the input and generates all comparison pairs
- Replace the hardcoded `formattedList` import with state-driven data
- Use the existing pair generation logic from `formatter.js` (or move it to a shared utility)

## Capabilities

### New Capabilities
- `list-input`: UI component and logic for accepting a comma-separated list of items and generating comparison pairs

### Modified Capabilities
- None

## Impact

- Modified: `app/components/Comparison.tsx` - now accepts pairs as props instead of importing from API
- New: UI input form on the homepage
- Removed: Manual workflow of editing `formatter.js` and pasting output
