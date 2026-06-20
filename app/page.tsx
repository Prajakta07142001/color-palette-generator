"use client";

import { useState } from "react";
import ColorCard from "./components/ColorCard";
import PalettePreview from "./components/PalettePreview";
import ContrastChecker from "./components/ContrastChecker";
import Footer from "./components/Footer";
import {
  generateHarmoniousPalette,
  generatePalette,
} from "./utils/generateColor";

export default function Home() {
  const [palette, setPalette] = useState<string[]>(() =>
    generateHarmoniousPalette(5)
  );
  const [locked, setLocked] = useState<boolean[]>(Array(5).fill(false));

  const handleGenerate = () => {
    setPalette((current) => generatePalette(current, locked));
  };

  const toggleLock = (index: number) => {
    setLocked((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(palette.join("\n"));
    } catch {
      // ignore
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Color Palette Generator</h1>
        <p className="text-zinc-500">
          Generate accessible color combinations instantly
        </p>
        <button
          onClick={handleGenerate}
          className="mt-6 px-6 py-2.5 rounded-md bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors"
        >
          Generate palette
        </button>
      </div>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
        {palette.map((color, i) => (
          <ColorCard
            key={i}
            color={color}
            locked={locked[i]}
            onToggleLock={() => toggleLock(i)}
          />
        ))}
      </section>

      <div className="text-center mb-10">
        <button
          onClick={handleCopyAll}
          className="text-sm px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          Copy all HEX codes
        </button>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Palette preview</h2>
        <PalettePreview palette={palette} />
      </section>

      <section className="mb-10">
        <ContrastChecker palette={palette} />
      </section>

      <Footer />
    </main>
  );
}
