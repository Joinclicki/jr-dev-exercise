# Junior Developer Redux Exercise

This project contains a partially implemented jokes app using Redux Toolkit and React.

## Your Task
[`The Challenge`](https://www.loom.com/share/78b044e7706a4e8d99b506caf1df86e6) <--- Video Link

Complete the Redux integration by following the TODO comments in the codebase and *shoot a quick loom.com video
show me that your app works, and explaining to me why it works*.  

Get as far as you can, and feel free to ask me questions if required.

## Instructional Videos

1. [`Clicki Redux Strategy`](https://www.loom.com/share/03a03906702040d096d47c2bafc5c039)
2. [`AsyncThunks & Reducers`](https://www.loom.com/share/0d443ad15fc7478880628da1758cb31c)
3. [`Actions and Store Updates`](https://www.loom.com/share/efc73fe6565849d4aac980529165c6c2)

Here’s what you need to do, in order:

### 1. Complete Redux Integration in Components

#### In `components/jokes-app.tsx`:

- [ ] **Import Redux hooks and functions:**
  - Import necessary hooks and functions from [`react-redux`](https://react-redux.js.org/api/hooks), the store, and the jokes slice.
- [ ] **Get Redux state and dispatch:**
  - Get the dispatch function using `useDispatch<AppDispatch>()`. ([Guide](https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks))
  - Get jokes state from Redux using `useSelector`. ([Guide](https://react-redux.js.org/api/hooks#useselector))
- [ ] **Initialize state on mount:**
  - On mount, dispatch `loadRatedJokes` in a `useEffect`. ([Guide](https://react.dev/reference/react/useEffect))
- [ ] **Implement action handlers:**
  - Implement `handleRateJoke` to dispatch `rateJoke`.
  - Implement `handleFetchJoke` to dispatch `fetchJoke`.
- [ ] **Update the UI:**
  - Show the number of rated jokes from Redux state in the Leaderboard button.
  - Call `handleFetchJoke` on button click and disable when loading.
  - Show loading spinner and text when loading. (e.g. `<Loader2 className="mr-2 h-4 w-4 animate-spin" />`)
  - Show error message if error exists in Redux state.
  - Show `JokeCard` if `currentJoke` exists and not loading or error.
  - Show initial state if no `currentJoke`, not loading, and no error.

#### In `components/leaderboard.tsx`:

- [ ] **Connect to Redux:**
  - Get `ratedJokes` from Redux state using `useSelector`.
  - Implement `handleClearAll` to dispatch `clearRatedJokes`.

### 2. Complete the Slice Extra Reducers

#### In `lib/jokesSlice.ts`:

- [ ] **Handle async thunk states:**
  - In `fetchJoke.pending`: Set loading to true and error to null.
  - In `fetchJoke.fulfilled`: Set loading to false and set `currentJoke` to the action payload.
  - In `fetchJoke.rejected`: Set loading to false and set error to the action payload or "Failed to fetch joke".
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
