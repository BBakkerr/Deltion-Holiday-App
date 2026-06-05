import { ScrollView, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/globalStyles';
import InfoBlock from '../components/InfoBlock';
import { getHolidayData } from '../api/holidayApi';
import { getVacationsForSchoolYear } from '../utils/holidayUtils';

export default function OverzichtScreen() {
  return (
    <ScrollView style={styles.containerOverzicht}>
      <Text style={styles.title}>Overzicht Screen</Text>
      <InfoBlock />

    </ScrollView>
  );
}