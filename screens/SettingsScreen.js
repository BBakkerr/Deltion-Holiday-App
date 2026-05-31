import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import styles from '../styles/globalStyles';

import { generateSchoolYears } from '../utils/holidayUtils';
import { getRegionFromProvince } from '../utils/regionUtils';

export default function SettingsScreen() {
  const [schoolYear, setSchoolYear] =
    useState('2025-2026');

  const [schoolYearOpen, setSchoolYearOpen] =
    useState(false);

  const [savedMessage, setSavedMessage] =
    useState('');

  const [region, setRegion] =
    useState('Noord');

  const [regionOpen, setRegionOpen] =
    useState(false);

  const [gps, setGps] =
    useState('Uit');

  const [gpsOpen, setGpsOpen] =
    useState(false);

  const schoolYears = generateSchoolYears();

  useEffect(() => {
    async function loadSettings() {
      const savedRegion =
        await AsyncStorage.getItem('region');

      const savedGps =
        await AsyncStorage.getItem('gps');

      const savedSchoolYear =
        await AsyncStorage.getItem('schoolYear');

      if (savedRegion) setRegion(savedRegion);
      if (savedGps) setGps(savedGps);
      if (savedSchoolYear) setSchoolYear(savedSchoolYear);
    }

    loadSettings();
  }, []);

  async function updateRegionFromGps() {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setGps('Uit');
      return;
    }

    const location =
      await Location.getCurrentPositionAsync({});

    const result =
      await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

    const province = result[0]?.region;

    const detectedRegion =
      getRegionFromProvince(province);

    if (!detectedRegion) {
      return;
    }

    const formattedRegion =
      detectedRegion.charAt(0).toUpperCase() +
      detectedRegion.slice(1);

    setRegion(formattedRegion);
  }

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

    if (gps === 'Actief') {
      setSavedMessage(`Locatie: Regio ${region}`);
    } else {
      setSavedMessage('Instellingen opgeslagen');
    }

    setTimeout(() => {
      setSavedMessage('');
    }, 2000);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        style={styles.containerSettings}
        contentContainerStyle={
          styles.containerSettingsContent
        }
        keyboardShouldPersistTaps="handled"
      >

        {/* REGIO */}
        {gps === 'Uit' && (
          <>
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
                {['Noord', 'Midden', 'Zuid'].map(item => (
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
                        styles.activeDropdownText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </>
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
            {['Actief', 'Uit'].map(item => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={async () => {
                  setGps(item);
                  setGpsOpen(false);

                  if (item === 'Actief') {
                    await updateRegionFromGps();
                  }
                }}
              >
                <Text
                  style={[
                    styles.dropdownText,
                    item === gps &&
                    styles.activeDropdownText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {gps === 'Actief' && (
          <MapView
            style={styles.map}
            showsUserLocation={true}
          />
        )}

        {/* SCHOOLJAAR */}
        <TouchableOpacity
          style={styles.settingBox}
          onPress={() =>
            setSchoolYearOpen(!schoolYearOpen)
          }
        >
          <Text style={styles.settingLabel}>
            Schooljaar:
          </Text>

          <Text style={styles.settingValue}>
            {schoolYear}
          </Text>

          <Text style={styles.settingValue}>
            {schoolYearOpen ? '∧' : '∨'}
          </Text>
        </TouchableOpacity>

        {schoolYearOpen && (
          <ScrollView
            style={styles.dropdown}
            nestedScrollEnabled
          >
            {schoolYears.map(item => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => {
                  setSchoolYear(item);
                  setSchoolYearOpen(false);
                }}
              >
                <Text
                  style={[
                    styles.dropdownText,
                    item === schoolYear &&
                    styles.activeDropdownText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveSettings}
        >
          <Text style={styles.saveButtonText}>
            Opslaan
          </Text>
        </TouchableOpacity>

        {savedMessage !== '' && (
          <View style={styles.savedMessageBox}>
            <Text style={styles.savedMessageText}>
              {savedMessage}
            </Text>
          </View>
        )}

      </ScrollView>
    </TouchableWithoutFeedback>
  );
}