import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles/styleProduct'




const Adds = (props) => (
  <View style={styles.viewAds}>
    <ImageBackground source={{ uri: `https://picsum.photos/320/200?image=${props.randomPicture}` }}
      style={styles.imgBackgroundAdds}
      resizeMode={'contain'} >
      <Icon
        name="info-circle"
        size={14}
        color='#6CC6DC'
        style={styles.iconAds}
      />
      <Text style={styles.textAds}>Ads</Text>
    </ImageBackground>
  </View>
)

export default Adds
