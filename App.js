import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStaticNavigation, useNavigation,} from 'react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-navigation/elements';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Deltion Holiday App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
