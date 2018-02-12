import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Profile from "../ProfileScreen/index.js";
import Trip from "../Trip/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: Profile },
    Trip: {screen: Trip}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
