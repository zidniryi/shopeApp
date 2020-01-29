import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Profile from '../screens/Profile'
import Products from '../screens/Products'

const AppNavigator = createStackNavigator({
    Products: { screen: Products },
    Profile: { screen: Profile },
},
    {
        initialRouteName: 'Products'
    })

export default createAppContainer(AppNavigator)

