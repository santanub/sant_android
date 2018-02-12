import React, { Component } from "react";
import HomeScreenRouter from "./src/HomeScreen/index.js";
import store from "./src/stores/index.js";
import { Provider } from 'react-redux';

export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Provider store={store}>
        <HomeScreenRouter />
      </Provider>);
  }
}
