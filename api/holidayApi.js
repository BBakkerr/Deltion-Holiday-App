export async function getHolidayData() {
  try {
    const response = await fetch(
      'https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/schoolholidays?output=json'
    );

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log('API error:', error);
    return null;
  }
}