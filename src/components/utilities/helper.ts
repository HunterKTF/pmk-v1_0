export function formatCurrency(value: number | null | undefined): string {
  if (value === null || value === undefined || isNaN(value)) {
    return "N/A";
  }

  // Handle small numbers directly (including negatives)
  if (value > -100000 && value < 100000) {
    const formatted = value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    return value < 0 ? `(${formatted.replace("-", "")})` : formatted;
  }

  const absValue = Math.abs(value);
  let formatted = "";

  if (absValue >= 1_000 && absValue < 1_000_000) {
    formatted = (absValue / 1_000).toFixed(2) + " K";
  } else if (absValue >= 1_000_000 && absValue < 1_000_000_000) {
    formatted = (absValue / 1_000_000).toFixed(2) + " M";
  } else if (absValue >= 1_000_000_000) {
    formatted = (absValue / 1_000_000_000).toFixed(2) + " B";
  }

  // Apply parentheses for negatives
  if (value < 0) {
    formatted = `(${formatted})`;
  }

  return formatted;
}
