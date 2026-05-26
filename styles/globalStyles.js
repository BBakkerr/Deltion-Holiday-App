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
    marginTop: isMobile ? 160 : 200,
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

  // About
  containerAbout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Settings
  containerSettings: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    gap: 30,
  },

  titleSettings: {
    fontSize: isMobile ? 28 : 36,
    fontWeight: 'bold',
    color: '#000',
  },

  settingBox: {
    width: '85%',
    maxWidth: 500,
    minHeight: 80,
    backgroundColor: '#ea8458',
    borderRadius: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 25,
  },

  settingLabel: {
    fontSize: isMobile ? 24 : 28,
    color: '#000',
  },

  settingValue: {
    fontSize: isMobile ? 24 : 28,
    color: '#000',
  },

  schoolInput: {
    fontSize: isMobile ? 24 : 24,
    color: '#000',
    backgroundColor: '#f5a57d',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    minWidth: 50,
    textAlign: 'right',
  },

  saveButton: {
    width: 180,
    height: 70,

    backgroundColor: '#ea8458',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  saveButtonText: {
    fontSize: 24,
    color: '#000',
  },
});

export default styles;