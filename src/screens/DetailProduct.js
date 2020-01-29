import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/stylesDetail'

export default class DetailProduct extends Component {
  // Generate Random Color
  randomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  render() {
    const detailProduct = this.props.navigation.state.params.data
    return (
      <View style={[styles.viewContainer]}>
        <Text style={[styles.textFace, { color: this.randomColor() }]}> {detailProduct.face} </Text>
      </View>
    )
  }
}

