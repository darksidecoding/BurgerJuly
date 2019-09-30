import { createStackNavigator } from 'react-navigation'
import Menu from './Menu'
import MenuMore from './MenuMore'
import MenuMoreDetails from './MenuMoreDetails'
import {
    MENU_HOME,
    MENU_MORE,
    MENU_DETAILS
} from '../routes'

export default createStackNavigator(
    {
        [MENU_HOME]: Menu,
        [MENU_MORE]: MenuMore,
        [MENU_DETAILS]: MenuMoreDetails
    },
    {
        headerMode: 'none'
    }
)