import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen = ({navigation: { navigate } }) => {

  return (
    <>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('SOPScreen')}>
      <View style={styles.sopButton}>
        <Text style={styles.sopButtonText}>Service of Process</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Timesheet')}>
      <View style={styles.tsButton}>
        <Text style={styles.tsButtonText}>Timesheet</Text>
      </View>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'lightgrey',
    
  },
  sopButton: {
    marginTop: 10,
    height: 25,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  sopButtonText: {
    color: "white",
  },
  tsButton: {
    marginTop: 10,
    height: 25,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    marginBottom: 440,
    
  },
  tsButtonText: {
    color: "white",
  }
});


export default HomeScreen;