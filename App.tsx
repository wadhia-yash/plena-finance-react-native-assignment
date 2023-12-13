import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from '@/navigators/root-stack.navigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
