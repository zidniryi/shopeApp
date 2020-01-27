import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/styleProduct'
import dollarFormatter from '../libs/dollarFormatter'
import compareDate from '../libs/compareDate'
import Icon from 'react-native-vector-icons/FontAwesome'


const ListProducts = (props) => (
  <View style={styles.viewRowProduct}>
    <View style={styles.viewProduct}>
      <Image source={{ uri: 'https://i.picsum.photos/id/6/320/200.jpg' }}
        style={styles.imageProduct}
        resizeMode='cover'
      />
      <View style={styles.viewTextTitle}>
        <Text style={styles.textName}>{props.item.face}</Text>
      </View>
      <View style={styles.viewDesc}>
        <Text style={styles.textPrice}>$ {dollarFormatter(props.item.price)}</Text>
        <Text style={styles.textTime}>{compareDate(props.item.date)} days ago</Text>
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
)

export default ListProducts
