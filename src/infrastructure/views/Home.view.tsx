import React from 'react';
import {
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Card } from '@components/Card';
import { CategoryModel } from '@models/Category.model';

export interface HomeViewProps {
  categories: CategoryModel[];
  navigation: any;
  onPressCategoryCard?: (
    event: GestureResponderEvent,
    category: CategoryModel
  ) => Promise<void>;
}

export const HomeView = ({
  categories,
  navigation,
  onPressCategoryCard
}: HomeViewProps) => (
  <ScrollView style={styles.scroll}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Categories</Text>
    </View>

    <View style={styles.container}>
      {categories.map((category, categoryIndex) => (
        <Card
          key={`home_category:${categoryIndex + 1}`}
          data={category}
          onPress={onPressCategoryCard}
        />
      ))}
    </View>
  </ScrollView>
);

export const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 1)',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    paddingTop: 10,
    paddingBottom: 10
  },
  titleText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    color: 'rgba(255, 255, 255, 1)'
  }
});
