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
          Over Deltion Holiday App
        </Text>
        <Text style={styles.aboutDescription}>
          Deze app is ontwikkeld om studenten en ouders te helpen de schoolvakanties in Nederland gemakkelijk bij te houden. De app biedt een aftelling naar de volgende vakantie en een overzicht van alle komende vakanties op basis van het geselecteerde schooljaar en de geselecteerde regio.
        </Text>
      </View>
    </ScrollView>
  );
}