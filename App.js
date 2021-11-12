/*
I am using libraries that have licenses that I don't know how to deal with yet.
Here are the links to the github pages for these libraries:

https://github.com/react-native-picker/picker
https://github.com/react-native-async-storage/async-storage
https://github.com/callstack/react-native-paper or https://callstack.github.io/react-native-paper/index.html
https://github.com/Templarian/MaterialDesign-React
*/

// Comment added from Xavier's computer

import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import create from './screens/create.js';
import compare from './screens/compare.js';
import './components/DDGlobal.js';

const App = () => {
  const [index, setIndex] = React.useState(2);

  const [routes] = React.useState([
    { key: 'spells', title: 'Spells', icon: 'fire', color: '#231942' },
    { key: 'create', title: 'Create', icon: 'auto-fix', color: '#231942' },
    { key: 'home', title: 'Home', icon: 'home', color: '#231942' },
    {
      key: 'chart',
      title: 'Compare',
      icon: 'chart-bell-curve',
      color: '#231942',
    },
    { key: 'settings', title: 'Settings', icon: 'cog', color: '#231942' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    spells: create,
    create: create,
    home: create,
    chart: compare,
    settings: create,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default App;
