import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from '../styles/globalStyles';

export default function SettingsScreen() {

  const [schoolYear, setSchoolYear] =
    useState('2025-2026');

  const [savedMessage, setSavedMessage] =
    useState(false);

  const [region, setRegion] =
    useState('Noord');

  const [regionOpen, setRegionOpen] =
    useState(false);

  const [gps, setGps] =
    useState('Actief');

  const [gpsOpen, setGpsOpen] =
    useState(false);

  useEffect(() => {

    async function loadSettings() {

      const savedRegion =
        await AsyncStorage.getItem('region');

      const savedGps =
        await AsyncStorage.getItem('gps');

      const savedSchoolYear =
        await AsyncStorage.getItem('schoolYear');

      if (savedRegion) {
        setRegion(savedRegion);
      }

      if (savedGps) {
        setGps(savedGps);
      }

      if (savedSchoolYear) {
        setSchoolYear(savedSchoolYear);
      }

    }

    loadSettings();

  }, []);

  async function saveSettings() {

    Keyboard.dismiss();

    await AsyncStorage.setItem(
      'region',
      String(region)
    );

    await AsyncStorage.setItem(
      'gps',
      String(gps)
    );

    await AsyncStorage.setItem(
      'schoolYear',
      String(schoolYear)
    );

    setSavedMessage(true);

    setTimeout(() => {
      setSavedMessage(false);
    }, 2000);

  }

  return (

    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >

      <View style={styles.containerSettings}>

        {/* REGIO */}

        <TouchableOpacity
          style={styles.settingBox}
          onPress={() =>
            setRegionOpen(!regionOpen)
          }
        >

          <Text style={styles.settingLabel}>
            Regio:
          </Text>

          <Text style={styles.settingValue}>
            {region}
          </Text>
          <Text style={styles.settingValue}>
            {regionOpen ? '∧' : '∨'}
          </Text>
        </TouchableOpacity>

        {regionOpen && (
          <View style={styles.dropdown}>

            {['Noord', 'Midden', 'Zuid']
              .map(item => (
                <TouchableOpacity
                  key={item}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setRegion(item);
                    setRegionOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.dropdownText,

                      item === region &&
                      styles.activeDropdownText
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        )}

        {/* GPS */}
        <TouchableOpacity
          style={styles.settingBox}
          onPress={() =>
            setGpsOpen(!gpsOpen)
          }
        >
          <Text style={styles.settingLabel}>
            GPS:
          </Text>
          <Text style={styles.settingValue}>
            {gps}
          </Text>
          <Text style={styles.settingValue}>
            {gpsOpen ? '∧' : '∨'}
          </Text>
        </TouchableOpacity>

        {gpsOpen && (
          <View style={styles.dropdown}>
            {['Actief', 'Uit']
              .map(item => (
                <TouchableOpacity
                  key={item}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setGps(item);
                    setGpsOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.dropdownText,

                      item === gps &&
                      styles.activeDropdownText
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>

              ))}

          </View>

        )}

        {/* SCHOOLJAAR */}

        <View style={styles.settingBox}>
          <Text style={styles.settingLabel}>
            Schooljaar:
          </Text>
          <TextInput
            style={styles.schoolInput}
            value={schoolYear}
            onChangeText={setSchoolYear}
            keyboardType="numbers-and-punctuation"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={true}
          />
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveSettings}
        >
          <Text style={styles.saveButtonText}>
            Opslaan
          </Text>
        </TouchableOpacity>

        {/* SAVED MESSAGE */}
        {savedMessage && (
          <View style={styles.savedMessageBox}>
            <Text style={styles.savedMessageText}>
              Instellingen opgeslagen
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>

  );
}