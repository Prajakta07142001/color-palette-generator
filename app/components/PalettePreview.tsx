interface PalettePreviewProps {
  palette: string[];
}

export default function PalettePreview({ palette }: PalettePreviewProps) {
  const [primary, secondary, accent, , background] = palette;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl p-4 bg-zinc-100">
        <p className="text-xs font-medium text-zinc-500 mb-2">
          Light mode preview
        </p>
        <div
          className="rounded-lg p-4"
          style={{ backgroundColor: background || "#ffffff" }}
        >
          <p
            className="font-medium text-base mb-1"
            style={{ color: primary }}
          >
            Sample card title
          </p>
          <p className="text-sm" style={{ color: "#333333" }}>
            This is how body text reads against this background.
          </p>
          <button
            className="mt-3 text-sm px-3 py-1.5 rounded-md text-white"
            style={{ backgroundColor: secondary }}
          >
            Action
          </button>
        </div>
      </div>

      <div className="rounded-xl p-4 bg-zinc-800">
        <p className="text-xs font-medium text-zinc-400 mb-2">
          Dark mode preview
        </p>
        <div className="rounded-lg p-4 bg-zinc-900">
          <p
            className="font-medium text-base mb-1"
            style={{ color: accent }}
          >
            Sample card title
          </p>
          <p className="text-sm text-zinc-300">
            This is how body text reads against this background.
          </p>
          <button
            className="mt-3 text-sm px-3 py-1.5 rounded-md text-white"
            style={{ backgroundColor: primary }}
          >
            Action
          </button>
        </div>
      </div>
    </div>
  );
}
