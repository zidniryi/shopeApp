import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#53AD15',
    height: responsiveHeight(28)
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  body: {
    marginTop: responsiveHeight(8),
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: responsiveFontSize(2),
    color: '#696969',
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  textSite: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2)
  }
})

export default styles