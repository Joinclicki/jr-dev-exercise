# Junior Developer Redux Exercise

This project contains a partially implemented jokes app using Redux Toolkit and React.

## Your Task

Complete the Redux integration by following the TODO comments in the codebase. Here’s what you need to do, in order:

### 1. Connect Components to Redux

#### In `components/jokes-app.tsx`:

- [ ] **Import Redux hooks and types:**
  - Import `useSelector` and `useDispatch` from [`react-redux`](https://react-redux.js.org/api/hooks).
  - Import `RootState` and `AppDispatch` from the store (`lib/store.ts`).
  - Import actions (`fetchJoke`, `rateJoke`, `loadRatedJokes`, `clearRatedJokes`) from the jokes slice (`lib/jokesSlice.ts`).
- [ ] **Get Redux state and dispatch:**
  - Use `useDispatch<AppDispatch>()` to get the dispatch function. ([Guide](https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks))
  - Use `useSelector` to select `{ currentJoke, loading, error, ratedJokes }` from the jokes state. ([Guide](https://react-redux.js.org/api/hooks#useselector))
- [ ] **Dispatch actions:**
  - On mount, dispatch `loadRatedJokes` in a `useEffect`. ([Guide](https://react.dev/reference/react/useEffect))
  - Implement `handleRateJoke` to dispatch `rateJoke` with the current joke and rating.
  - Implement `handleFetchJoke` to dispatch `fetchJoke` with the selected category.
- [ ] **Update the UI:**
  - Show the number of rated jokes in the Leaderboard button.
  - Show loading spinner and text when loading.
  - Show error message if error exists.
  - Show `JokeCard` if a joke is available and not loading or error.
  - Show initial state if no joke, not loading, and no error.
  - Pass `ratedJokes` and an `onClearAll` handler to the `Leaderboard` component.

#### In `components/leaderboard.tsx`:

- [ ] **Connect to Redux:**
  - Use `useSelector` to get `ratedJokes` from the Redux state.
  - Use `useDispatch<AppDispatch>()` to get the dispatch function.
  - Implement `handleClearAll` to dispatch `clearRatedJokes`.

### 2. Complete the Slice Extra Reducers

#### In `lib/jokesSlice.ts`:

- [ ] **Complete the extraReducers:**
  - Fill in the TODOs to set `loading` and `error` state for `fetchJoke.pending`, `fetchJoke.fulfilled`, and `fetchJoke.rejected`.
  - [Redux Toolkit createSlice docs](https://redux-toolkit.js.org/api/createSlice#the-extrareducers-builder-callback-notation)

---

### Helpful Resources

- [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)
- [React Redux Hooks API](https://react-redux.js.org/api/hooks)
- [Redux Toolkit TypeScript Guide](https://redux-toolkit.js.org/tutorials/typescript)
- [React useEffect](https://react.dev/reference/react/useEffect)
- [TODO Highlight VS Code Extension](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) — _Recommended for easily tracking TODOs in your code_
- [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) — _Recommended for debugging and inspecting Redux state_

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
