type FormatCompactOptions = {
  decimals?: number;
};

export function formatCompactNumber(
  value: number,
  options?: FormatCompactOptions
): string {
  if (isNaN(value)) return "0";

  const { decimals = 1 } = options ?? {};

  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  const units = [
    { limit: 1e12, suffix: "T" },
    { limit: 1e9, suffix: "B" },
    { limit: 1e6, suffix: "M" },
    { limit: 1e3, suffix: "K" },
  ];

  for (const unit of units) {
    if (abs >= unit.limit) {
      const num = abs / unit.limit;

      return (
        sign +
        trimDecimals(num.toFixed(decimals)) +
        " " +
        unit.suffix
      );
    }
  }

  return sign + abs.toString();
}

function trimDecimals(value: string): string {
  return value.replace(/\.0+$|(\.\d*[1-9])0+$/, "$1");
}
