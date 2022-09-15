import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExercise from '../views/addExercise';
import Exercise from '../views/exercise';
import ExercisePage from '../views/exercisePage';

const stack = createNativeStackNavigator();


const ExerciseStack = () => {
  return (
    <stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <stack.Screen name="ExercisePage" component={ExercisePage} />
      <stack.Screen name="AddExercise" component={AddExercise} />
      <stack.Screen name="ViewExercise" component={Exercise} />
    </stack.Navigator>
  )
}

export default ExerciseStack