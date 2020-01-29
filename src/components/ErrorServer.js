import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/stylesError'

const ErrorServer = () => (
    <View style={styles.viewContainer}>
        <Image source={require('../assets/error.png')} style={styles.imgeError} resizeMode='contain' />
        <Text style={styles.textError}>An error occurred on our server</Text>
    </View>
)

export default ErrorServer
