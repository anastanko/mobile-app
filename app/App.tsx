import React from 'react';
import {StyleSheet, Alert, Button} from 'react-native';
import Login from './views/Login';
import Home from './views/Home';
import Loading from './views/Loading';
import AsyncStorage from '@react-native-community/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

export default class App extends React.Component {

  state = {
    user: null,
    isConnected: null
  };

 async componentDidMount() {
    const isConnected = await AsyncStorage.getItem('@connected') === "true";
    this.setState({isConnected});
  }

  crashApp = () => {

       crashlytics().crash();
 };
  loginUser = () => {
    AsyncStorage.setItem('@connected',"true");
    this.setState({ isConnected: true });
  };

  logoutUser = () => {
    AsyncStorage.setItem('@connected',"false");
    this.setState({ isConnected: false });
  };

  render() {
    if (this.state.isConnected === null){
      return <Loading/>;

    }
    return (
      <>
        {!this.state.isConnected && <Login login={this.loginUser}/>}
        {this.state.isConnected && <Home logout={this.logoutUser}/>}
          <Button title="Crash App" onPress = {this.crashApp} />
      </>
    );
  }
};

const styles = StyleSheet.create({
  view: {

  },
});
