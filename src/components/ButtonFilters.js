import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import styles from '../styles/styleProduct'

const ButtonFilters = ({ onPress, children }) => (
  <TouchableHighlight onPress={onPress} style={styles.touchFilter}>
    <View style={[styles.buttonFilter, { borderColor: '#2ecc71' }]}>
      <Text style={[styles.textItemFilter, { color: '#2ecc71' }]}> {children}</Text>
    </View>
  </TouchableHighlight>
)

export default ButtonFilters
