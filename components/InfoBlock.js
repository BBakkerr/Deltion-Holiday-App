import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/globalStyles';

export default function InfoBlock() {
  const [region, setRegion] = useState('Noord');
  const [gps, setGps] = useState('Actief');
  const [schoolYear, setSchoolYear] = useState('2025-2026');

  useEffect(() => {
    async function loadSettings() {
      const savedRegion = await AsyncStorage.getItem('region');
      const savedGps = await AsyncStorage.getItem('gps');
      const savedSchoolYear = await AsyncStorage.getItem('schoolYear');

      if (savedRegion) setRegion(savedRegion);
      if (savedGps) setGps(savedGps);
      if (savedSchoolYear) setSchoolYear(savedSchoolYear);
    }

    loadSettings();
  }, []);

  return (
    <View style={styles.infoBlock}>
      <Text style={styles.infoTitle}>Regio: {region}</Text>

      <Text style={styles.infoYear}>
        ◷ {schoolYear}
      </Text>

      <Text style={styles.infoGps}>
        <Text style={styles.bold}>GPS:</Text> {gps}
      </Text>
    </View>
  );
}