import { StyleSheet, Platform } from 'react-native'
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: -3,
  },
  viewLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 10
  },
  viewSorting: {
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonFilter: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  touchFilter: {
    borderRadius: 10,
    marginVertical: responsiveHeight(1.66)
  },
  textItemFilter: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
  },
  textResult: {
    marginLeft: responsiveWidth(5.33),
    textTransform: 'capitalize'
  },
  viewFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textFilters: {
    marginRight: responsiveWidth(2.33)
  },
  iconFilters: {
    marginRight: responsiveWidth(5.33)
  },
  viewRowProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(2.33)
  },
  viewProduct: {
    width: responsiveWidth(40),
    height: responsiveHeight(30),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: Platform.OS === 'ios' ? 0.5 : 1,
      height: Platform.OS === 'ios' ? 0.5 : 1,
    },
    shadowOpacity: Platform.OS === 'ios' ? 1 : 3.22,
    shadowRadius: Platform.OS === 'ios' ? 0.8 : 1.22,

    elevation: 1,
    borderRadius: 10,
    marginTop: responsiveHeight(2.33),
    marginHorizontal: responsiveWidth(5.33)
  },
  imageProduct: {
    width: responsiveWidth(40),
    height: responsiveHeight(15),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  viewTextTitle: {
    marginLeft: responsiveWidth(2.33),
    marginRight: responsiveWidth(1.3)
  },
  textName: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold'
  },
  viewDesc: {
    marginLeft: responsiveWidth(2.33),
    marginRight: responsiveWidth(1.3),
    marginTop: responsiveHeight(1.3),
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textPrice: {
    color: '#EE532F',
    fontWeight: '700',
    fontSize: responsiveFontSize(1.8)
  },
  textTime: {
    fontSize: responsiveFontSize(1.6),
    color: '#8A8D90',
    marginRight: responsiveWidth(1.6),
  },
  viewCart: {
    width: 40,
    height: 40,
    backgroundColor: '#53AD15',
    borderRadius: 20,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-2.33),
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 3.22,
    shadowRadius: Platform.OS === 'ios' ? 3.3 : 6.22,
  },
  viewFooter: {
    marginTop: responsiveHeight(1.33)
  },
  buttonShowMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53AD15',
    width: responsiveWidth(100),
    height: responsiveHeight(5.33)
  },

  textShowMore: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2.4)
  },
  viewAds: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(2.33)
  },
  imgBackgroundAdds: {
    width: 320,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconAds: {
    fontSize: responsiveFontSize(2.2),
    marginVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(2.2),
  },
  textAds: {
    fontSize: responsiveFontSize(2.2),
    marginVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(2.2),
    fontWeight: 'bold',
    color: '#6CC6DC'
  },
  flex: {
    flexDirection: 'row',
  },
  textSize: {
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  textSizeValue: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EE532F',
    marginLeft: 5,
  },
})

export default styles