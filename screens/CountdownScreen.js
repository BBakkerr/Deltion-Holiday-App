import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/globalStyles';
import { getHolidayData } from '../api/holidayApi';

export default function CountdownScreen() {
  const [region, setRegion] = useState('noord');
  const [schoolYear, setSchoolYear] = useState('2025-2026');
  const [gpsActive, setGpsActive] = useState(false);
  const [daysLeft, setDaysLeft] = useState(null);
  const [holidayName, setHolidayName] = useState('');

  useEffect(() => {
    loadData();
  }, [region]);

  async function loadData() {
    const data = await getHolidayData();

    if (!data) return;

    const schoolyear = data.content[0].schoolyear.trim();
    const holidays = data.content[0].vacations;
    const today = new Date();

    setSchoolYear(schoolyear);

    const holidaysForRegion = holidays
      .map((holiday) => {
        const foundRegion = holiday.regions.find(
          (item) =>
            item.region === region || item.region === 'heel Nederland'
        );

        if (!foundRegion) return null;

        return {
          name: holiday.type.trim(),
          startDate: new Date(foundRegion.startdate),
          endDate: new Date(foundRegion.enddate),
        };
      })
      .filter(Boolean)
      .filter((holiday) => holiday.startDate > today)
      .sort((a, b) => a.startDate - b.startDate);

    const nextHoliday = holidaysForRegion[0];

    if (nextHoliday) {
      const difference = nextHoliday.startDate - today;
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

      setDaysLeft(days);
      setHolidayName(nextHoliday.name);
    }
  }
// Website tonen
  return (
    <View style={styles.screen}>
      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>
          Regio: {region.charAt(0).toUpperCase() + region.slice(1)}
        </Text>

        <Text style={styles.infoYear}>
          🕘 {schoolYear || 'Laden...'}
        </Text>

        <Text style={styles.infoGps}>
          <Text style={styles.bold}>GPS:</Text> {gpsActive ? 'Actief' : 'Inactief'}
        </Text>
      </View>

      <View style={styles.countdownWrapper}>
        <View style={styles.countdownBox}>
          <Text style={styles.countdownText}>
            {daysLeft === null ? 'Laden...' : `${daysLeft} Dagen`}
          </Text>

          <Text style={styles.holidayName}>
            {holidayName}
          </Text>
        </View>
      </View>
    </View>
  );
}