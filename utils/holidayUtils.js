export function getSchoolYear(data, year) {

  return data.find(
    (item) =>
      item.content[0].schoolyear.trim() === year
  );
}

export function getSummerHoliday(vacations) {

  return vacations.find(
    (holiday) =>
      holiday.type.trim() === 'Zomervakantie'
  );
}

export function getRegionData(holiday, region) {

  return holiday.regions.find(
    (item) => item.region === region
  );
}