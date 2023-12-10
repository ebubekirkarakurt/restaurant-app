import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/navigation';


export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator/>
    </NavigationContainer>
  );
}
