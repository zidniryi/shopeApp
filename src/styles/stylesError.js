import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'

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
    }
})

export default styles