"use client";

import { useState, useEffect } from "react";
import { fortunes } from "../lib/fortunes";

// Define MiniKit type
interface MiniKitWindow extends Window {
  MiniKit?: {
    castAction: (params: { text: string }) => Promise<void>;
  };
}

export default function Home() {
  const [fortune, setFortune] = useState<string | null>(null);
  const [isMiniApp, setIsMiniApp] = useState(false);

  useEffect(() => {
    // Check if we're in an iframe (mini-app context)
    setIsMiniApp(window.parent !== window);
  }, []);

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
        // Better fallback for browser
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Farcaster Fortune Cookie',
              text: `🔮 ${fortune}`,
              url: window.location.origin,
            });
          } catch (err) {
            // User cancelled or error
            console.log('Share cancelled');
          }
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(`🔮 ${fortune}\n\nGet your fortune: ${window.location.origin}`);
          alert("Fortune copied to clipboard! Share it on Farcaster 🎉");
        } else {
          alert("Open this app in Base to share on Farcaster!");
        }
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6">
      <div className="w-full max-w-lg mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          🔮 Farcaster Fortune Cookie
        </h1>

        {!fortune ? (
          <button
            onClick={getFortune}
            className="px-8 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:bg-purple-50 transition-all transform hover:scale-105 text-lg"
          >
            Crack your cookie 🍪
          </button>
        ) : (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <p className="text-xl sm:text-2xl italic leading-relaxed">
                {fortune}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={getFortune}
                className="w-full sm:w-auto px-6 py-3 bg-purple-800 rounded-lg shadow hover:bg-purple-900 transition-all font-semibold"
              >
                New Fortune 🔁
              </button>
              <button
                onClick={shareToFarcaster}
                className="w-full sm:w-auto px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg shadow hover:bg-yellow-400 transition-all"
              >
                Cast my fortune 🍀
              </button>
            </div>
          </div>
        )}

        {/* Only show footer on desktop/browser view */}
        {!isMiniApp && (
          <footer className="mt-16 text-white/60 text-sm">
            Open in <a href="https://base.dev/preview" className="underline">Base app</a> for the best experience
          </footer>
        )}
      </div>
    </main>
  );
}
