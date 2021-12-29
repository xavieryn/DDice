
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { View, StyleSheet, SafeAreaView } from 'react-native'; 

import Home from "../screens/Home";
import Spells from "../screens/Spells";
import Create from '../screens/Create.js';
import Compare from '../screens/Compare.js';
import Settings from '../screens/Settings.js';
import RouteHandlerSpells from '../screens/RouteHandlerSpells';


const BottomNav = () => {
    const [index, setIndex] = React.useState(2);
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
    settings: Settings,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        
      />
    </View>
    
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    
  }
});

export default BottomNav;