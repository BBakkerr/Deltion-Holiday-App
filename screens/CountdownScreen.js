import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/globalStyles';

// import { getHolidayData } from '../api/holidayApi';
import { holidayData } from '../api/data/holidayData';

import {
  getSchoolYear,
  getSummerHoliday,
  getRegionData,
} from '../utils/holidayUtils';

import {
  calculateDays,
} from '../utils/dateUtils';

export default function CountdownScreen() {

  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {

    const data = holidayData;

    const schoolData =
      getSchoolYear(data, '2025-2026');

    const vacations =
      schoolData.content[0].vacations;

    const summerHoliday =
      getSummerHoliday(vacations);

    const regionData =
      getRegionData(summerHoliday, 'noord');

    const days =
      calculateDays(regionData.startdate);

    setDaysLeft(days);
  }

  return (
    <View style={styles.screen}>

      <View style={styles.countdownWrapper}>

        <View style={styles.countdownBox}>

          <Text style={styles.countdownText}>
            {daysLeft} Dagen
          </Text>

          <Text style={styles.holidayName}>
            Zomervakantie
          </Text>

        </View>

      </View>

    </View>
  );
}