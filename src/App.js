import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, TouchableHighlight, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles/styleProduct'
import LinearGradient from 'react-native-linear-gradient'
import Axios from 'axios'
import Modal from 'react-native-modal'
import ListProducts from './components/ListProducts'
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
    console.log(this.state.filterBy)
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
          isVisible={false}
          animationIn="slideInLeft"
          animationOut="slideOutRight">
          <View style={styles.viewModal}>
            <Text>
              Filter By
            </Text>
            <TouchableHighlight onPress={() => this.combineMethod('price')} style={styles.touchFilter}>
              <View style={[styles.buttonFilter, { borderColor: '#3498db' }]}>
                <Text style={[styles.textItemFilter, { color: '#3498db' }]}>price Z-A</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.toggleModal} style={styles.touchFilter}>
              <View style={[styles.buttonFilter, { borderColor: '#2ecc71' }]}>
                <Text style={[styles.textItemFilter, { color: '#2ecc71' }]}>Price Z-A</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.toggleModal} style={styles.touchFilter}>
              <View style={[styles.buttonFilter, { borderColor: '#e74c3c' }]}>
                <Text style={[styles.textItemFilter, { color: '#e74c3c' }]}>ID Z-A</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Modal>
        {
          (this.state.isLoading)
            ?
            (<ActivityIndicator size="large" color='#53AD15' />)
            :
            (
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
            )
        }
      </View>
    )
  }
}
