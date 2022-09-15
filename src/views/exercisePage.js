import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExerciseCard from '../components/exerciseCard';

const ExercisePage = ({navigation}) => {
    exercises = [
      {
        id: 0,
        icon: 'dumbbell',
        title: "Skull Crushers",
        description: 'This exercise, you curl your hands forward while sitting on the bench',
        sets: '2',
        reps: '4',
        min: '5',
        max: '8'
      },
      {
        id: 1,
        title: "Full body stretch",
        icon: 'yoga',
        description: 'Description 2',
        sets: '4',
        reps: '8',
        min: '1',
        max: '4'
      },
      {
        id: 2,
        title: "Assisted Pull ups",
        icon: 'arm-flex-outline',
        description: 'Description 3',
        sets: '1',
        reps: '12',
        min: '6',
        max: '12'
      },

    ]

    const renderItem = ({ item }) => (
      <ExerciseCard navigation={navigation} key={item.id} exercise={item}/>
    );

    return (   
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Exercises</Text>
          <MaterialCommunityIcons onPress={() => navigation.navigate('AddExercise')} style={styles.icon} name="plus" color='grey' size={35} />
        </View>
        <FlatList 
          style={styles.scroll} 
          contentContainerStyle={styles.scrollContainer} 
          numColumns={2} 
          data={exercises} 
          renderItem={renderItem} 
          keyExtractor={item => item.id}/>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
    },
    heading: {
      flexDirection: 'row'
    },
    title: {
      fontSize: 22,
      fontWeight: '600',
      marginTop: 15,
      marginLeft: 20,
      flex: 2
    },
    icon: {
      marginRight: 12,
      marginTop: 6,
    },
    scrollContainer: {
      backgroundColor: '#f5f5f5',
      alignItems: 'flex-start',
    },
    scroll: {
      marginTop: 20,
      width: '100%',
    }
  });

export default ExercisePage