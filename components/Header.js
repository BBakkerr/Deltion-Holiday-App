import { View, Text, Pressable, StyleSheet } from 'react-native';
import styles from '../styles/globalStyles';
export default function Header({ setPage }) {
    return (
        <View style={styles.logo}>
            <Text>Deltion Holiday App</Text>
           <Pressable onPress={() => setPage('Countdown')}>
                
                </Pressable>
            <View style={styles.nav}>
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
        </View>
    );
}

