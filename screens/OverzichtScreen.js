import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles/globalStyles';
import InfoBlock from '../components/InfoBlock';
import { getHolidayData } from '../api/holidayApi';
import { getVacationsForSchoolYear } from '../utils/holidayUtils';

export default function OverzichtScreen() {
  const [vacations, setVacations] = useState([]);
  const [loading, setLoading] = useState(true);

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

  function getDaysLeft(startDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    return Math.max(
      0,
      Math.ceil((start - today) / (1000 * 60 * 60 * 24))
    );
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
    });
  }

  async function loadData() {
    try {
      const savedYear =
        (await AsyncStorage.getItem('schoolYear')) || '2025-2026';

      const savedRegion =
        (await AsyncStorage.getItem('region')) || 'Midden';

      const data = await getHolidayData(savedYear);

      const vacationData = getVacationsForSchoolYear(
        data,
        savedYear,
        savedRegion
      );

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const sortedVacations = vacationData
        .filter(v => v.endDate >= today)
        .sort((a, b) => a.startDate - b.startDate);

      setVacations(sortedVacations);
    } catch (error) {
      console.log('Overzicht fout:', error);
    }

    setLoading(false);
  }

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <ScrollView style={styles.containerOverzicht}>
      <InfoBlock />

      <View style={styles.overzichtBox}>
        {vacations.map((vakantie, index) => (
          <View key={index} style={styles.overzichtRow}>
            <MaterialCommunityIcons
              name={getHolidayIcon(vakantie.name)}
              size={34}
              color="#fff"
              style={styles.overzichtIcon}
            />

            <Text style={styles.overzichtNaam}>
              {vakantie.name}:
            </Text>

            <View style={styles.overzichtRechts}>
              <Text style={styles.overzichtDagen}>
                {getDaysLeft(vakantie.startDate)} Dagen
              </Text>

              <Text style={styles.overzichtDatum}>
                {formatDate(vakantie.startDate)} t/m{' '}
                {formatDate(vakantie.endDate)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}