import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ExerciseCard from '../components/exerciseCard';

const Routine = () => {
    exercises = [
      {
        title: "title 1"
      },
      {
        title: "title 2"
      },
    ]

    const renderItem = ({ item }) => (
      <RoutineCard key={item.id} routine={item}/>
    );

    return (   
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Header</Text>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Routine