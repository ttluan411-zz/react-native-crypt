import React, { PureComponent } from 'react';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';
import { StatusBar, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import HomeScreen from './screens/HomeScreen';


const Tabs = TabNavigator(
    {
        Home: {
            screen: HomeScreen
        }
    },
    {
        // TODO: remove this :)
        // initialRouteName: 'Wallet',
        lazy: false,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        // TODO: check for it
        animationEnabled: true,
        // navigationOptions: {
        //   headerVisible: false,
        // },
        // tabBarComponent: TabBarBottomConnected,
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
        //   activeTintColor: colors.primary,
        //   inactiveTintColor: colors.lightGrey,
        //   pressColor: colors.primary,
            style: {
                height: 50,
            }
        },
      }
)

const AppMainNav = StackNavigator(
    {
      Home: {
        screen: Tabs,
      },
    }
)

class AppNavigator extends Component {
    render(){
        const nav= addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
        });
        return <AppMainNav navigation={nav} />;
    }
}
export default connect(state => ({
    nav: state.nav,
    user: state.user
}))(AppNavigator);

export const router = AppMainNav.router;