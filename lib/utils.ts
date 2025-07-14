import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Common interfaces for jokes
export interface JokeResponse {
  error: boolean;
  category: string;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

export interface RatedJoke extends JokeResponse {
  rating: number;
}

// Server-side function to fetch a joke from the API
export async function fetchJokeFromApi(category: string) {
  const categoryParam = category === "Any" ? "Any" : category;
  const response = await fetch(
    `https://v2.jokeapi.dev/joke/${categoryParam}?safe-mode`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch joke");
  }
  const data = await response.json();
  if (data.error) {
    throw new Error("API returned an error");
  }
  return data;
}
