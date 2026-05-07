import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// HEADER
import Header from './components/Header';

import Countdown from './screens/Countdown';
import Overzicht from './screens/Overzicht';
import About from './screens/About';
import Settings from './screens/Settings';


export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
  },

});