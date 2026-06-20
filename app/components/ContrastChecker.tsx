"use client";

import { useState, useEffect } from "react";
import {
  contrastRatio,
  getContrastLevel,
  contrastLabel,
} from "../utils/contrastRatio";

interface ContrastCheckerProps {
  palette: string[];
}

export default function ContrastChecker({ palette }: ContrastCheckerProps) {
  const [fgIndex, setFgIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(palette.length - 1);

  useEffect(() => {
    if (fgIndex >= palette.length) setFgIndex(0);
    if (bgIndex >= palette.length) setBgIndex(palette.length - 1);
  }, [palette, fgIndex, bgIndex]);

  const fg = palette[fgIndex] || "#000000";
  const bg = palette[bgIndex] || "#ffffff";
  const ratio = contrastRatio(fg, bg);
  const level = getContrastLevel(ratio);
  const pass = level === "aa" || level === "aaa";

  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4">
      <p className="text-sm font-medium mb-3 text-zinc-700 dark:text-zinc-200">
        Accessibility contrast checker
      </p>

      <div className="flex flex-wrap gap-4 mb-4">
        <label className="text-xs text-zinc-500 flex flex-col gap-1">
          Primary color
          <select
            value={fgIndex}
            onChange={(e) => setFgIndex(Number(e.target.value))}
            className="border rounded-md px-2 py-1 text-sm dark:bg-zinc-800"
          >
            {palette.map((c, i) => (
              <option key={i} value={i}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs text-zinc-500 flex flex-col gap-1">
          Secondary color
          <select
            value={bgIndex}
            onChange={(e) => setBgIndex(Number(e.target.value))}
            className="border rounded-md px-2 py-1 text-sm dark:bg-zinc-800"
          >
            {palette.map((c, i) => (
              <option key={i} value={i}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <span
          className="w-6 h-6 rounded-md border border-black/10"
          style={{ backgroundColor: fg }}
        />
        <span className="text-sm text-zinc-500">on</span>
        <span
          className="w-6 h-6 rounded-md border border-black/10"
          style={{ backgroundColor: bg }}
        />
        <span className="text-sm font-medium ml-2">
          Contrast ratio: {ratio.toFixed(1)} : 1
        </span>
      </div>

      <span
        className={`inline-block text-xs px-2 py-1 rounded-md font-medium ${
          pass
            ? "bg-emerald-100 text-emerald-700"
            : level === "aa-large"
            ? "bg-amber-100 text-amber-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {contrastLabel(level)}
      </span>
    </div>
  );
}
