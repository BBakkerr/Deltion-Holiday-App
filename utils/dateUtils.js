export function calculateDays(dateString) {
  const now = new Date();
  const future = new Date(dateString);

  const diff = future - now;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
