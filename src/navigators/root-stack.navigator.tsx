import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ApplicationStackParamList} from './types/root-stack.navigator.types';
import {View, Text} from 'react-native';
import MyTabs from './bottom-stack.navigator';

const Stack = createStackNavigator<ApplicationStackParamList>();

const Home: FC = () => {
  return (
    <View>
      <Text>Feed Hello</Text>
    </View>
  );
};

const RootStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProducDetails"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
