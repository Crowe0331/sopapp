import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';


const SOPReviewScreen = ({route}) => {
 
    return (
    <>
        <View style={styles.reviewContainer}>
            <Text style={styles.text}>Case Number: {route.params.paramKey1}</Text>
            <Text style={styles.text}>Defendant/Witness: {route.params.paramKey2}</Text>
            <Text style={styles.text}>Address: {route.params.paramKey3}</Text>
            <Text style={styles.text}>Person Served/Relationship: {route.params.paramKey4}</Text>
            <Text style={styles.text}>Date: {route.params.paramKey5}</Text>
            <Text style={styles.text}>Time: {route.params.paramKey6}</Text>
            <Text style={styles.text}>Age: {route.params.paramKey7}</Text>
            <Text style={styles.text}>Sex: {route.params.paramKey8}</Text>
            <Text style={styles.text}>Race: {route.params.paramKey9}</Text>
            <Text style={styles.text}>Height: {route.params.paramKey10}</Text>
            <Text style={styles.text}>Weight: {route.params.paramKey6}</Text>
            <Text style={styles.text}>Hair Color: {route.params.paramKey7}</Text>
            <Text style={styles.text}>Glasses: {route.params.paramKey8}</Text>
            <Text style={styles.text}>Fee: {route.params.paramKey9}</Text>

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
      

export default SOPReviewScreen;