import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const RoutineCard = (props) => {
    const [age, setAge] = useState(42);
    return (
      <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.heading}>
            {props.routine.title}
          </Text>
        </View>
        <Text>
          This is the description
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 13,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: 300,
      height: 125,
      marginVertical: 10,
      marginHorizontal: 10
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  });

export default RoutineCard