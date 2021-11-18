
import * as React from 'react';
import { BottomNavigation, Text, View } from 'react-native-paper';
import Home from "../screens/Home";
import Spells from "../screens/Spells";
import Create from '../screens/Create.js';
import Compare from '../screens/Compare.js';


const BottomNav = () => {
    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'spells', title: 'Spells', icon: 'fire', color: '#231942' },
    { key: 'create', title: 'Create', icon: 'auto-fix', color: '#231942' },
    { key: 'home', title: 'Home', icon: 'home', color: '#231942' },
    { key: 'chart', title: 'Compare', icon: 'chart-bell-curve', color: '#231942'},
    { key: 'settings', title: 'Settings', icon: 'cog', color: '#231942' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    spells: Spells,
    create: Create,
    home: Home,
    chart: Compare, 
    settings: Spells,
  });

  return (
    
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    
  );
};

export default BottomNav;