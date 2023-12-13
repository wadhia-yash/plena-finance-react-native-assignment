import React, {useState} from 'react';
import {ScrollView, View, Image, useWindowDimensions} from 'react-native';
import {Rating} from 'react-native-ratings';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {BodyOne, BodyTwo, HeadingLine} from '@/components/atom/text/text';
import colors from '@/theme/colors';

import styles from './products-detail.styles';
import HeartIcon from '@/components/atom/heart-icon/heart-icon';
import {Flat, Raised} from '@/components/atom/button/button';

const images: Array<string> = [
  'https://i.dummyjson.com/data/products/1/1.jpg',
  'https://i.dummyjson.com/data/products/1/2.jpg',
  'https://i.dummyjson.com/data/products/1/3.jpg',
  'https://i.dummyjson.com/data/products/1/4.jpg',
  'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
];

const ProductDetailsScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {width} = useWindowDimensions();

  const renderImageCarousel = ({item, index}) => {
    return <Image source={{uri: item}} style={styles.image} />;
  };

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.dotsContainer}
        dotStyle={styles.dots}
        inactiveDotStyle={styles.inActiveDots}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerView}>
        <HeadingLine family="regular">Thin Choise</HeadingLine>
        <HeadingLine family="bold">Thin Choise</HeadingLine>
        <View style={styles.row}>
          <Rating
            type="custom"
            ratingColor={colors.secondary_dark}
            ratingBackgroundColor={colors.black_100}
            ratingCount={5}
            imageSize={15}
            style={styles.rating}
            tintColor={colors.black_1}
            readonly={true}
          />
          <BodyTwo family="regular" color={colors.black_60}>
            110 reviews
          </BodyTwo>
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          data={images}
          renderItem={renderImageCarousel}
          onSnapToItem={index => setActiveSlide(index)}
          sliderWidth={width}
          itemWidth={width}
        />
        {renderPagination()}
        <View style={styles.favIcon}>
          <HeartIcon />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <BodyOne family="bold" color={colors.primary}>
          $36
        </BodyOne>
        <View style={styles.buttonContainer}>
          <Flat style={styles.buttonFlex}>
            <BodyTwo family="semi_bold" color={colors.primary}>
              Add to cart
            </BodyTwo>
          </Flat>
          <Raised style={styles.buttonFlex}>
            <BodyTwo family="semi_bold" color={colors.black_1}>
              Buy Now
            </BodyTwo>
          </Raised>
        </View>
        <View>
          <BodyOne color={colors.black_100}>Details</BodyOne>
          <BodyOne color={colors.black_45}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </BodyOne>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
