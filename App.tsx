import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { View } from 'react-native';
import RegisterScreen from './src/features/register/screens/RegisterScreen';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import LoginScreen from './src/features/login/screens/LoginScreen';

export default function App() {
  return (
     <Provider store={store}>
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
      </Provider>
   
  );
}
