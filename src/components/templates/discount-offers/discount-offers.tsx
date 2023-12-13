/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import colors from '@/theme/colors';
import React, {FC} from 'react';
import {ScrollView, View, Dimensions, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import PlaceHolderImage from '@/assets/images/placeholder_image_white.svg';

import styles from './discount-offers.styles';
import {BodyTwo, HeadingThree, HeadingTwo} from '@/components/atom/text/text';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

type CardType = {
  title: string;
  description: string;
};

const cards = [
  {title: '50% off', description: 'On first 3 orders'},
  {title: '25% off', description: 'On first 3 orders'},
  {title: '10% off', description: 'On first 3 orders'},
];

const bgColor = {
  0: colors.secondary_dark,
  1: colors.pearl_bush,
  2: colors.primary_dark,
};

const DiscountOffers: FC = () => {
  const renderDiscountCards = (views: CardType[]): JSX.Element[] => {
    return views.map((card, index: number) => {
      return (
        <View
          style={[styles.cardStyle, {backgroundColor: bgColor[index]}]}
          key={`${card.title}-${index}`}>
          <View style={styles.imageCardContainer}>
            <PlaceHolderImage width={70} height={70} />
          </View>
          <View style={styles.offerCardContainer}>
            <HeadingThree family="regular" color={colors.black_1}>
              Get
            </HeadingThree>
            <HeadingTwo family="bold" color={colors.black_1}>
              {card.title}
            </HeadingTwo>
            <BodyTwo family="regular" color={colors.black_1}>
              {card.description}
            </BodyTwo>
          </View>
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}>
        {renderDiscountCards(cards)}
      </ScrollView>
    </View>
  );
};

export default DiscountOffers;
