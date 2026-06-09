import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import styles from '../styles/globalStyles';

export default function Header({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  function goToPage(page) {
    setCurrentPage(page);
    setMenuOpen(false);
  }

  const menuItems = [
    ['countdown', 'Countdown'],
    ['overzicht', 'Overzicht'],
    ['about', 'About'],
    ['settings', 'Settings'],
  ];

  return (
    <SafeAreaView style={styles.headerSafeArea}>
      <View style={[styles.logo, isLandscape && styles.logoLandscape]}>
        <View style={styles.headerTop}>
          <Text style={[styles.title, isLandscape && styles.titleLandscape]}>
            Deltion Holiday App
          </Text>

          {!isLandscape && (
            <TouchableOpacity
              style={styles.hamburger}
              onPress={() => setMenuOpen(!menuOpen)}
            >
              <Text style={styles.hamburgerText}>☰</Text>
            </TouchableOpacity>
          )}

          {isLandscape && (
            <View style={styles.navLandscape}>
              {menuItems.map(([page, label]) => (
                <TouchableOpacity key={page} onPress={() => goToPage(page)}>
                  <Text
                    style={[
                      styles.navText,
                      styles.navTextLandscape,
                      currentPage === page && styles.activeNavText,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {!isLandscape && (
          <View style={[styles.nav, menuOpen && styles.navOpen]}>
            {menuItems.map(([page, label]) => (
              <TouchableOpacity key={page} onPress={() => goToPage(page)}>
                <Text
                  style={[
                    styles.navText,
                    currentPage === page && styles.activeNavText,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}