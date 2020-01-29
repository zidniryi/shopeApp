import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Profile from '../screens/Profile'
import Products from '../screens/Products'
import DetailProduct from '../screens/DetailProduct'

const AppNavigator = createStackNavigator({
  Products: { screen: Products },
  Profile: { screen: Profile },
  DetailProduct: { screen: DetailProduct }
},
{
  initialRouteName: 'Products'
})

export default createAppContainer(AppNavigator)

