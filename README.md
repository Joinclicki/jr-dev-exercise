# Junior Developer Redux Exercise

This project contains a partially implemented jokes app using Redux Toolkit and React.

## Your Task

Complete the Redux integration in `components/jokes-app.tsx` by following the TODO comments. You will need to:

1. **Import Redux hooks and types:**
   - Import `useSelector` and `useDispatch` from `react-redux`.
   - Import `RootState` and `AppDispatch` from the store.
   - Import actions (`fetchJoke`, `rateJoke`, `loadRatedJokes`, `clearRatedJokes`) from the jokes slice.
2. **Connect the component to Redux:**
   - Use `useSelector` to select the jokes state from the Redux store.
   - Use `useDispatch` to get the dispatch function.
3. **Dispatch actions:**
   - Dispatch actions to fetch jokes, rate jokes, load rated jokes, and clear rated jokes as described in the TODOs.
4. **Update the UI:**
   - Use the Redux state to control loading, error, and joke display.

The Redux store and slice are already set up for you in `lib/store.ts` and `lib/jokesSlice.ts`.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
