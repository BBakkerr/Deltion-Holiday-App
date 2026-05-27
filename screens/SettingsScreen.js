import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from '../styles/globalStyles';

export default function SettingsScreen() {

  const [schoolYear, setSchoolYear] =
    useState('2025-2026');

  return (

    <View style={styles.containerSettings}>

      {/* REGIO */}
      <View style={styles.settingBox}>
        <Text style={styles.settingLabel}>
          Regio:
        </Text>

        <Text style={styles.settingValue}>
          Noord
        </Text>
      </View>

      {/* SCHOOLJAAR */}
      <View style={styles.settingBox}>

        <Text style={styles.settingLabel}>
          Schooljaar:
        </Text>

        <TextInput
          style={styles.schoolInput}
          value={schoolYear}
          onChangeText={setSchoolYear}
        />

      </View>

      {/* GPS */}
      <View style={styles.settingBox}>
        <Text style={styles.settingLabel}>
          GPS:
        </Text>

        <Text style={styles.settingValue}>
          Actief
        </Text>
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>
          Opslaan
        </Text>
      </TouchableOpacity>

    </View>
  );
}