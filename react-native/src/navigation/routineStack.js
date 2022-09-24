import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoutinePage from '../views/routinePage';
import AddRoutine from '../views/addRoutine';

const stack = createNativeStackNavigator();


const RoutineStack = () => {
  return (
    <stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <stack.Screen name="RoutinePage" component={RoutinePage} />
      <stack.Screen name="AddRoutine" component={AddRoutine} />
    </stack.Navigator>
  )
}

export default RoutineStack