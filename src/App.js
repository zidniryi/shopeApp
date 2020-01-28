import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import List from './List'
import ListSort from './ListSort'
import ButtonFilters from './components/ButtonFilters'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles/styleProduct'





export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSort: false
    }
  }

  render() {
    console.log(this.state.isSort)
    if (!this.state.isSort) {
      return (
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => this.setState({ isSort: !this.state.isSort })}>
            <Text>Helo</Text>
          </TouchableOpacity>
          <List />
        </View>
      )

    }
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={['#FFFFFF', '#F4F4F4', '#F4F4F4']} style={styles.viewSorting}>
          <View>
            <Text style={styles.textResult}>
              500 products found
            </Text>
          </View>
          <View style={styles.viewFilter}>
            <Text style={styles.textFilters}>
              Filters
            </Text>
            <TouchableOpacity onPress={() => this.setState({ filterBy: 'price' })} activeOpacity={0.8}>
              <Icon
                name="filter"
                size={22}
                color='#53AD15'
                style={styles.iconFilters}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <Modal
          isVisible={this.state.isModalVisible}
          animationIn="slideInLeft"
          animationOut="slideOutRight">
          <View style={styles.viewModal}>
            <Text>
              Filter By
            </Text>
            <ButtonFilters onPress={() => this.setState({ filterBy: 'price' })}>
              By Price
            </ButtonFilters>
            <ButtonFilters onPress={() => this.combineMethod('price')}>
              By Date
            </ButtonFilters>
            <ButtonFilters onPress={() => this.combineMethod('price')}>
              By ID
            </ButtonFilters>
          </View>
        </Modal>


        <ListSort />
      </View>
    )
  }
}
