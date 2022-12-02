import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Login";
import Pin from "../Pin";
const Stack = createStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pin" component={Pin} />
    </Stack.Navigator>
  );
}
