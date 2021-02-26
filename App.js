import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SOPScreen from './src/screens/sop-screen';
import LogScreen from './src/screens/log-screen';
import SOPReviewScreen from './src/screens/sop-review-screen';
import WritListScreen from './src/screens/writ-list-screen';
import PastDueScreen from './src/screens/past-due-screen';
import AttemptsScreen from './src/screens/attempts-screen';
import HomeScreen from './src/screens/home-screen';
import TimesheetScreen from './src/screens/timesheet-screen';
import TimesheetReviewScreen from './src/screens/timesheet-review-screen';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withAuthenticator} from 'aws-amplify-react-native';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer style={styles.mainContainer}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'Home',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
              },
              headerLeft: () => (
                <View style={styles.logOutBtn}>
                  <Button
                    icon={<Icon name="sign-out" size={25} color="white" />}
                    onPress={() =>Auth.signOut()}
                    type="clear"
                  />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="SOPScreen"
            buttonStyle={styles.addButton}
            component={SOPScreen}
            options={{
              title: 'Service of Process',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="LogScreen"
            buttonStyle={styles.addButton}
            component={LogScreen}
            options={{
              title: 'Log Attempt',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="SOPReviewScreen"
            buttonStyle={styles.addButton}
            component={SOPReviewScreen}
            options={{
              title: 'Review: Service of Process',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="WritListScreen"
            buttonStyle={styles.addButton}
            component={WritListScreen}
            options={{
              title: 'Complete Writ List',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="PastDueScreen"
            buttonStyle={styles.addButton}
            component={PastDueScreen}
            options={{
              title: 'Past Due Writs',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="AttemptsScreen"
            buttonStyle={styles.addButton}
            component={AttemptsScreen}
            options={{
              title: 'Attempts: Last 60 Days',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="Timesheet"
            buttonStyle={styles.addButton}
            component={TimesheetScreen}
            options={{
              title: 'Timesheet',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="TimesheetReviewScreen"
            buttonStyle={styles.addButton}
            component={TimesheetReviewScreen}
            options={{
              title: 'Review: Timesheet',
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: 'green',
                color: "white",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
  addButton: {
    marginRight: 20,
  },
  logOutBtn: {
    marginLeft: 10,
    tintColor: "white"
  },
  mainContainer: {
    backgroundColor: "grey",
  }
});

export default withAuthenticator(App);
