import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  logo: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ff6600',
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  infoYear: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  },

  infoGps: {
    fontSize: 18,
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
    marginTop: 40,
  },

  countdownBox: {
    width: '85%',
    maxWidth: 500,
    height: 220,
    backgroundColor: '#ff6600',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  countdownText: {
    fontSize: 32,
    fontWeight: '500',
    color: '#000',
  },
  holidayName: {
    fontSize: 20,
    marginTop: 10,
    color: '#000',
  },

});

export default styles;