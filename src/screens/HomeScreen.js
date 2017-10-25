import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { getAllCoinMarket } from '../actions/entities';

class HomeScreen extends Component {
    state = {  }

    componentDidMount() {

    }
    render() {
        return (
        <View>
            <Text>HomeScreen</Text>
        </View>
        );
    }
}

export default connect(undefined,{ getAllCoinMarket })(HomeScreen);