import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from '../styles/styleProduct'
import ListProducts from './ListProducts'
import Adds from './Adds'
import api from '../services/api'
import ErrorServer from './ErrorServer'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataProducts: [],
      isLoading: true,
      isFetching: false,
      isModalVisible: false,
      filterBy: '',
      isError: false
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
        this.setState({ dataProducts: [...this.state.dataProducts, ...response.data], isLoading: false })
      })
      .catch(err => {
        this.setState({ isError: true, isLoading: false })
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
          this.setState({ isError: true, isFetching: false })
          console.log(error)

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
          {
            (this.state.isFetching)
              ?
              <Text style={styles.textShowMore}>Loading ...</Text>
              :
              <Text style={styles.textShowMore}>Show More</Text>

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
    else if (this.state.isError) {
      return <ErrorServer />
    }
    return (
      <View style={styles.viewContainer}>
        <FlatList
          numColumns={2}
          style={{ flex: 1 }}
          keyExtractor={(item, index) => index}
          data={this.state.dataProducts}
          renderItem={({ item, index }) =>
            this.state.dataProducts.length == 0 ? <Text>End of catalogue </Text> : <ListProducts item={item} index={index} />
          }
          ListFooterComponent={this.renderFooter}
          extraData={this.state.filterBy}
          updateCellsBatchingPeriod={4000}
        />

      </View>
    )
  }
}
