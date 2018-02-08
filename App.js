/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import HomeScreen from "./src/HomeScreen/index.js";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  
  render() {
    return <HomeScreen />;
  }
}
