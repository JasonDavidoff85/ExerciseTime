import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const TestComponent = (props) => {
    const [age, setAge] = useState(42);
    return (
        <View style={styles.container}>
        <Text>{props.word}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: '4px',
      borderWidth: '1px',
      width: '90%',
      height: 200,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }
  });

export default TestComponent