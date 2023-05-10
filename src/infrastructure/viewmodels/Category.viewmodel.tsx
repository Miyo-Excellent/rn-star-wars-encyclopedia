import { useEffect, useMemo, useState } from 'react';
import { StarWarsService } from '@services/starWars.service';
import { CategoryView } from '@views/Category.view';
import { NavigateProps } from '@components/Navigation';
import { CategoryModel } from '@models/Category.model';
import { CardProps } from '@components/Card';
import { SpecieModel } from '@models/Specie.model';
import { PlanetModel } from '@models/Planet.model';
import { FilmModel } from '@models/Film.model';
import { VehicleModel } from '@models/Vehicle.model';
import { StarshipModel } from '@models/Starship.model';
import { CharacterModel } from '@models/Character.model';
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

export interface CategoryViewmodelProps extends NavigateProps {}

export const CategoryViewmodel = ({
  navigation,
  route
}: CategoryViewmodelProps) => {
  const params: any = route.params;
  const data: CategoryModel | undefined = params.data;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<CardProps[]>([]);

  const onEmptyData = () => {};
  const onLoad = () => {};

  useEffect(() => {
    if (!data) {
      navigation.goBack();
      return onEmptyData;
    }

    return onLoad;
  }, []);

  const starWarsService: StarWarsService = useMemo(
    () => new StarWarsService(),
    []
  );

  const wallpaper: any | undefined = useMemo(() => {
    if (data) {
      switch (data.type) {
        case 'species':
          return starWarsSpeciesWallpaper;
        case 'starships':
          return starWarsStarshipsWallpaper;
        case 'vehicles':
          return starWarsVehiclesWallpaper;
        case 'planets':
          return starWarsPlanetsWallpaper;
        case 'films':
          return starWarsFilmsWallpaper;
        case 'characters':
          return starWarsCharactersWallpaper;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (data) {
        setIsLoading(true);

        switch (data.type) {
          case 'species': {
            const species: SpecieModel[] = await starWarsService.getSpecies();
            const list = species.map<CardProps>((specie) => ({
              data: {
                type: 'species',
                title: specie.name,
                uri: specie.image
              },
              onPress: async (event, category) =>
                navigation.push('specie', { data: specie, title: specie.name })
            }));

            setItems(list);
            break;
          }
          case 'planets': {
            const planets: PlanetModel[] = await starWarsService.getPlanets();

            const list = planets.map<CardProps>((planet) => ({
              data: {
                type: 'planets',
                title: planet.name,
                uri: planet.image
              },
              onPress: async (event, category) =>
                navigation.push('planet', { data: planet, title: planet.name })
            }));

            setItems(list);
            break;
          }
          case 'films': {
            const films: FilmModel[] = await starWarsService.getFilms();

            const list = films.map<CardProps>((film) => ({
              data: {
                type: 'films',
                title: film.title,
                uri: film.image
              },
              onPress: async (event, category) =>
                navigation.push('film', { data: film, title: film.title })
            }));

            setItems(list);
            break;
          }
          case 'vehicles': {
            const vehicles: VehicleModel[] =
              await starWarsService.getVehicles();

            const list = vehicles.map<CardProps>((vehicle) => ({
              data: {
                type: 'vehicles',
                title: vehicle.name,
                uri: vehicle.image
              },
              onPress: async (event, category) =>
                navigation.push('vehicle', {
                  data: vehicle,
                  title: vehicle.name
                })
            }));

            setItems(list);
            break;
          }
          case 'starships': {
            const starships: StarshipModel[] =
              await starWarsService.getStarships();

            const list = starships.map<CardProps>((starship) => ({
              data: {
                type: 'starships',
                title: starship.name,
                uri: starship.image
              },
              onPress: async (event, category) =>
                navigation.push('starship', {
                  data: starship,
                  title: starship.name
                })
            }));

            setItems(list);
            break;
          }
          case 'characters': {
            const characters: CharacterModel[] =
              await starWarsService.getCharacters();

            const list = characters.map<CardProps>((character) => ({
              data: {
                type: 'characters',
                title: character.name,
                uri: character.image
              },
              onPress: async (event, category) =>
                navigation.push('character', {
                  data: character,
                  title: character.name
                })
            }));

            setItems(list);
            break;
          }
          default:
            break;
        }

        setIsLoading(false);
      } else {
        navigation.goBack();
      }
    })();
  }, []);

  if (!data) return null;

  return (
    <CategoryView
      navigation={navigation}
      category={data.type}
      isLoading={isLoading}
      wallpaper={wallpaper}
      items={items}
    />
  );
};
