import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

export interface HeaderProps {
  image: string;
}

export const Header = ({ image: uri }: HeaderProps) => (
  <View style={styles.header}>
    <View style={styles.headerShadow} />
    <Image style={styles.headerImage} source={{ uri }} />
  </View>
);

export const styles = StyleSheet.create({
  header: {
    height: 300,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 30,
    overflow: 'hidden'
  },
  headerShadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    zIndex: 10,
    position: 'absolute',
    resizeMode: 'cover'
  },
  headerImage: {
    width: '100%',
    height: '100%',
    zIndex: 5,
    position: 'absolute',
    resizeMode: 'cover'
  }
});
