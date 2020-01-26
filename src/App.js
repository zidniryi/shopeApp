import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles/styleProduct'
import LinearGradient from 'react-native-linear-gradient'
import Axios from 'axios'
import compareDate from './libs/compareDate'
import dollarFormatter from './libs/dollarFormatter'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataProducts: [],
      isFetching: false,
    }
    // Default page in array is 0
    this.page = 0
  }

  componentDidMount() {
    // Increased every data loaded
    this.page = this.page + 1
    Axios.get(`http://192.168.43.166:3000/api/products?_page=${this.page}&_limit=20`)
      .then((response) => {
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
      Axios.get(`http://192.168.43.166:3000/api/products?_page=${this.page}&_limit=20`)
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

  render() {
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
            <TouchableHighlight onPress={this.toggleModal}>
              <Icon
                name="filter"
                size={22}
                color='#53AD15'
                style={styles.iconFilters}
              />
            </TouchableHighlight>
          </View>
        </LinearGradient>
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
                  <View style={styles.viewRowProduct}>
                    <View style={styles.viewProduct}>
                      <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                        style={styles.imageProduct}
                        resizeMode='cover'
                      />
                      <View style={styles.viewTextTitle}>
                        <Text style={styles.textName}>{item.face}</Text>
                      </View>
                      <View style={styles.viewDesc}>
                        <Text style={styles.textPrice}>$ {dollarFormatter(item.price)}</Text>
                        <Text style={styles.textTime}>{compareDate(item.date)} days ago</Text>
                      </View>
                      <View style={styles.viewCart}>
                        <Icon
                          name="shopping-cart"
                          size={22}
                          color='#FFFFFF'
                        />
                      </View>
                    </View>
                  </View>
                }
                ListFooterComponent={this.renderFooter}
              />
            )
        }
      </View>
    )
  }
}
