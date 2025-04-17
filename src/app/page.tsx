'use client';

import { House } from '@phosphor-icons/react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl font-bold mb-8">
            Welcome to Next.js
          </h1>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            <House size={24} weight="bold" />
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
