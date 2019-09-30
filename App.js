//Imports
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import One from './src/screen1'
import Two from './src/screen2'
import Tree from './src/screen3'
import Four from './src/screen4'

export default createBottomTabNavigator(
    {
        Menu: One,
        Order: Two,
        Account: Tree,
        Setting: Four
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                if(routeName === 'Menu'){
                    iconName = 'md-shirt'
                }
                else if (routeName === 'Order'){
                    iconName = 'md-body'
                }
                else{
                    iconName = 'md-happy'
                }
                return <Icon name = {iconName} size = {25} color = {tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: '#2EECE6',
            inactiveTintColor: 'gray'
        }
    }
)

