import React, {FC} from 'react';
import {View, FlatList, Image} from 'react-native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {BodyOne} from '@/components/atom/text/text';
import Animated, {SlideInRight, SlideOutLeft} from 'react-native-reanimated';

import {selectFavItems} from '@/store/favourite/favourite.selector';
import {addTofav, removeFromfav} from '@/store/favourite/favourite.slice';
import HeartIcon from '@/components/atom/heart-icon/heart-icon';

import styles from './favourites.styles';
import {truncateString} from '@/utils/string.utils';

const FavouritesScreen: FC = () => {
  const dispatch = useDispatch();

  const favouriteItems = useSelector(selectFavItems, shallowEqual);

  const handleAddToFav = product => {
    dispatch(addTofav({fav: favouriteItems, product}));
  };

  const handleRemoveFromFav = product => {
    dispatch(removeFromfav({fav: favouriteItems, product}));
  };

  const handleFavouriteIcon = (isLiked: boolean, product: any) => {
    if (isLiked) {
      handleAddToFav(product);
    } else {
      handleRemoveFromFav(product);
    }
  };

  const renderProduct = ({item, index}) => (
    <Animated.View
      style={styles.productItem}
      entering={SlideInRight.delay(100 + index * 11)}
      exiting={SlideOutLeft}>
      <View style={styles.row}>
        <Image
          source={{uri: item?.thumbnail}}
          style={styles.productThumbnail}
        />
        <View>
          <BodyOne>{truncateString(item.title, 30)}</BodyOne>
          <BodyOne>${item.price}</BodyOne>
        </View>
      </View>
      <View style={[styles.row, styles.counterContainer]}>
        <HeartIcon
          handleHeartPress={isLiked => handleFavouriteIcon(isLiked, item)}
          isLiked={item?.favourite}
        />
      </View>
    </Animated.View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={favouriteItems}
          renderItem={renderProduct}
          keyExtractor={item => item?.id?.toString()}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

export default FavouritesScreen;
