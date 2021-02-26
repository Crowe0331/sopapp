import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';


const TimesheetReviewScreen = ({route}) => {
 
    return (
    <>
        <View style={styles.reviewContainer}>
            <Text style={styles.text}>Investigator's Name: {route.params.paramKey1}</Text>
            <Text style={styles.text}>Case Name: {route.params.paramKey2}</Text>
            <Text style={styles.text}>Client: {route.params.paramKey3}</Text>
            <Text style={styles.text}>Date: {route.params.paramKey4}</Text>
            <Text style={styles.text}>Start Time: {route.params.paramKey5}</Text>
            <Text style={styles.text}>End Time: {route.params.paramKey6}</Text>
            <Text style={styles.text}>Hours: {route.params.paramKey7}</Text>
            <Text style={styles.text}>Mileage: {route.params.paramKey8}</Text>
            <Text style={styles.text}>Fees: {route.params.paramKey9}</Text>
            <Text style={styles.text}>Fee Description: {route.params.paramKey10}</Text>
            <Text style={styles.text}>Activity: {route.params.paramKey11}</Text>
            

        </View>
    </>
    )}


    const styles = StyleSheet.create({
        reviewContainer: {
          flex: 1,
          backgroundColor: 'grey',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
        },
        text: {
            color: "white",
            alignItems: "left",
            fontWeight: "bold",
            padding: 2,
            borderColor: "lightgrey",
            borderWidth: 2,
            borderStyle: "solid", 
            marginBottom: 5,
        }
      });

export default TimesheetReviewScreen;