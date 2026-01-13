# sort-by-choosing
A small script and web app that grabs a random sample of choices from a list and displays them in NextJS. The app then helps you determine which choice you prefer the most. 

## Typescript / React / NextJS
- I'm using NextJS here because many of our projects will want some amount of SSR for SEO. Using it here is similar enough to my typical React stack (basicaly identical at this point) so I can develop quickly while not painting us into a corner. 


## Process
1. Add a list of choices to the list in `formatter.js`
2. Run `node formatter.js`
3. Paste the output into `app/pages/api/problems.ts`
4. Run the next JS app locally with `cd app && next start`
