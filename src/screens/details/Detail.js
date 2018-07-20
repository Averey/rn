import React, { Component } from "react";
import {View, Text, Button} from 'react-native';

class Detail extends Component {
  static navigationOptions = {
    title: 'Detail'
  }

  render() {
    const { navigation } = this.props,
      itemId = navigation.getParam('itemId', 'no-id'),
      otherParam = navigation.getParam('otherParam', 'default value');

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Detail</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button 
          title="go to detail.. again"
          onPress={() => this.props.navigation.push('Detail', {
            itemId: Math.floor(Math.random() * 100),
          })}
        />
        <Button 
          title="go to home"
          onPress={() => this.props.navigation.push('Home')}
        />
        <Button 
          title="go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default Detail;
