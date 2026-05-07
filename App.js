import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import styles from './styles/globalStyles';

// COMPONENTS
import Header from './components/Header';

// SCREENS
import Countdown from './screens/CountdownScreen';
import Overzicht from './screens/OverzichtScreen';
import About from './screens/AboutScreen';
import Settings from './screens/SettingsScreen';



export default function App() {
  const [page, setPage] = useState('Countdown');

  return (
    <View style={styles.container}>
      <Header setPage={setPage} />

      {/* CONTENT */}
      <View style={styles.content}>
        {page === 'Countdown' && <Countdown />}
        {page === 'Overzicht' && <Overzicht />}
        {page === 'About' && <About />}
        {page === 'Settings' && <Settings />}
      </View>

      <StatusBar style="light" />
    </View>
  );
}

