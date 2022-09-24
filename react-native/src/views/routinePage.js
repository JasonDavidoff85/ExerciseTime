import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import ExerciseCard from '../components/exerciseCard';
import RoutineCard from '../components/routineCard';

const RoutinePage = ({navigation}) => {
    const routines = [
      {
        id: 0,
        title: "routine 1"
      },
      {
        id: 1,
        title: "routine 2"
      },
    ]

    const renderItem = ({ item }) => (
      <RoutineCard key={item.id} routine={item}/>
    );

    return (   
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Routines</Text>
          <MaterialCommunityIcons onPress={() => navigation.navigate('AddRoutine')} style={styles.icon} name="plus" color='grey' size={35} />
        </View>
        <FlatList 
          style={styles.scroll} 
          contentContainerStyle={styles.scrollContainer} 
          data={routines} 
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
      flex: 2,
    },
    icon: {
      marginRight: 12,
      marginTop: 6,
    },
    scrollContainer: {
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
    },
    scroll: {
      // backgroundColor: '#00f',
      marginTop: 20,
      width: '100%',
    }
  });

export default RoutinePage