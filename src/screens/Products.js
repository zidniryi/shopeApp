import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles/styleProduct'
import ButtonFilters from '../components/ButtonFilters'
import List from '../components/List'
import ListSort from '../components/ListSort'
import { connect } from 'react-redux'
import { sortActions } from '../store/actions'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSort: false,
      isModalVisible: false
    }
  }

  _setsState = async (valRedux) => {
    await this.props.sortActions(valRedux)
    await this._setModal()
  }
  _setModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }


  render() {
    console.log(this.props)
    if (!this.props.filterBy) {
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
              <TouchableOpacity onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })} activeOpacity={0.8}>
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
              <ButtonFilters onPress={() => this._setsState('price')}>
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
            <TouchableOpacity onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })} activeOpacity={0.8}>
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
            <ButtonFilters onPress={() => this._setsState('price')}>
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
const mapStateToProps = (state) => ({
  filterBy: state.filterBy
})


export default connect(mapStateToProps, { sortActions })(Products)