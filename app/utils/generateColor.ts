export function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (x: number) =>
    Math.round(255 * x)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

export function generateHarmoniousPalette(count = 5): string[] {
  const baseHue = Math.floor(Math.random() * 360);
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    const h = (baseHue + i * 28) % 360;
    const s = 55 + Math.random() * 20;
    const l = 35 + i * 12;
    colors.push(hslToHex(h, s, Math.min(l, 90)));
  }
  return colors;
}

export function generatePalette(
  current: string[],
  locked: boolean[]
): string[] {
  const fresh = generateHarmoniousPalette(current.length || 5);
  if (!current.length) return fresh;
  return current.map((c, i) => (locked[i] ? c : fresh[i]));
}
