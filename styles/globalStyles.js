import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const isMobile = screenWidth < 700;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  content: {
    flex: 1,
  },

  // Header
  headerSafeArea: {
    backgroundColor: '#ff6600',
    zIndex: 999,
  },

  logo: {
    backgroundColor: '#ff6600',
    paddingHorizontal: 25,
    paddingTop: isMobile ? 35 : 20,
    paddingBottom: 20,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: isMobile ? 26 : 36,
    fontWeight: 'bold',
    color: '#fff',
  },

  // Hamburger
  hamburger: {
    display: isMobile ? 'flex' : 'none',
    padding: 10,
  },

  hamburgerText: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
  },

  // Navigation
  nav: {
    display: isMobile ? 'none' : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'flex-end',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? 18 : 25,
    marginTop: isMobile ? 20 : -35,
  },

  navOpen: {
    display: 'flex',
  },

  navText: {
    fontSize: isMobile ? 22 : 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  activeNavText: {
    color: '#0057d9',
  },

  // Screen
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  // Info Block
  infoBlock: {
    padding: 20,
    marginTop: 10,
  },

  infoTitle: {
    fontSize: isMobile ? 22 : 28,
    fontWeight: 'bold',
    color: '#000',
  },

  infoYear: {
    fontSize: isMobile ? 18 : 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  },

  infoGps: {
    fontSize: isMobile ? 16 : 20,
    marginTop: 5,
    color: '#000',
  },

  bold: {
    fontWeight: 'bold',
  },

  // Countdown
  countdownWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: isMobile ? 70 : 40,
  },

  countdownBox: {
    width: '85%',
    maxWidth: 500,
    minHeight: 220,
    backgroundColor: '#ff6600',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  countdownText: {
    fontSize: isMobile ? 40 : 52,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  holidayName: {
    fontSize: isMobile ? 28 : 30,
    marginTop: 15,
    color: '#000',
    textAlign: 'center',
  },

});

export default styles;