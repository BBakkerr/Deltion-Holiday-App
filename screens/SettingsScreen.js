import React, { useState } from 'react';

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
  const [schoolYear, setSchoolYear] = useState('2025-2026');
  const [savedMessage, setSavedMessage] = useState(false);

  function saveSettings() {
    Keyboard.dismiss();
    setSavedMessage(true);

    setTimeout(() => {
      setSavedMessage(false);
    }, 2000);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.containerSettings}>

        <View style={styles.settingBox}>
          <Text style={styles.settingLabel}>Regio:</Text>
          <Text style={styles.settingValue}>Noord</Text>
        </View>

        <View style={styles.settingBox}>
          <Text style={styles.settingLabel}>Schooljaar:</Text>

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

        <View style={styles.settingBox}>
          <Text style={styles.settingLabel}>GPS:</Text>
          <Text style={styles.settingValue}>Actief</Text>
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveSettings}
        >
          <Text style={styles.saveButtonText}>Opslaan</Text>
        </TouchableOpacity>

        {savedMessage && (
          <View style={styles.savedMessageBox}>
            <Text style={styles.savedMessageText}>
              Het is opgeslagen!
            </Text>
          </View>
        )}

      </View>
    </TouchableWithoutFeedback>
  );
}