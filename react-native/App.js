import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExerciseStack from './src/navigation/exerciseStack';
import RoutineStack from './src/navigation/routineStack';


const Tab = createMaterialBottomTabNavigator();

export default function App() {  
  myExercise = {
    title: "word",
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
      barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen 
          name="Exercises" 
          component={ExerciseStack}
          options={{
            tabBarLabel: 'Exercises',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Routines" 
          component={RoutineStack}
          options={{
            tabBarLabel: 'Routines',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clipboard-list-outline" color={color} size={26} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
