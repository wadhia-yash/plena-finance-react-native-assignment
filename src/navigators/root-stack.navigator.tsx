import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';

import ProductDetailsScreen from '@/screens/products-detail/products-detail';

import {ApplicationStackParamList} from './types/root-stack.navigator.types';
import BottomTabStackNavigator from './bottom-stack.navigator';
import ProductHeader from '@/components/molecule/product-details-header/product-details-header';

const Stack = createStackNavigator<ApplicationStackParamList>();

const RootStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabStackNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProducDetails"
        component={ProductDetailsScreen}
        options={{
          headerShown: true,
          header: (props: StackHeaderProps) => <ProductHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
