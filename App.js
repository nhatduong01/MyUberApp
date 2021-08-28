
import React from 'react';
import { StatusBar } from 'react-native';


import Homescreen from './src/screens/HomeScreens';


const App: () => Node = () => {

  return (
    <>
    <StatusBar barStyle = "dark-content"/>
    <Homescreen/>
    </>
  );
};


export default App;
