import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './heart-icon.styles';

const Heart = ({filled, style, ...props}) => {
  const centerNonFilled = (
    <View style={[StyleSheet.absoluteFill, styles.fit]}>
      <View style={[styles.leftHeart, styles.heartShape, styles.emptyFill]} />
      <View style={[styles.rightHeart, styles.heartShape, styles.emptyFill]} />
    </View>
  );

  const fillStyle = filled ? styles.filledHeart : styles.empty;

  return (
    <Animated.View {...props} style={[styles.heart, style]}>
      <View style={[styles.leftHeart, styles.heartShape, fillStyle]} />
      <View style={[styles.rightHeart, styles.heartShape, fillStyle]} />
      {!filled && centerNonFilled}
    </Animated.View>
  );
};

const HeartIcon = ({handleHeartPress, isLiked = false}) => {
  const [isHeartLiked, setIsHeartLiked] = useState<boolean>(false);
  const scale = useRef(new Animated.Value(0)).current;

  const triggerLike = () => {
    setIsHeartLiked(prev => {
      handleHeartPress(!prev);
      return !prev;
    });
    Animated.spring(scale, {
      toValue: 2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      scale.setValue(0);
    });
  };

  useEffect(() => {
    setIsHeartLiked(isLiked);
  }, [isLiked]);

  const springHeart = scale.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.85, 1],
  });

  const heartButtonStyle = {
    transform: [{scale: springHeart}],
  };

  return (
    <TouchableWithoutFeedback onPress={triggerLike}>
      <Animated.View style={heartButtonStyle}>
        <Heart filled={isHeartLiked} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default HeartIcon;
