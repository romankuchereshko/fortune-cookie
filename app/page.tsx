"use client";

import { useState } from "react";
import { fortunes } from "../lib/fortunes";

// Define MiniKit type
interface MiniKitWindow extends Window {
  MiniKit?: {
    castAction: (params: { text: string }) => Promise<void>;
  };
}

export default function Home() {
  const [fortune, setFortune] = useState<string | null>(null);

  const getFortune = () => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(random);
  };

  const shareToFarcaster = async () => {
    // MiniKit integration with proper typing
    if (typeof window !== "undefined") {
      const windowWithMiniKit = window as MiniKitWindow;
      if (windowWithMiniKit.MiniKit) {
        await windowWithMiniKit.MiniKit.castAction({
          text: `🔮 ${fortune}\n\nGet your fortune: ${window.location.origin}`,
        });
      } else {
        alert("MiniKit not available — open in Base app preview!");
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🔮 Farcaster Fortune Cookie</h1>

      {!fortune ? (
        <button
          onClick={getFortune}
          className="px-6 py-3 bg-white text-purple-700 font-bold rounded-xl shadow-md hover:bg-purple-50 transition"
        >
          Crack your cookie 🍪
        </button>
      ) : (
        <div>
          <p className="text-2xl mb-6 italic">{fortune}</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={getFortune}
              className="px-4 py-2 bg-purple-800 rounded-lg shadow hover:bg-purple-900 transition"
            >
              New Fortune 🔁
            </button>
            <button
              onClick={shareToFarcaster}
              className="px-4 py-2 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Cast my fortune 🍀
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
