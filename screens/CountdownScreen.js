import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Text,ActivityIndicator, } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/globalStyles';
import InfoBlock from '../components/InfoBlock';
import { getHolidayData } from '../api/holidayApi';
import { getVacationsForSchoolYear } from '../utils/holidayUtils';

export default function CountdownScreen() {
  const [daysLeft, setDaysLeft] = useState(null);
  const [holidayName, setHolidayName] = useState('');
  const [loading, setLoading] = useState(true);
  const [holidayIcon, setHolidayIcon] = useState('calendar');

  useEffect(() => {
    loadData();
  }, []);

  function getHolidayIcon(holidayName) {
  const name = holidayName.toLowerCase();

  if (name.includes('zomer')) return 'white-balance-sunny';
  if (name.includes('herfst')) return 'leaf';
  if (name.includes('kerst')) return 'pine-tree';
  if (name.includes('voorjaar')) return 'snowflake';
  if (name.includes('mei')) return 'flower';

  return 'calendar';
}
  async function loadData() {
    setLoading(true);

    try {
      const savedYear =
        (await AsyncStorage.getItem('schoolYear')) ||
        '2025-2026';

      const savedRegion =
        (await AsyncStorage.getItem('region')) ||
        'Midden';

      console.log('Schooljaar:', savedYear);
      console.log('Regio:', savedRegion);

      const data = await getHolidayData(savedYear);

      console.log('API DATA:', data);

      const vacations = getVacationsForSchoolYear(
        data,
        savedYear,
        savedRegion
      );

      console.log('VACATIONS:', vacations);

      if (!vacations || vacations.length === 0) {
        setDaysLeft(null);
        setHolidayName('Geen data gevonden');
        setLoading(false);
        return;
      }

     const today = new Date();
today.setHours(0, 0, 0, 0);

const nextVacation = vacations
  .filter(
    v =>
      v.startDate &&
      !isNaN(v.startDate) &&
      v.startDate >= today
  )
  .sort((a, b) => a.startDate - b.startDate)[0];
      if (nextVacation) {
        const days = Math.max(
          0,
          Math.ceil(
            (nextVacation.startDate - today) /
              (1000 * 60 * 60 * 24)
          )
        );

        setDaysLeft(days);
        setHolidayName(nextVacation.name);
        setHolidayIcon(getHolidayIcon(nextVacation.name));
      } else {
        setDaysLeft(null);
        setHolidayName('Geen volgende vakantie');
      }
    } catch (error) {
      console.log('Countdown fout:', error);

      setDaysLeft(null);
      setHolidayName('Fout bij laden');
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1 }}
      />
    );
  }

 return (
  <View style={styles.screen}>
    <InfoBlock />
<View style={styles.countdownWrapper}>
    <View style={styles.countdownBox}>
      <MaterialCommunityIcons
        name={holidayIcon}
        size={60}
        color="#fff"
        style={{ marginBottom: 10 }}
      />

      <Text style={styles.countdownText}>
        {daysLeft !== null ? `${daysLeft} dagen` : '--'}
      </Text>

      <Text style={styles.holidayName} >
        
        {holidayName}
      </Text>
    </View>
    </View>
  </View>
);
}