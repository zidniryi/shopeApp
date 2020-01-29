import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgeError: {
        width: 300,
        height: 300
    },
    textError: {
        marginTop: responsiveHeight(2.2),
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold'
    },
    buttonReload: {
        width: responsiveWidth(80),
        height: responsiveHeight(8),
        backgroundColor: '#E24C4B',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(5.33),
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold'
    }
})

export default styles