import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DetailProduct from '../screens/DetailProduct'
import HomeApp from '../screens/HomeApp'
import Profile from '../screens/Profile'

const AppNavigator = createStackNavigator({
  HomeApp: {
    screen: HomeApp,
    navigationOptions: {
      headerShown: false
    }
  },
  Profile: { screen: Profile },
  DetailProduct: { screen: DetailProduct }
},
  {
    initialRouteName: 'HomeApp'
  })

export default createAppContainer(AppNavigator)

