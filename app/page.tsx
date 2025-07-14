"use client";
import JokesApp from "@/components/jokes-app";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Jokes App Challenge
        </h1>
        <JokesApp />
      </div>
    </div>
  );
}
