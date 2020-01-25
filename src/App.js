import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles/styleProduct'
import LinearGradient from 'react-native-linear-gradient'

export default class App extends Component {
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

            <Icon
              name="filter"
              size={22}
              color='#53AD15'
              style={styles.iconFilters}
            />
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={styles.viewRowProduct}>
            <View style={styles.viewProduct}>
              <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                style={styles.imageProduct}
                resizeMode='cover'
              />
              <View style={styles.viewTextTitle}>
                <Text style={styles.textName}>Lorem Ipsum Dolor Amsss</Text>
              </View>
              <View style={styles.viewDesc}>
                <Text style={styles.textPrice}>$3.51</Text>
                <Text style={styles.textTime}>3 days ago</Text>
              </View>
              <View style={styles.viewCart}>
                <Icon
                  name="shopping-cart"
                  size={22}
                  color='#FFFFFF'
                />
              </View>
            </View>

            <View style={styles.viewProduct}>
              <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                style={styles.imageProduct}
                resizeMode='cover'
              />
              <View style={styles.viewTextTitle}>
                <Text style={styles.textName}>Lorem Ipsum Dolor Amsss</Text>
              </View>
              <View style={styles.viewDesc}>
                <Text style={styles.textPrice}>$3.51</Text>
                <Text style={styles.textTime}>3 days ago</Text>
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
          <View style={styles.viewRowProduct}>
            <View style={styles.viewProduct}>
              <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                style={styles.imageProduct}
                resizeMode='cover'
              />
              <View style={styles.viewTextTitle}>
                <Text style={styles.textName}>Lorem Ipsum Dolor Amsss</Text>
              </View>
              <View style={styles.viewDesc}>
                <Text style={styles.textPrice}>$3.51</Text>
                <Text style={styles.textTime}>3 days ago</Text>
              </View>
              <View style={styles.viewCart}>
                <Icon
                  name="shopping-cart"
                  size={22}
                  color='#FFFFFF'
                />
              </View>
            </View>

            <View style={styles.viewProduct}>
              <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                style={styles.imageProduct}
                resizeMode='cover'
              />
              <View style={styles.viewTextTitle}>
                <Text style={styles.textName}>Lorem Ipsum Dolor Amsss</Text>
              </View>
              <View style={styles.viewDesc}>
                <Text style={styles.textPrice}>$3.51</Text>
                <Text style={styles.textTime}>3 days ago</Text>
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
          <View style={styles.viewRowProduct}>
            <View style={styles.viewProduct}>
              <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                style={styles.imageProduct}
                resizeMode='cover'
              />
              <View style={styles.viewTextTitle}>
                <Text style={styles.textName}>Lorem Ipsum Dolor Amsss</Text>
              </View>
              <View style={styles.viewDesc}>
                <Text style={styles.textPrice}>$3.51</Text>
                <Text style={styles.textTime}>3 days ago</Text>
              </View>
              <View style={styles.viewCart}>
                <Icon
                  name="shopping-cart"
                  size={22}
                  color='#FFFFFF'
                />
              </View>
            </View>

            <View style={styles.viewProduct}>
              <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                style={styles.imageProduct}
                resizeMode='cover'
              />
              <View style={styles.viewTextTitle}>
                <Text style={styles.textName}>Lorem Ipsum Dolor Amsss</Text>
              </View>
              <View style={styles.viewDesc}>
                <Text style={styles.textPrice}>$3.51</Text>
                <Text style={styles.textTime}>3 days ago</Text>
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
          <View style={styles.viewRowProduct}>
            <View style={styles.viewProduct}>
              <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                style={styles.imageProduct}
                resizeMode='cover'
              />
              <View style={styles.viewTextTitle}>
                <Text style={styles.textName}>Lorem Ipsum Dolor Amsss</Text>
              </View>
              <View style={styles.viewDesc}>
                <Text style={styles.textPrice}>$3.51</Text>
                <Text style={styles.textTime}>3 days ago</Text>
              </View>
              <View style={styles.viewCart}>
                <Icon
                  name="shopping-cart"
                  size={22}
                  color='#FFFFFF'
                />
              </View>
            </View>

            <View style={styles.viewProduct}>
              <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
                style={styles.imageProduct}
                resizeMode='cover'
              />
              <View style={styles.viewTextTitle}>
                <Text style={styles.textName}>Lorem Ipsum Dolor Amsss</Text>
              </View>
              <View style={styles.viewDesc}>
                <Text style={styles.textPrice}>$3.51</Text>
                <Text style={styles.textTime}>3 days ago</Text>
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
        </ScrollView>
      </View>
    )
  }
}

