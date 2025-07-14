import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchJokeFromApi, JokeResponse, RatedJoke } from "./utils";

interface JokesState {
  currentJoke: JokeResponse | null;
  loading: boolean;
  error: string | null;
  ratedJokes: RatedJoke[];
}

const initialState: JokesState = {
  currentJoke: null,
  loading: false,
  error: null,
  ratedJokes: [],
};

// This is the async thunk that fetches the joke from the API
// you can dispatch this thunk to fetch a joke
export const fetchJoke = createAsyncThunk<
  JokeResponse,
  string,
  { rejectValue: string }
>("jokes/fetchJoke", async (category, { rejectWithValue }) => {
  try {
    // This is the function that fetches the joke from the API
    const data: JokeResponse = await fetchJokeFromApi(category);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message || "Something went wrong");
  }
});

// This is the slice that manages the jokes state
// you can use the actions to update the state
const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    rateJoke(
      state,
      action: PayloadAction<{ joke: JokeResponse; rating: number }>
    ) {
      const ratedJoke: RatedJoke = {
        ...action.payload.joke,
        rating: action.payload.rating,
      };
      const existingIndex = state.ratedJokes.findIndex(
        (j) => j.id === ratedJoke.id
      );
      if (existingIndex >= 0) {
        state.ratedJokes[existingIndex] = ratedJoke;
      } else {
        state.ratedJokes.push(ratedJoke);
      }
      // Sort by rating descending
      state.ratedJokes.sort((a, b) => b.rating - a.rating);
      // Persist to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("ratedJokes", JSON.stringify(state.ratedJokes));
      }
    },
    loadRatedJokes(state) {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("ratedJokes");
        if (stored) {
          state.ratedJokes = JSON.parse(stored);
          state.ratedJokes.sort((a, b) => b.rating - a.rating);
        }
      }
    },
    clearRatedJokes(state) {
      state.ratedJokes = [];
      if (typeof window !== "undefined") {
        localStorage.removeItem("ratedJokes");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        //TODO: Set loading to true
        //TODO: Set error to null
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        //TODO: Set loading to false
        //TODO: Set currentJoke to the action payload
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        //TODO: Set loading to false
        //TODO: Set error to the action payload or "Failed to fetch joke"
      });
  },
});

export const { rateJoke, loadRatedJokes, clearRatedJokes } = jokesSlice.actions;
export default jokesSlice.reducer;
