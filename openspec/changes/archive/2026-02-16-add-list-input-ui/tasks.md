## 1. Create Pair Generation Utility

- [x] 1.1 Create `app/utils/pairGenerator.ts` with `generatePairs` and `randomize` functions from `formatter.js`
- [x] 1.2 Export functions for generating all pairs from a list and randomizing them

## 2. Create List Input Component

- [x] 2.1 Create `app/components/ListInput.tsx` with textarea for comma-separated input
- [x] 2.2 Add submit button
- [x] 2.3 Add input validation (minimum 2 items, trim whitespace)
- [x] 2.4 Add error message display for invalid input

## 3. Update Comparison Component

- [x] 3.1 Modify `Comparison.tsx` to accept pairs as props instead of importing from API
- [x] 3.2 Add state for comparison pairs
- [x] 3.3 Keep existing comparison logic and scoring

## 4. Update Homepage

- [x] 4.1 Modify `pages/index.tsx` to show ListInput first, then Comparison after submit
- [x] 4.2 Pass parsed pairs from ListInput to Comparison component

## 5. Verify

- [x] 5.1 Run `npm run build` to ensure no build errors
- [x] 5.2 Run `npm run lint` and fix any issues
