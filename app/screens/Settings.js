import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// export function
export default function create() {
  const [title, setTitle] = React.useState('Settings');


  return (
    <>
      <SafeAreaView style={{ flex:0, backgroundColor: '#231942' }}/>
      <SafeAreaView style={styles.container}>
        {/*top*/}
        <View
          style={{
            backgroundColor: '#231942',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
          }}>
          <Text style={styles.header}>{title}</Text>

          
        </View>
        <View style={styles.container1}>
          <Image
            style={styles.image}
            source={require('../assets/zzz.png')}
          />
        </View>

      </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9988A4',
    paddingBottom: windowHeight / 20,
    justifyContent: 'space-between',
  }, 
  header: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E6DEFC',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#9988A4',
  },
  image: {
    width: windowWidth/1.5,
    resizeMode: 'contain'
  },
});
