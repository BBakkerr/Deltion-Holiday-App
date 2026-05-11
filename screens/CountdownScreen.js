import {View, Text} from 'react-native';
import styles from '../styles/globalStyles';

export default function CountdownScreen() {
  return (
    <View style={styles.containerCountdown}>
      <Text style={styles.title}>Countdown Screen</Text>
    </View>
  );
}