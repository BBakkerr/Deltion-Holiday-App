export function getVacationsForSchoolYear(
  apiData,
  schoolYear,
  region
) {
  if (!apiData) return [];

  const yearData = apiData.content.find(
    item => item.schoolyear.trim() === schoolYear
  );

  if (!yearData) return [];

  return yearData.vacations
    .map(vacation => {
      const vacationRegion =
        vacation.regions.find(
          r => r.region === region.toLowerCase()
        ) ||
        vacation.regions.find(
          r => r.region === 'heel Nederland'
        );

      if (!vacationRegion) return null;

      return {
        name: vacation.type.trim(),
        compulsory:
          vacation.compulsorydates === 'true',
        startDate: vacationRegion.startdate,
        endDate: vacationRegion.enddate,
        region: vacationRegion.region,
      };
    })
    .filter(Boolean);
}

export function generateSchoolYears() {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear - 2; year <= currentYear + 5; year++) {
    years.push(`${year}-${year + 1}`);
  }

  return years;
}