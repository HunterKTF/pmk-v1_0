export function formatCurrency(value: number | null | undefined): string {
  if (value === null || value === undefined || isNaN(value)) {
    return "N/A"; // Or return "N/A", "0", or any placeholder you prefer
  }

  if (value < 100000) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }

  const absValue = Math.abs(value);
  let formatted = "";

  if (absValue >= 1_000 && absValue < 1_000_000) {
    formatted = (value / 1_000).toFixed(2) + " K";
  } else if (absValue >= 1_000_000 && absValue < 1_000_000_000) {
    formatted = (value / 1_000_000).toFixed(2) + " M";
  } else if (absValue >= 1_000_000_000) {
    formatted = (value / 1_000_000_000).toFixed(2) + " B";
  }

  return formatted;
}
