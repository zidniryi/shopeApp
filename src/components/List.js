import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from '../styles/styleProduct'
import ListProducts from './ListProducts'
import Adds from './Adds'
import api from '../services/api'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataProducts: [],
      isLoading: true,
      isFetching: false,
      isModalVisible: false,
      filterBy: ''
    }
    // Default page in array is 0
    this.page = 0
  }

  componentDidMount() {
    // Increased every data loaded
    this.loadFistData()
  }

  loadFistData = () => {
    this.page = this.page + 1
    api.get(`products?_page=${this.page}&_limit=20`)
      .then((response) => {
        console.log(response)
        this.setState({ dataProducts: [...this.state.dataProducts, ...response.data], isLoading: false })
      })
      .catch(err => {
        console.log(err)
      })
  }
  /**
   * @method
   * This method is for loading data from serverr
   */
  getMoreData = () => {
    this.page = this.page + 1
    this.setState({ isFetching: true }, () => {
      api.get(`products?_page=${this.page}&_limit=20`)
        .then((response) => {
          this.setState({ dataProducts: [...this.state.dataProducts, ...response.data], isFetching: false })
        })
        .catch((error) => {
          console.error(error)
        })
    })
  }

  /**
   * This is @method to render JSX 
   * In footer FlatList Component
   */
  renderFooter = () => {
    const randomPicture = Math.floor(1 + Math.random() * 20)
    return (
      <View style={styles.viewFooter}>
        <Adds randomPicture={randomPicture} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonShowMore}
          onPress={this.getMoreData}
        >
          <Text style={styles.textShowMore}>Show More</Text>
          {
            (this.state.isFetching)
              ?
              <ActivityIndicator color="#fff" style={{ marginLeft: 6 }} />
              :
              null
          }
        </TouchableOpacity>
      </View>
    )
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  combineMethod = async (filtersType) => {
    // await this.toggleModal()
    await this.setState({ filterBy: filtersType })
  }

  render() {
    console.log(this.state.filterBy)
    if (this.state.isLoading) {
      return (
        <View style={styles.viewLoader}>
          <ActivityIndicator size="large" color='#53AD15' />
        </View>
      )
    }
    return (
      <View style={styles.viewContainer}>
        <FlatList
          numColumns={2}
          style={{ flex: 1 }}
          keyExtractor={(item, index) => index}
          data={this.state.dataProducts}
          renderItem={({ item, index }) =>
            <ListProducts item={item} index={index} />
          }
          ListFooterComponent={this.renderFooter}
          extraData={this.state.filterBy}
          updateCellsBatchingPeriod={4000}
        />

      </View>
    )
  }
}
