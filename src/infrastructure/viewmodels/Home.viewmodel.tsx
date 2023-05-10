import { GestureResponderEvent } from 'react-native';
import { HomeView } from '@views/Home.view';
import { CategoryModel } from '@models/Category.model';
import { onPressCard } from '@components/Card';
import { NavigateProps } from '@components/Navigation';

export interface HomeViewmodelProps extends NavigateProps {}

export const HomeViewmodel = ({ navigation }: HomeViewmodelProps) => {
  const categories: CategoryModel[] = [
    new CategoryModel({
      type: 'characters',
      title: 'Peoples',
      uri: 'https://starwars-visualguide.com/assets/img/characters/1.jpg'
    }),
    new CategoryModel({
      type: 'films',
      title: 'Films',
      uri: 'https://starwars-visualguide.com/assets/img/films/1.jpg'
    }),
    new CategoryModel({
      type: 'starships',
      title: 'Starships',
      uri: 'https://starwars-visualguide.com/assets/img/starships/13.jpg'
    }),
    new CategoryModel({
      type: 'vehicles',
      title: 'Vehicles',
      uri: 'https://starwars-visualguide.com/assets/img/vehicles/4.jpg'
    }),
    new CategoryModel({
      type: 'species',
      title: 'Species',
      uri: 'https://starwars-visualguide.com/assets/img/species/2.jpg'
    }),
    new CategoryModel({
      type: 'planets',
      title: 'Planets',
      uri: 'https://starwars-visualguide.com/assets/img/planets/8.jpg'
    })
  ];

  const onPressCategoryCard: onPressCard = async (
    event: GestureResponderEvent,
    category: CategoryModel
  ) => {
    navigation.navigate('details', { data: category, title: category.title });
  };

  return (
    <HomeView
      navigation={navigation}
      categories={categories}
      onPressCategoryCard={onPressCategoryCard}
    />
  );
};
