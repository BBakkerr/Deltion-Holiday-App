import {View, Text} from 'react-native';
import styles from '../styles/globalStyles';
import InfoBlock from '../components/InfoBlock';

export default function OverzichtScreen() {
  return (
    <View style={styles.containerOverzicht}>
      <Text style={styles.title}>Overzicht Screen</Text>
      <InfoBlock />
    </View>
  );
}