import React, {useState, useEffect} from 'react';
import {ScrollView, View, Image, useWindowDimensions} from 'react-native';
import {Rating} from 'react-native-ratings';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import Animated from 'react-native-reanimated';

import {
  BodyOne,
  BodyTwo,
  HeadingLine,
  Label,
} from '@/components/atom/text/text';
import colors from '@/theme/colors';

import HeartIcon from '@/components/atom/heart-icon/heart-icon';
import {Flat, Raised} from '@/components/atom/button/button';
import {fetchProductDetails} from '@/store/products/products.api';

import styles from './products-detail.styles';
import {RootState} from '@/store/store';
import {addToCart} from '@/store/cart/cart.slice';
import {selectCartItems} from '@/store/cart/cart.selector';
import {addTofav, removeFromfav} from '@/store/favourite/favourite.slice';
import {selectFavItems} from '@/store/favourite/favourite.selector';

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const {width} = useWindowDimensions();
  const {product_id} = useRoute().params;

  const [activeSlide, setActiveSlide] = useState(0);

  const {productDetails} = useSelector(
    (state: RootState) => state.product,
    shallowEqual,
  );

  const cartItems = useSelector(selectCartItems, shallowEqual);
  const favItems = useSelector(selectFavItems, shallowEqual);

  const renderImageCarousel = ({item, index}) => {
    return (
      <Animated.Image
        source={{uri: item}}
        style={styles.image}
        sharedTransitionTag="product-image"
      />
    );
  };

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={productDetails?.images?.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.dotsContainer}
        dotStyle={styles.dots}
        inactiveDotStyle={styles.inActiveDots}
      />
    );
  };

  const handleAddToCart = product => {
    dispatch(addToCart({cart: cartItems, product}));
  };

  const handleAddToFav = product => {
    dispatch(addTofav({fav: favItems, product}));
  };

  const handleRemoveFromFav = product => {
    dispatch(removeFromfav({fav: favItems, product}));
  };

  const handleHeartPress = (isLiked: booleam, product: any) => {
    if (isLiked) {
      handleAddToFav(product);
    } else {
      handleRemoveFromFav(product);
    }
  };

  const handleBuyNow = product => {
    dispatch(addToCart({cart: cartItems, product}));
    navigate('ShoppingCart');
  };

  const getLiked = (product): boolean => {
    return favItems.find(favItem => favItem.id === product.id)
      ?.favourite as boolean;
  };

  useEffect(() => {
    dispatch(fetchProductDetails(product_id) as any);
  }, [product_id, dispatch]);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}>
      <View style={styles.headerView}>
        <HeadingLine family="regular">{productDetails?.brand}</HeadingLine>
        <HeadingLine family="bold">{productDetails?.title}</HeadingLine>
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
            startingValue={productDetails?.rating}
          />
          <BodyTwo family="regular" color={colors.black_60}>
            110 reviews
          </BodyTwo>
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          data={productDetails?.images}
          renderItem={renderImageCarousel}
          onSnapToItem={index => setActiveSlide(index)}
          sliderWidth={width}
          itemWidth={width}
        />
        {renderPagination()}
        <View style={styles.favIcon}>
          <HeartIcon
            isLiked={getLiked(productDetails)}
            handleHeartPress={(isLiked: boolean) =>
              handleHeartPress(isLiked, productDetails)
            }
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.priceContainer}>
          <BodyOne family="bold" color={colors.primary}>
            ${productDetails?.price}
          </BodyOne>
          <View style={styles.discountBadge}>
            <Label family="primary" color={colors.black_1}>
              {productDetails?.discountPercentage}% off
            </Label>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Flat
            style={styles.buttonFlex}
            onPress={() => handleAddToCart(productDetails)}>
            <BodyTwo family="semi_bold" color={colors.primary}>
              Add to cart
            </BodyTwo>
          </Flat>
          <Raised
            style={styles.buttonFlex}
            onPress={() => handleBuyNow(productDetails)}>
            <BodyTwo family="semi_bold" color={colors.black_1}>
              Buy Now
            </BodyTwo>
          </Raised>
        </View>
        <View>
          <BodyOne color={colors.black_100}>Details</BodyOne>
          <BodyOne color={colors.black_45}>
            {productDetails.description}
          </BodyOne>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
