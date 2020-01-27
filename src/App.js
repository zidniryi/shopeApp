import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, TouchableHighlight, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles/styleProduct'
import LinearGradient from 'react-native-linear-gradient'
import Axios from 'axios'
import Modal from 'react-native-modal'
import ListProducts from './components/ListProducts'
import ButtonFilters from './components/ButtonFilters'
export default class App extends Component {
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

  // componentDidUpdate(prevProps, prevState) {
  //   // only update chart if the data has changed
  //   if (prevProps.data !== this.state.filterBy) {
  //     this.loadFistData()
  //   }
  // }

  filterLogic() {
    if (this.state.filterBy === 'price') {
      const urlByPrice = `http://192.168.43.166:3000/api/products?_sort=price&_page=${this.page}&_limit=20`
      return urlByPrice
    }
    else {
      const urlDefault = `http://192.168.43.166:3000/api/products?_page=${this.page}&_limit=20`
      return urlDefault
    }
  }

  loadFistData = () => {
    this.page = this.page + 1
    Axios.get(this.filterLogic())
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
      Axios.get(this.filterLogic())
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
    return (
      <View style={styles.viewFooter}>
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
    await this.toggleModal()
    await this.setState({ filterBy: filtersType })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.viewLoader}>
          <ActivityIndicator size="large" color='#53AD15' />
        </View>
      )
    }
    return (
      <View style={styles.viewContainer}>
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
            <TouchableOpacity onPress={this.combineMethod} activeOpacity={0.8}>
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
            <ButtonFilters onPress={() => this.combineMethod('price')}>
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


        <FlatList
          numColumns={2}
          style={{ flex: 1 }}
          keyExtractor={(item, index) => index}
          data={this.state.dataProducts}
          renderItem={({ item, index }) =>
            <ListProducts item={item} />
          }
          ListFooterComponent={this.renderFooter}
        />

      </View>
    )
  }
}
