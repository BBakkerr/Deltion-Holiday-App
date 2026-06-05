export async function getHolidayData() {
  try {
    const url =
      'https://opendata.rijksoverheid.nl/v1/infotypes/schoolholidays?output=json';

    console.log('API URL:', url);

    const response = await fetch(url);

    if (!response.ok) {
      console.log('API status:', response.status);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.log('API error:', error);
    return null;
  }
}