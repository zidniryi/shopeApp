import React, { Component } from 'react'
import AppNavigator from './routes'
console.disableYellowBox = true

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}
