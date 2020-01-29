import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Products from './Products'
import Profile from './Profile'

export default createAppContainer(createBottomTabNavigator(
    {
        Products: { screen: Products },
        Profile: { screen: Profile },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                if (routeName === 'Products') {
                    iconName = 'ios-cart'
                } else if (routeName === 'Profile') {
                    iconName = 'ios-person'
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={25} color={tintColor} />
            },
        }),
        tabBarOptions: {
            activeTintColor: '#53AD15',
            inactiveTintColor: '#d3d3d3',
        },
    }
))
