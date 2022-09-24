import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExerciseCard from '../components/exerciseCard';

const AddRoutine = ({navigation}) => {
  const [name, onChangeName] = React.useState("");
  const [desc, onChangeDesc] = React.useState("");
  const [reps, onChangeReps] = React.useState(null);
  const [sets, onChangeSets] = React.useState(null);
  const [min, onChangeMin] = React.useState(null);
  const [max, onChangeMax] = React.useState(null);
  return (   
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
          <MaterialCommunityIcons onPress={() => navigation.goBack()} style={styles.icon} name="arrow-left" color='grey' size={25} />
          <Text style={styles.title}>Add Routine</Text>
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.inputText}> Name: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.inputText}> Description: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDesc}
          value={desc}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={{color: 'white'}}>Save</Text>
      </TouchableOpacity>
      
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
      flexDirection: 'row',
      marginBottom: 15,
    },
    title: {
      fontSize: 22,
      fontWeight: '600',
      marginTop: 15,
      marginLeft: 20,
      flex: 2,
    },
    icon: {
      marginLeft: 12,
      marginTop: 15,
    },
    scrollContainer: {
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
    },
    scroll: {
      // backgroundColor: '#00f',
      marginTop: 20,
      width: '100%',
    },
    inputLine: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginHorizontal: 20
    },
    inputText: {
      flex: 1,
      fontSize: 20,
      marginHorizontal: 20,
    },
    input: {
      flex: 1,
      height: 40,
      width: 50,
      margin: 12,
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#D3D3D3'
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#694fad',
      padding: 10,
      margin: 30,
      borderRadius: 10,
      width: 200,
      height: 50,
    }
  });

export default AddRoutine