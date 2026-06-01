import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import InfoBlock from '../components/InfoBlock';
import styles from '../styles/globalStyles';

import { getHolidayData } from '../api/holidayApi';

import {
  getVacationsForSchoolYear,
} from '../utils/holidayUtils';

function getHolidayIcon(name) {
  const lowerName = name.toLowerCase();

  if (lowerName.includes('zomer')) return '☀️';
  if (lowerName.includes('herfst')) return '🍂';
  if (lowerName.includes('kerst')) return '🎄';
  if (lowerName.includes('voorjaar')) return '⛸️';
  if (lowerName.includes('mei')) return '🌸';

  return '📅';
}

export default function CountdownScreen() {
  const [nextVacation, setNextVacation] =
    useState(null);

  const [daysLeft, setDaysLeft] =
    useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const savedRegion =
          await AsyncStorage.getItem('region');

        const savedSchoolYear =
          await AsyncStorage.getItem('schoolYear');

        const region = savedRegion || 'Noord';
        const schoolYear = savedSchoolYear || '2025-2026';

        const data = await getHolidayData();

        const vacations =
          getVacationsForSchoolYear(
            data,
            schoolYear,
            region
          );

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcomingVacations =
          vacations
            .map(vacation => ({
              ...vacation,
              start: new Date(vacation.startDate + 'T00:00:00'),
            }))
            .filter(
              vacation => vacation.start >= today
            )
            .sort(
              (a, b) => a.start - b.start
            );

        if (upcomingVacations.length > 0) {
          const next = upcomingVacations[0];

          const diffTime =
            next.start.getTime() -
            today.getTime();

          const diffDays = Math.ceil(
            diffTime /
              (1000 * 60 * 60 * 24)
          );

          setNextVacation(next);
          setDaysLeft(diffDays);
        } else {
          setNextVacation(null);
          setDaysLeft(null);
        }
      } catch (error) {
        console.error(
          'Fout bij laden countdown:',
          error
        );

        setNextVacation(null);
        setDaysLeft(null);
      }
    }

    loadData();
  }, []);

  return (
    <View style={styles.screen}>
      <InfoBlock />

      <View style={styles.countdownWrapper}>
        <View style={styles.countdownBox}>
          {nextVacation ? (
            <>
              <Text style={styles.countdownText}>
                {getHolidayIcon(
                  nextVacation.name
                )}
              </Text>

              <Text style={styles.countdownText}>
                {daysLeft} Dagen
              </Text>

              <Text style={styles.holidayName}>
                {nextVacation.name}
              </Text>
            </>
          ) : (
            <Text style={styles.holidayName}>
              Geen vakantie gevonden
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}