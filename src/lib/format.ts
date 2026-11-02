/** Formats a rupee amount for display, or "TBD" when the owner hasn't supplied it yet. */
export function rupees(amount: number | null | undefined): string {
  if (amount == null) return 'TBD';
  return `₹${amount.toLocaleString('en-IN')}`;
}
