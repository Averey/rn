import React, { Component } from "react";
import {View, Text, Button} from 'react-native';

class Modal extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>modal</Text>
        <Button 
          onPress={() => this.props.navigation.goBack()}
          title="Dimiss"
        />
      </View>
    );
  }
}

export default Modal;
