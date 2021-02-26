import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';


const SOPScreen = ({ navigation: { navigate } }) => {
  const [selectedValue, setSelectedValue]= useState("No");
  const [caseNumber, setCaseNumber] = useState('');
  const [defendant, setDefendant] = useState('');
  const [address, setAddress] = useState('');
  const [served, setServed] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [race, setRace] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [glasses, setGlasses] = useState('');
  const [fee, setFee] = useState('');
 
    return (
    <>
      <View style={styles.sopContainer}>
        
        <TextInput style={styles.sopGroup} placeholder="Case Number" value={caseNumber} onChangeText={(caseNumber) => setCaseNumber(caseNumber)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Defendant/Witness" value={defendant} onChangeText={(defendant) => setDefendant(defendant)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Address" value={address} onChangeText={(address) => setAddress(address)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Person Served/Relationship" value={served} onChangeText={(served) => setServed(served)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Date" value={date} onChangeText={(date) => setDate(date)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Time" value={time} onChangeText={(time) => setTime(time)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Age" value={age} onChangeText={(age) => setAge(age)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Sex" value={sex} onChangeText={(sex) => setSex(sex)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Race" value={race} onChangeText={(race) => setRace(race)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Height" value={height} onChangeText={(height) => setHeight(height)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Weight" value={weight} onChangeText={(weight) => setWeight(weight)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Hair Color" value={hairColor} onChangeText={(hairColor) => setHairColor(hairColor)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Glasses" value={glasses} onChangeText={(glasses) => setGlasses(glasses)}></TextInput>
        <TextInput style={styles.sopGroup} placeholder="Fee" value={fee} onChangeText={(fee) => setFee(fee)}></TextInput>

        <Button style={styles.submitButton}
          title="Submit"
          color="green"
          onPress={() => 
            navigate('SOPReviewScreen', {
              paramKey1: caseNumber, 
              paramKey2: defendant,
              paramKey3: address,
              paramKey4: served,
              paramKey5: date, 
              paramKey6: time,
              paramKey7: age, 
              paramKey8: sex, 
              paramKey9: race, 
              paramKey10: height, 
              paramKey11: weight, 
              paramKey12: hairColor, 
              paramKey13: glasses, 
              paramKey14: fee,
            })
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sopContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: 'lightgrey',
  }, 
  sopGroup: {
    alignItems: "left",
    marginBottom: 5,
    height: 25,
    width: 200,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "green", 
    paddingLeft: 2,
    backgroundColor: "white "

  },
});

export default SOPScreen;