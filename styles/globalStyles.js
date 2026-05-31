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

  hamburger: {
    display: isMobile ? 'flex' : 'none',
    padding: 10,
  },

  hamburgerText: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
  },

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
    color: '#343368',
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
    color: '#fff',
    textAlign: 'center',
  },
// Holiday name styles
  holidayName: {
    fontSize: isMobile ? 28 : 30,
    marginTop: 15,
    color: '#000',
    textAlign: 'center',
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
});

export default styles;