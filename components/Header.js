import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/globalStyles';

export default function Header({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function goToPage(page) {
    setCurrentPage(page);
    setMenuOpen(false);
  }

  return (
    <SafeAreaView style={styles.headerSafeArea}>
      <View style={styles.logo}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>Deltion Holiday App</Text>

          <TouchableOpacity
            style={styles.hamburger}
            onPress={() => setMenuOpen(!menuOpen)}
          >
            <Text style={styles.hamburgerText}>☰</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.nav, menuOpen && styles.navOpen]}>
          <TouchableOpacity onPress={() => goToPage('countdown')}>
            <Text style={[styles.navText, currentPage === 'countdown' && styles.activeNavText]}>
              Countdown
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToPage('overzicht')}>
            <Text style={[styles.navText, currentPage === 'overzicht' && styles.activeNavText]}>
              Overzicht
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToPage('about')}>
            <Text style={[styles.navText, currentPage === 'about' && styles.activeNavText]}>
              About
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToPage('settings')}>
            <Text style={[styles.navText, currentPage === 'settings' && styles.activeNavText]}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}