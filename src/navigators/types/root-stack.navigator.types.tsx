import type {StackScreenProps} from '@react-navigation/stack';

export type ApplicationStackParamList = {
  Home: undefined;
  ProducDetails: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
