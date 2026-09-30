const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-07" -> "Jul 2026" */
export function formatMonth(ym: string): string {
  const [year, month] = ym.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Minimal inline Markdown for short YAML text: [links](url), **bold** and *italics*. */
export function inlineMarkdown(text: string): string {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** Separator to put after author i of n: "A, B, and C" / "A and B". */
export function authorSeparator(i: number, n: number): string {
  if (i === n - 1) return '';
  if (i === n - 2) return n > 2 ? ', and ' : ' and ';
  return ', ';
}
