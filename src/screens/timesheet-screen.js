import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const TimesheetScreen = ({ navigation: { navigate } }) => {
  const [investigator, setInvestigator] = useState('');
  const [caseName, setCaseName] = useState('');
  const [client, setClient] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [hours, setHours] = useState('');
  const [mileage, setMileage] = useState('');
  const [fees, setFees] = useState('');
  const [feeDescription, setFeeDescription] = useState('');
  const [activity, setActivity] = useState('');

  return (
    <>
      <View style={styles.timesheetContainer}>
      <TextInput style={styles.timesheetGroup} placeholder="Investigator's Name" value={investigator} onChangeText={(investigator) => setInvestigator(investigator)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Case Name" value={caseName} onChangeText={(caseName) => setCaseName(caseName)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Client" value={client} onChangeText={(client) => setClient(client)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Date" value={date} onChangeText={(date) => setDate(date)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Start Time" value={startTime} onChangeText={(startTime) => setStartTime(startTime)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="End Time" value={endTime} onChangeText={(endTime) => setEndTime(endTime)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Hours" value={hours} onChangeText={(hours) => setHours(hours)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Mileage" value={mileage} onChangeText={(mileage) => setMileage(mileage)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Fees" value={fees} onChangeText={(fees) => setFees(fees)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Fee Description" value={feeDescription} onChangeText={(feeDescription) => setFeeDescription(feeDescription)}></TextInput>
      <TextInput style={styles.timesheetGroup} placeholder="Activity" value={activity} onChangeText={(activity) => setActivity(activity)}></TextInput>

      <Button style={styles.submitButton}
          title="Submit"
          color="green"
          onPress={() => 
            navigate('TimesheetReviewScreen', {
              paramKey1: investigator, 
              paramKey2: caseName,
              paramKey3: client,
              paramKey4: date,
              paramKey5: startTime, 
              paramKey6: endTime,
              paramKey7: hours, 
              paramKey8: mileage, 
              paramKey9: fees, 
              paramKey10: feeDescription, 
              paramKey11: activity, 
            })
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timesheetContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'lightgrey',
    paddingTop: 20,
  },
  timesheetGroup: {
    alignItems: "left",
    marginBottom: 5,
    height: 25,
    width: 200,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "green", 
    paddingLeft: 2,
    backgroundColor: "white "
  }
})

export default TimesheetScreen;