/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, Button, Alert, NavigatorIOS, Image, DeviceInfo} from 'react-native';
import styles from '../../css/home';

class Blick extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      isShowText : true
    };
    console.log(DeviceInfo)
    // setInterval(() => {
    //   this.setState(previousState => {
    //     return {
    //       isShowText: !previousState.isShowText
    //     }
    //   })
    // }, 1000)
  }

  render(){
    if(!this.state.isShowText){
      return null;
    }

    return (
      <Text style={styles.text}>{this.props.text}</Text>
    )
  }
}

export default class App extends Component {
  _onPressButton() {
    Alert.alert('test')
  }

  render() {
    return (
      <View style={styles.container}>
        <Blick text='闪'/>
        <View>
          <Button
            onPress={this._onPressButton}
            title="点我！"
          />
        </View>
        <View>
          <Image source={require('../../images/favicon.png')} style={{width: 40, height: 40}} />
        </View>
      </View>
    );
  }
}
