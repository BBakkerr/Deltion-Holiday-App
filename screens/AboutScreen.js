import {View, Text} from 'react-native';
import styles from '../styles/globalStyles';

export default function AboutScreen() {
  return (
    <View style={styles.containerAbout}>
      <Text style={styles.titleAbout}>About Deltion Holiday App</Text>
    </View>
  );
}