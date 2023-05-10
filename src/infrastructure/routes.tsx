import React from 'react';
import { capitalize } from 'lodash';
import { NavigateProps, NavigationRoute } from '@components/Navigation';
import { HomeViewmodel } from '@viewmodels/Home.viewmodel';
import { CategoryViewmodel } from '@viewmodels/Category.viewmodel';
import { CharacterViewmodel } from '@viewmodels/Character.viewmodel';
import { PlanetViewmodel } from '@viewmodels/Planet.viewmodel';
import { VehicleViewmodel } from '@viewmodels/Vehicle.viewmodel';
import { StarshipViewmodel } from '@viewmodels/Starship.viewmodel';
import { FilmViewmodel } from '@viewmodels/Film.viewmodel';
import { SpecieViewmodel } from '@viewmodels/Specie.viewmodel';

export interface routeDefaultTitleGeneratorOptions extends NavigateProps {
  title?: string;
}

export const routeDefaultTitleGenerator: (
  options: routeDefaultTitleGeneratorOptions
) => string = ({ route, navigation, title: _title = '' }) => {
  const params: any = route?.params as any;
  const dataTitle: any = params?.title as any | '';

  let title: string = '';

  if (route.params && dataTitle) title = dataTitle;
  else if (!!route.name) title = capitalize(route.name);
  else title = _title;

  return title;
};

export const routes: NavigationRoute<NavigateProps>[] = [
  {
    title: (props) =>
      routeDefaultTitleGenerator({ ...props, title: 'Star Wars Encyclopedia' }),
    name: 'home',
    Page: (props) => <HomeViewmodel {...props} />
  },
  {
    title: (props) =>
      routeDefaultTitleGenerator({ ...props, title: 'Details' }),
    name: 'details',
    Page: (props) => <CategoryViewmodel {...props} />
  },
  {
    title: (props) =>
      routeDefaultTitleGenerator({ ...props, title: 'Character' }),
    name: 'character',
    Page: (props) => <CharacterViewmodel {...props} />
  },
  {
    title: (props) => routeDefaultTitleGenerator({ ...props, title: 'Planet' }),
    name: 'planet',
    Page: (props) => <PlanetViewmodel {...props} />
  },
  {
    title: (props) =>
      routeDefaultTitleGenerator({ ...props, title: 'Vehicle' }),
    name: 'vehicle',
    Page: (props) => <VehicleViewmodel {...props} />
  },
  {
    title: (props) =>
      routeDefaultTitleGenerator({ ...props, title: 'Starship' }),
    name: 'starship',
    Page: (props) => <StarshipViewmodel {...props} />
  },
  {
    title: (props) => routeDefaultTitleGenerator({ ...props, title: 'Film' }),
    name: 'film',
    Page: (props) => <FilmViewmodel {...props} />
  },
  {
    title: (props) => routeDefaultTitleGenerator({ ...props, title: 'Specie' }),
    name: 'specie',
    Page: (props) => <SpecieViewmodel {...props} />
  }
];
