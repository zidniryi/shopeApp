import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles/styleProduct'
import ButtonFilters from '../components/ButtonFilters'
import List from '../components/List'
import { connect } from 'react-redux'
import { sortActions } from '../store/actions'
import ListSortPrice from '../components/ListSortPrice'
import ListSortDate from '../components/ListSortDate'
import ListSortID from '../components/ListSortID'

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

  logicMethodList() {
    if (this.props.filterBy === 'price') {
      return <ListSortPrice />
    }
    if (this.props.filterBy === 'date') {
      return <ListSortDate />
    }
    else if (this.props.filterBy === 'id') {
      return <ListSortID />
    } else {
      return <List />
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={['#FFFFFF', '#F4F4F4', '#F4F4F4']} style={styles.viewSorting}>
          <View>
            <Text style={styles.textResult}>
              Sorted by {!this.props.filterBy ? 'Random' : this.props.filterBy}
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
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
        >
          <View style={styles.viewModal}>
            <Text>
              Filter By
            </Text>
            <ButtonFilters onPress={() => this._setsState('price')}>
              By Price
            </ButtonFilters>
            <ButtonFilters onPress={() => this._setsState('date')}>
              By Date
            </ButtonFilters>
            <ButtonFilters onPress={() => this._setsState('id')}>
              By ID
            </ButtonFilters>
            <ButtonFilters onPress={() => this._setsState('')}>
              Random
            </ButtonFilters>
          </View>
        </Modal>
        {this.logicMethodList()}
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  filterBy: state.filterBy
})


export default connect(mapStateToProps, { sortActions })(Products)