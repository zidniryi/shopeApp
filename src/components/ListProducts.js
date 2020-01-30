import React, { PureComponent } from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/styleProduct'
import dollarFormatter from '../libs/dollarFormatter'
import compareDate from '../libs/compareDate'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'


class ListProducts extends PureComponent {

  /**
   * This is method that contain :
   * for convert ISO date into common date 
   * And logic for /days ago/ & /common date/
   */
  renderDate() {
    const daysOfWeek = ['Mond', 'Tues', 'Wednes', 'Thurs', 'Frid', 'Sat', 'Sund']
    const date = new Date(this.props.item.date)
    const forrmattedDate = daysOfWeek[date.getDay()] + ', ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    if (compareDate(this.props.item.date) >= 7) {
      return <Text style={styles.textTime}>{forrmattedDate}</Text>
    }
    return <Text style={styles.textTime}>{compareDate(this.props.item.date)} days ago</Text>
  }
  render() {
    return (
      <View style={styles.viewRowProduct}>
        <View style={styles.viewProduct}>
          <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
            style={styles.imageProduct}
            resizeMode='cover'
          />
          <View style={styles.viewTextTitle}>
            <Text style={styles.textName}>{this.props.item.face}</Text>
          </View>
          <View style={styles.viewDesc}>
            <Text style={styles.textPrice}>$ {dollarFormatter(this.props.item.price)}</Text>
            {this.renderDate()}
          </View>
          <View style={styles.viewCart}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailProduct', { data: this.props.item })}>
              <Icon
                name="shopping-cart"
                size={22}
                color='#FFFFFF'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default withNavigation(ListProducts)