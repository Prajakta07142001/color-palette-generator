"use client";

import { useState } from "react";

interface ColorCardProps {
  color: string;
  locked: boolean;
  onToggleLock: () => void;
}

export default function ColorCard({
  color,
  locked,
  onToggleLock,
}: ColorCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard not available, ignore silently
    }
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm">
      <button
        type="button"
        onClick={handleCopy}
        className="h-24 w-full transition-transform hover:scale-[1.02] cursor-pointer"
        style={{ backgroundColor: color }}
        aria-label={`Copy ${color}`}
      />
      <div className="p-3 bg-white dark:bg-zinc-900 flex flex-col gap-2">
        <button
          type="button"
          onClick={handleCopy}
          className="text-sm font-medium text-zinc-800 dark:text-zinc-100 text-left"
        >
          {copied ? "Copied!" : color.toUpperCase()}
        </button>
        <button
          type="button"
          onClick={onToggleLock}
          className={`text-xs px-2 py-1 rounded-md border transition-colors ${
            locked
              ? "bg-zinc-800 text-white border-zinc-800"
              : "bg-transparent text-zinc-600 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600"
          }`}
        >
          {locked ? "🔒 Locked" : "🔓 Lock"}
        </button>
      </div>
    </div>
  );
}
