import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Color Palette Generator",
  description:
    "Generate beautiful, accessible color palettes for UI/UX design. Copy HEX codes, preview light/dark themes, and check WCAG contrast ratios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
