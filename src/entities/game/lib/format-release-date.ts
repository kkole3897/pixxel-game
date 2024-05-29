export function formatReleaseDate(
  year: number | null,
  month: number | null,
  day: number | null
): string {
  if (year === null) {
    return '출시 미정';
  }

  let releaseDateText = `${year}`;

  if (month !== null) {
    releaseDateText = `${releaseDateText}.${month.toString().padStart(2, '0')}`;
  }

  if (day !== null) {
    releaseDateText = `${releaseDateText}.${day.toString().padStart(2, '0')}`;
  }

  return releaseDateText;
}
