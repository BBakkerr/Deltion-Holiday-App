import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/globalStyles';
import { getHolidayData } from '../api/holidayApi';

export default function CountdownScreen() {

  const [region, setRegion] = useState('noord');
  const [schoolYear, setSchoolYear] = useState('');
  const [gpsActive, setGpsActive] = useState(false);

  const [daysLeft, setDaysLeft] = useState(null);
  const [holidayName, setHolidayName] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {

    const data = await getHolidayData();

    if (!data || !data.content || !data.content[0]) {
      setDaysLeft('Geen data');
      return;
    }

    const schoolyear = data.content[0].schoolyear.trim();
    setSchoolYear(schoolyear);

    const vacations = data.content[0].vacations;

    // Zoek Zomervakantie
    const summerHoliday = vacations.find(
      (holiday) => holiday.type.trim() === 'Zomervakantie'
    );

    if (!summerHoliday) {
      setDaysLeft('Niet gevonden');
      return;
    }

    // Zoek regio
    const regionData = summerHoliday.regions.find(
      (item) => item.region === region
    );

    if (!regionData) {
      setDaysLeft('Geen regio');
      return;
    }

    // Datum berekenen
    const today = new Date();
    const startDate = new Date(regionData.startdate);

    const difference = startDate - today;

    const days = Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );

    setDaysLeft(days);

    setHolidayName(
      summerHoliday.type.trim()
    );
  }

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
          <Text style={styles.bold}>GPS:</Text>{' '}
          {gpsActive ? 'Actief' : 'Inactief'}
        </Text>

      </View>

      <View style={styles.countdownWrapper}>

        <View style={styles.countdownBox}>

          <Text style={styles.countdownText}>
            {
              typeof daysLeft === 'number'
                ? `${daysLeft} Dagen`
                : daysLeft || 'Laden...'
            }
          </Text>

          <Text style={styles.holidayName}>
            {holidayName}
          </Text>

        </View>

      </View>

    </View>
  );
}