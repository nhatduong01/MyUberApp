
import React from 'react';
import { StatusBar } from 'react-native';


import Homescreen from './src/screens/HomeScreens';
import DestinationSearch from './src/screens/DetinationSearch/destinationSearch';
import SearchResult from './src/screens/OrderUber/chooseUber';
const App: () => React$Node = () => {

  return (
    <>
    <SearchResult/>
    </>
  );
};


export default App;
