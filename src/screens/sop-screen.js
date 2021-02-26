import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';


const SOPScreen = ({ navigation: { navigate } }) => {
 
    return (
    <>
    <TouchableOpacity style={styles.logContainer} onPress={() => navigate('LogScreen')}>
      <View style={styles.button}>
        <Text style={styles.text}>Log Attempt</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.logContainer} onPress={() => navigate('WritListScreen')}>
      <View style={styles.button}>
        <Text style={styles.text}>List of Writs</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.logContainer} onPress={() => navigate('PastDueScreen')}>
      <View style={styles.button}>
        <Text style={styles.text}>Past Due</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.attemptContainer} onPress={() => navigate('AttemptsScreen')}>
      <View style={styles.button}>
        <Text style={styles.text}>Attempts: Last 60 Days</Text>
      </View>
    </TouchableOpacity>
    </>
    )}

    const styles = StyleSheet.create({
        logContainer: {
            alignItems: "center",
            backgroundColor: 'lightgrey',
        },
        button: {
            marginTop: 10,
            height: 25,
            width: 200,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
        },
        attemptContainer: {
            alignItems: "center",
            backgroundColor: 'lightgrey',
            paddingBottom: 370,
        },
        text: {
            color: "white",
        }
      });

    export default SOPScreen;