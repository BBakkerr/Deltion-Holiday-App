import { ScrollView,View, Text, Image } from 'react-native';
import styles from '../styles/globalStyles';
import InfoBlock from '../components/InfoBlock';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.screen}>
      <InfoBlock />

      <Image
        source={require('../assets/bea_foto.jpg')}
        style={styles.aboutImage}
      />

      <View style={styles.containerAbout}>
        <Text style={styles.aboutTitle}>
          About Deltion Holiday App
        </Text>
        <Text style={styles.aboutDescription}>
          This app was created to help students and parents easily keep track of school holidays in the Netherlands. It provides a countdown to the next holiday and an overview of all upcoming holidays based on the selected school year and region.
        </Text>
      </View>
    </ScrollView>
  );
}