import React, { Component } from "react";
import {View, Text, Button} from 'react-native';

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {}
    return {
      title: 'Home',
      headerLeft: (
        <Button 
          onPress={() => navigation.navigate('MyModal')}
          title="modal"
        />
      ),
      headerRight: (
      <View>
        <Button
          onPress={() => alert('This is a button!')}
          title="info"
        />
        <Button
          onPress={navigation.getParam("increaseCount")}
          title="+1"
        />
      </View>
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '100'
      }
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount})
  }

  state = {
    count: 0,
  }

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button 
          title="go to detail"
          onPress={() => {
            this.props.navigation.navigate('Detail', {
              itemId: 86,
              otherParam: 'anything you want here'
            })
          }}
        />
      </View>
    );
  }
}

export default Home;
