import { ScrollView, View, Text } from 'react-native';

export default function OverzichtScreen() {
  return (
    <ScrollView style={styles.containerOverzicht}>
      <Text style={styles.title}>Overzicht Screen</Text>
      <InfoBlock />

    </ScrollView>
  );
}