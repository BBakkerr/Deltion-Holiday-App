import { StatusBar } from 'expo-status-bar';
import { View, useWindowDimensions } from 'react-native';
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
  const [page, setPage] = useState('countdown');

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      <Header
        currentPage={page}
        setCurrentPage={setPage}
      />

      <View
        style={[
          styles.content,
          isLandscape && { paddingHorizontal: 40 }
        ]}
      >
        {page === 'countdown' && <Countdown />}
        {page === 'overzicht' && <Overzicht />}
        {page === 'about' && <About />}
        {page === 'settings' && <Settings />}
      </View>

      <StatusBar style="light" />
    </View>
  );
}