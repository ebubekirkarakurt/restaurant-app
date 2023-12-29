import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '../navigation';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamsList>>();
};
