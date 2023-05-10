import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CategoryModel } from '@models/Category.model';
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';

export type onPressCard = (
  event: GestureResponderEvent,
  category: CategoryModel
) => Promise<void>;

export interface CardProps {
  data: CategoryModel;
  onPress?: onPressCard;
}

export const Card = ({
  data,
  onPress: _onPress
}: CardProps) => {
  const { title, uri } = data;

  const onPress = async (event: GestureResponderEvent) => {
    if (_onPress) await _onPress(event, data);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.shadow} />
      <Image style={styles.icon} source={{ uri }} />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    height: 150,
    width: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  title: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    zIndex: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  icon: {
    width: '100%',
    height: '100%',
    zIndex: 5,
    position: 'absolute',
    resizeMode: 'cover'
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    zIndex: 10,
    position: 'absolute',
    resizeMode: 'cover'
  }
});
