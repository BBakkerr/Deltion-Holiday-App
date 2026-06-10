export function getVacationsForSchoolYear(data, schoolYear, region) {
  if (!data) return [];

  const selectedYear = Array.isArray(data)
    ? data.find(item => item.canonical?.includes(schoolYear))
    : data;

  if (!selectedYear) return [];

  const yearContent = selectedYear?.content?.[0];

  const rawVacations =
    yearContent?.vacations ||
    selectedYear?.vacations ||
    [];

  const vacations = [];

  const normalizeRegion = value => {
    if (!value) return '';

    const text = value.toString().trim().toLowerCase();

    if (text.includes('noord')) return 'Noord';
    if (text.includes('midden')) return 'Midden';
    if (text.includes('zuid')) return 'Zuid';
    if (text.includes('heel')) return 'Heel Nederland';

    return value.toString().trim();
  };

  rawVacations.forEach(item => {
    const name =
      item.type?.trim() ||
      item.title?.trim() ||
      'Vakantie';

    item.regions.forEach(regionItem => {
      const regionName = normalizeRegion(regionItem.region);

      if (
        regionName === normalizeRegion(region) ||
        regionName === 'Heel Nederland'
      ) {
        vacations.push({
          name,
          region: regionName,
          startDate: new Date(regionItem.startdate),
          endDate: new Date(regionItem.enddate),
        });
      }
    });
  });

  return vacations;
}

export function generateSchoolYears() {
  const years = [];

  for (let year = 2024; year <= 2028; year++) {
    years.push(`${year}-${year + 1}`);
  }

  return years.reverse();
}