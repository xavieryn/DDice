import * as React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
  SafeAreaView
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CompareModal(props) {

  for (let i = 0; i < (props.data1.length - props.data2.length); i++) {
    props.data2.push(0);
  }
  for (let i = 0; i < (props.data2.length - props.data1.length); i++) {
    props.data1.push(0);
  }

  const lines = {
    labels: [...Array(props.data1.length).keys()],
    datasets: [
      {
        data: props.data2.map((value) => value * 100),
        color: (opacity = 100) => `rgba(228, 216, 198)`
      },
      {
        data: props.data1.map((value) => value * 100),
        color: (opacity = 100) => `rgba(35, 25, 66)`
      }
    ]
  }

  return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: '#231942',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
          }}>
          <Text style={styles.header}>Compare Dice</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <LineChart
            data={lines}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="%"
            yAxisInterval={1} // optional, defaults to 1
            withDots={false}
            fromZero={true}
            withOuterLines={true}
            withInnerLines={false}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 100) => `rgba(0, 0, 0)`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0)`,
              useShadowColorFromDataset: true,
              style: {
                borderRadius: 16
              },
              propsForBackgroundLines: {
                strokeOpacity: 1
              }
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9988A4',
    paddingBottom: windowHeight / 20,
    justifyContent: 'space-between',
  },
  paragraph: {
    margin: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E6DEFC',
  },
  button: {
    backgroundColor: '#E4D8C6',
    height: 35,
    width: windowWidth / 4,
    alignItems: 'center',
    borderRadius: 2,
    justifyContent: 'center',
  },
  box: {
    height: windowWidth / 5,
    width: windowWidth / 5,
    alignItems: 'center',
    paddingVertical: windowWidth / 5 / 3,
  },
  input: {
    height: 35,
    width: windowWidth / 2.5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4A3D59',
    color: '#4A3D59',
  },
});
