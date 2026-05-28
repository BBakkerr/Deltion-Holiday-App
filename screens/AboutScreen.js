import { View, Text } from 'react-native';
import styles from '../styles/globalStyles';
import InfoBlock from '../components/InfoBlock';

export default function AboutScreen() {
  return (
    <View style={styles.screen}>

      <InfoBlock />

      <View style={styles.containerAbout}>
        <Text style={styles.aboutTitle}>
          About Deltion Holiday App
        </Text>
      </View>

    </View>
  );
}