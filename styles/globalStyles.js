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

  headerSafeArea: {
    backgroundColor: '#ff6600',
    zIndex: 999,
  },

  logo: {
    backgroundColor: '#ff6600',
    paddingHorizontal: 20,
    paddingTop: isMobile ? 35 : 20,
    paddingBottom: 20,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: isMobile ? 23 : 33,
    fontWeight: 'bold',
    color: '#fff',
  },

  hamburger: {
    padding: 10,
  },

  hamburgerText: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
  },

  nav: {
    display: 'none',
    flexDirection: 'column',
    gap: 18,
    marginTop: 20,
  },

  navOpen: {
    display: 'flex',
  },

  navText: {
    fontSize: isMobile ? 20 : 22,
    fontWeight: 'bold',
    color: '#fff',
  },

  activeNavText: {
    color: '#343368',
  },
  // landscape
  logoLandscape: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  titleLandscape: {
    fontSize: 26,
    flex: 1,
  },

  navLandscape: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 18,
  },

  navTextLandscape: {
    fontSize: 22,
  },

  infoBlockLandscape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    paddingVertical: 8,
  },
  infoYearRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoTextLandscape: {
    marginTop: 0,
  },
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  infoBlock: {
    padding: 20,
    marginTop: 10,
  },

  infoTitle: {
    fontSize: isMobile ? 22 : 22,
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

  // Countdown styles
  countdownWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },

  countdownBox: {
    width: '85%',
    maxWidth: 500,
    minHeight: 0,
    backgroundColor: '#ff6600',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },

  countdownText: {
    fontSize: isMobile ? 45 : 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  // Holiday name styles
  holidayName: {
    fontSize: isMobile ? 28 : 30,
    marginTop: 15,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  containerAbout: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },

  containerSettings: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  containerSettingsContent: {
    paddingTop: 80,
    alignItems: 'center',
    gap: 25,
    paddingBottom: 100,
  },
  // Settings  styles

  titleSettings: {
    fontSize: isMobile ? 28 : 36,
    fontWeight: 'bold',
    color: '#fff',
  },

  settingBox: {
    width: '85%',
    maxWidth: 500,
    minHeight: 70,
    backgroundColor: '#ea8458',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  settingLabel: {
    fontSize: isMobile ? 24 : 28,
    color: '#fff',
  },

  settingValue: {
    fontSize: isMobile ? 24 : 28,
    color: '#fff',
  },

  schoolInput: {
    fontSize: isMobile ? 20 : 24,
    color: '#000',
    backgroundColor: '#f4b393',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    minWidth: 150,
    textAlign: 'right',
  },
  // Save button styles
  saveButton: {
    width: '85%',
    maxWidth: 500,
    height: 70,
    backgroundColor: '#ea8458',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  saveButtonText: {
    fontSize: 24,
    color: '#fff',
  },

  savedMessageBox: {
    backgroundColor: '#ded8da',
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 15,
    marginTop: 5,
  },

  savedMessageText: {
    fontSize: 18,
    color: '#000',
  },
  // Dropdown styles
  dropdown: {
    width: '82%',
    maxWidth: 500,
    maxHeight: 150,
    backgroundColor: '#ded8da',
    borderRadius: 10,
    marginTop: -18,
    marginBottom: 12,
    overflow: 'hidden',
  },

  dropdownItem: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },

  dropdownText: {
    fontSize: 20,
    color: '#777',
  },

  activeDropdownText: {
    color: '#49a010',
    fontWeight: 'bold',
  },

  // Map styles
  map: {
  width: '85%',
  height: 180,
  borderRadius: 20,
  marginTop: 15,
  marginBottom: 15,
  alignSelf: 'center',
},
  // Overzicht
  overzichtBox: {
    backgroundColor: '#ff6f00',
    margin: 20,
    marginTop: 80,
    borderRadius: 8,
    overflow: 'hidden',
  },

  overzichtRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },

  overzichtIcon: {
    width: 42,
  },

  overzichtNaam: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },

  overzichtRechts: {
    alignItems: 'center',
    flex: 1,
  },

  overzichtDagen: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  overzichtDatum: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },

  // About styles
  containerAbout: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 30,
  },

  aboutTitle: {
    fontSize: isMobile ? 32 : 34,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: isMobile ? 48 : 58,
  },
  aboutDescription: {
    fontSize: isMobile ? 18 : 22,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  aboutImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;