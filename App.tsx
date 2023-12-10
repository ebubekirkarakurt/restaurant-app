import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
