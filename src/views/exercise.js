import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExerciseCard from '../components/exerciseCard';

const Exercise = ({route, navigation}) => {
  const [edit, toggleEdit] = React.useState(false)
  const [name, onChangeName] = React.useState(route.params.exercise.description);
  const [desc, onChangeDesc] = React.useState(route.params.exercise.description);
  const [reps, onChangeReps] = React.useState(route.params.exercise.reps);
  const [sets, onChangeSets] = React.useState(route.params.exercise.sets);
  const [min, onChangeMin] = React.useState(route.params.exercise.min);
  const [max, onChangeMax] = React.useState(route.params.exercise.max);
  return (   
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
          <MaterialCommunityIcons 
            onPress={() => navigation.goBack()} 
            style={styles.icon} 
            name='arrow-left'
            color='grey' 
            size={25} 
          />
          <Text style={styles.title}>{route.params.exercise.title}</Text>
          <MaterialCommunityIcons 
            onPress={() => toggleEdit(!edit)} 
            style={styles.editIcon} 
            name={!edit ? 'pencil-outline' : 'content-save-outline'}
            color='grey' 
            size={25} />
      </View>
      <View style={styles.desInputLine}>
        <TextInput
          multiline
          numberOfLines={6}
          style={[styles.desInput, edit ? styles.inputEnabled : null]}
          onChangeText={onChangeDesc}
          value={desc}
          editable={edit}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.inputText}> Reps: </Text>
        <TextInput
          style={[styles.input, edit ? styles.inputEnabled : null]}
          onChangeText={onChangeSets}
          keyboardType="numeric"
          value={sets}
          editable={edit}
        />
        <Text>X</Text>
        <TextInput
          style={[styles.input, edit ? styles.inputEnabled : null]}
          onChangeText={onChangeReps}
          keyboardType="numeric"
          value={reps}
          editable={edit}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.inputText}> Min: </Text>
        <TextInput
          style={[styles.input, edit ? styles.inputEnabled : null]}
          onChangeText={onChangeMin}
          value={min}
          editable={edit}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.inputText}> Max: </Text>
        <TextInput
          style={[styles.input, edit ? styles.inputEnabled : null]}
          onChangeText={onChangeMax}
          value={max}
          editable={edit}
        />
      </View>
      {edit && 
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons 
            onPress={() => navigation.goBack()} 
            name='delete'
            color='white' 
            size={25} 
          />
        </TouchableOpacity>
      }
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'flex-start',
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
    editIcon: {
      marginRight: 15,
      marginTop: 12,
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
      // justifyContent: 'center',
      marginTop: 5,
      marginHorizontal: 20,
    },
    desInputLine: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: 5,
      marginHorizontal: 20,
      width: '90%',
      height: 140,
    },
    inputText: {
      fontSize: 20,
      marginHorizontal: 20,
      width: 55,
    },
    inputTextDes: {
      flex: 1,
      fontSize: 20,
      marginHorizontal: 20,
      marginTop: 10,
    },
    input: {
      height: 40,
      width: 50,
      margin: 12,
      borderRadius: 5,
      padding: 10,
      fontSize: 22,
      fontWeight: '600',
    },
    desInput: {
      flex: 1,
      height: 70,
      width: '90%',
      margin: 12,
      borderRadius: 5,
      padding: 10,
      fontSize: 18,
      fontWeight: '300',
    },
    inputEnabled: {
      backgroundColor: '#D3D3D3',
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      alignSelf: 'center',
      backgroundColor: 'red',
      padding: 10,
      margin: 30,
      borderRadius: 10,
      width: 100,
      height: 50,
    }
  });

export default Exercise