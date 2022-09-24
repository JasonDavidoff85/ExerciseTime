import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';

import ExerciseCard from '../components/exerciseCard';

const AddExercise = ({navigation}) => {
  const [name, onChangeName] = React.useState("");
  const [desc, onChangeDesc] = React.useState("");
  const [reps, onChangeReps] = React.useState(null);
  const [sets, onChangeSets] = React.useState(null);
  const [min, onChangeMin] = React.useState(null);
  const [max, onChangeMax] = React.useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: <MaterialCommunityIcons style={{flex: 1}} name="dumbbell" color='grey' size={20} />, value: 'dumbbell'},
    {label: <MaterialCommunityIcons style={{flex: 1}} name="arm-flex-outline" color='grey' size={20} />, value: 'arm-flex-outline'},
    {label: <MaterialCommunityIcons style={{flex: 1}} name="yoga" color='grey' size={20} />, value: 'yoga'}
  ]);
  
  return (   
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
          <MaterialCommunityIcons onPress={() => navigation.goBack()} style={styles.icon} name="arrow-left" color='grey' size={25} />
          <Text style={styles.title}>Add Exercise</Text>
      </View>
      <ScrollView style={{width: '100%'}}>
        <View style={styles.inputLine}>
          <Text style={styles.inputText}> Name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
        </View>
        <View style={styles.inputLine}>
          <Text style={styles.inputText}> Icon: </Text>
          <DropDownPicker
            style={{
              backgroundColor: "#D3D3D3",
              borderWidth: 0,
              zIndex: 5000
            }}
            containerStyle={{
              flex: 1,
              width: 70,
              margin: 20,
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder=""
          />
          
        </View>
        
        <View style={styles.inputDesc}>
          <Text style={styles.inputTextDesc}> Description: </Text>
          <TextInput
            multiline
            numberOfLines={6}
            style={styles.desInput}
            onChangeText={onChangeDesc}
            value={desc}
          />
        </View>
        <View style={styles.inputLine}>
          <Text style={styles.inputText}> Reps: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSets}
            keyboardType="numeric"
            value={sets}
          />
          <Text>X</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeReps}
            keyboardType="numeric"
            value={reps}
          />
        </View>
        <View style={styles.inputLine}>
          <Text style={styles.inputText}> Min: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMin}
            keyboardType="numeric"
            value={min}
          />
        </View>
        <View style={styles.inputLine}>
          <Text style={styles.inputText}> Max: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMax}
            keyboardType="numeric"
            value={max}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={{color: 'white'}}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
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
      zIndex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginHorizontal: 5
    },
    iconInputLine: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginHorizontal: 20,
      height: 200,
    },
    inputDesc: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: 5,
      marginHorizontal: 20,
      height: 200,
    },
    inputText: {
      flex: 1,
      fontSize: 20,
      marginHorizontal: 20,
    },
    inputTextDesc: {
      fontSize: 20,
      marginHorizontal: 5,
      marginVertical: 10
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
    desInput: {
      alignSelf: 'center',
      flex: 1,
      height: 70,
      width: '85%',
      margin: 12,
      borderRadius: 5,
      padding: 10,
      fontSize: 18,
      fontWeight: '300',
      backgroundColor: '#D3D3D3'
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      alignSelf: 'center',
      backgroundColor: '#694fad',
      padding: 10,
      margin: 30,
      borderRadius: 10,
      width: 200,
      height: 50,
    }
  });

export default AddExercise