export function calculateDays(startDate) {

  const today = new Date();

  const difference =
    new Date(startDate) - today;

  return Math.ceil(
    difference / (1000 * 60 * 60 * 24)
  );
}