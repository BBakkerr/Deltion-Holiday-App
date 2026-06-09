import React, { useState, useEffect } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

import styles from '../styles/globalStyles';

export default function InfoBlock() {
  const [region, setRegion] = useState('Noord');
  const [gps, setGps] = useState('Actief');
  const [schoolYear, setSchoolYear] = useState('2025-2026');

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

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
   <View style={[styles.infoBlock, isLandscape && styles.infoBlockLandscape]}>
  <Text style={styles.infoTitle}>Regio: {region}</Text>

  <Text style={[styles.infoYear, isLandscape && styles.infoTextLandscape]}>
      <MaterialIcons name="access-time" size={15} color="black" />{schoolYear}
  </Text>

  <Text style={[styles.infoGps, isLandscape && styles.infoTextLandscape]}>
    <Text style={styles.bold}>GPS:</Text> {gps}
  </Text>
</View>
  );
}