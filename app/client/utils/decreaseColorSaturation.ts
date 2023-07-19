export function decreaseColorSaturation(
  corHex: string,
  quantidade: number
): string {
  function hexParaHsl(corHex: string): [number, number, number] {
    const r = parseInt(corHex.substring(1, 3), 16) / 255;
    const g = parseInt(corHex.substring(3, 5), 16) / 255;
    const b = parseInt(corHex.substring(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;

    let s = 0;
    const d = max - min;
    if (max !== min) {
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    }

    let h = 0;
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else {
      h = (r - g) / d + 4;
    }
    h /= 6;

    return [h * 360, s * 100, l * 100];
  }

  function hslParaHex(h: number, s: number, l: number): string {
    h /= 360;
    s /= 100;
    l /= 100;

    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1 / 3);

    const toHex = (c: number) => {
      const hex = Math.round(c * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return "#" + toHex(r) + toHex(g) + toHex(b);
  }

  const corHsl = hexParaHsl(corHex);
  let [h, s, l] = corHsl;

  s -= quantidade;
  s = Math.max(0, s);

  const novaCorHex = hslParaHex(h, s, l);

  return novaCorHex;
}
