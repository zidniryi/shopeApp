import { StyleSheet } from 'react-native'
import { responsiveFontSize, } from 'react-native-responsive-dimensions'

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF'
    },
    textFace: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(8),
    }
})

export default styles