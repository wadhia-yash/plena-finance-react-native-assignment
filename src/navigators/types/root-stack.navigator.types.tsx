import type {StackScreenProps} from '@react-navigation/stack';

export type ApplicationStackParamList = {
  Home: undefined;
  ProducDetails: undefined;
  ShoppingCart: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
