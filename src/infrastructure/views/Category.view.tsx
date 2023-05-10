import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Card, CardProps } from '@components/Card';
// @ts-ignore
import starWarsCharactersWallpaper from '@assets/star-wars-characters.png';
// @ts-ignore
import starWarsPlanetsWallpaper from '@assets/star-wars-planets.png';
// @ts-ignore
import starWarsSpeciesWallpaper from '@assets/star-wars-species.png';
// @ts-ignore
import starWarsStarshipsWallpaper from '@assets/star-wars-starships.png';
// @ts-ignore
import starWarsVehiclesWallpaper from '@assets/star-wars-vehicles.png';
// @ts-ignore
import starWarsFilmsWallpaper from '@assets/star-wars-films.png';

export interface CategoryViewProps {
  wallpaper: any;
  navigation: any;
  isLoading: boolean;
  category:
    | 'characters'
    | 'planets'
    | 'species'
    | 'starships'
    | 'vehicles'
    | 'films';
  items: CardProps[];
}

export const CategoryView = ({
  category,
  navigation,
  wallpaper,
  items,
  isLoading
}: CategoryViewProps) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.header}>
        <View style={styles.headerShadow} />
        <Image style={styles.headerImage} source={wallpaper} />
      </View>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{category}</Text>
        </View>

        <View style={styles.cards}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            items.map((item, index) => (
              <Card
                {...item}
                key={`details_${category.slice(0, category.length - 2)}:${
                  index + 1
                }`}
              />
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
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
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 1)',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  titleText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    color: 'rgba(255, 255, 255, 1)'
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  }
});
