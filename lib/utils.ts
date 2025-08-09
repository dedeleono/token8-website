import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number with appropriate decimal places based on its magnitude
 * @param num - Number to format
 * @param options - Optional Intl.NumberFormat options
 * @returns Formatted number string with dynamic decimal places
 * @example
 * formatNumber(1234.5678) // "1,234.57"
 * formatNumber(0.000123) // "0.000123"
 */
export const formatNumber = (
  num: number,
  options: Intl.NumberFormatOptions = {},
): string => {
  if (num === null || num === undefined) return "0";

  const absNum = Math.abs(num);
  let decimals = 2;

  if (absNum < 1) {
    decimals = Math.max(2, Math.min(20, Math.ceil(-Math.log10(absNum)) + 2));
  }

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: decimals,
    ...options,
  }).format(num);
};

/**
 * Formats a number with grouped digits and optional exponential notation
 * @param value - Number to format
 * @param maxDecimals - Maximum number of decimal places to use in the formatted number (default: 2)
 * @param expThreshold - Threshold below which to use exponential notation (default: 0.0001)
 * @param expPrecision - Number of decimal places in exponential notation (default: 1)
 * @returns Formatted number string
 * @example
 * formatNumberGrouped(1234.5678) // "1,234.57"
 * formatNumberGrouped(1234.5678, 3) // "1,234.568"
 * formatNumberGrouped(0.0000123, 2, 0.0001) // "1.23e-5"
 */
export const formatNumberGrouped = (
  value: number,
  maxDecimals: number = 2,
  expThreshold: number = 0.0001,
  expPrecision: number = 1,
) => {
  if (value === 0) return "0";

  if (Math.abs(value) < expThreshold) {
    return value.toExponential(expPrecision);
  }

  if (Number.isInteger(value)) {
    return new Intl.NumberFormat("en-US", { useGrouping: true }).format(value);
  }

  const valueParts = value.toString().split(".");
  const decimalPart = valueParts[1] ?? "";
  const leadingZeros = decimalPart.match(/^0*/)?.[0].length ?? 0;
  const minimumFractionDigits =
    leadingZeros > 0 ? leadingZeros + 1 : maxDecimals;

  return new Intl.NumberFormat("en-US", {
    useGrouping: true,
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: Math.max(maxDecimals, minimumFractionDigits),
  }).format(value);
};