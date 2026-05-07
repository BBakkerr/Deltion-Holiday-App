import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Header({ setPage }) {
  return (
    <View style={styles.header}>
      <Text>Deltion Holiday App</Text>

      <Pressable onPress={() => setPage('Countdown')}>
        <Text>Countdown</Text>
      </Pressable>

      <Pressable onPress={() => setPage('Overzicht')}>
        <Text>Overzicht</Text>
      </Pressable>

      <Pressable onPress={() => setPage('About')}>
        <Text>About</Text>
      </Pressable>

      <Pressable onPress={() => setPage('Settings')}>
        <Text>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    padding: 15,
    backgroundColor: '#ff6600',
  },
});