import React, { Component } from "react";
import {View, Text, Button} from 'react-native';

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Setting!</Text>
        <Button 
          title="go to detail"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
      </View>
    );
  }
}

export default Setting;
