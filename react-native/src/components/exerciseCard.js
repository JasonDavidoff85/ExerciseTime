import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';

const ExerciseCard = (props) => {
    const [age, setAge] = useState(42);
    return (
      <TouchableOpacity 
        style={[styles.card, styles.shadowProp]}
        onPress={() => props.navigation.navigate("ViewExercise", {exercise: props.exercise})}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.heading}>
            {props.exercise.title}
          </Text>
          <MaterialCommunityIcons 
            style={styles.icon} 
            name={props.exercise.icon}
            color='grey' 
            size={35} 
        />
        </View>
        <Text>
          {props.exercise.description}
        </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    heading: {
      flex: 2,
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 13,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: 170,
      height: 160,
      marginVertical: 10,
      marginHorizontal: 10
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    cardHeader: {
      flexDirection: 'row'
    },
    icon: {
      flex: 1,
    }
  });

export default ExerciseCard