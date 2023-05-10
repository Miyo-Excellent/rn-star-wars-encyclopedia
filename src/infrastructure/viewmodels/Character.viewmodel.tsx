import { CharacterView } from '@views/Character.view';
import { NavigateProps } from '@components/Navigation';
import { CharacterModel } from '@models/Character.model';
import { useEffect, useMemo, useState } from 'react';
import { StarWarsService } from '@services/starWars.service';
import { FilmModel } from '@models/Film.model';
import { SpecieModel } from '@models/Specie.model';

export interface CharacterViewmodelProps extends NavigateProps {}

export const CharacterViewmodel = ({
  route,
  navigation
}: CharacterViewmodelProps) => {
  const params: any = route.params;
  const data: CharacterModel | undefined = params.data;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [films, setFilms] = useState<FilmModel[]>([]);
  const [species, setSpecies] = useState<SpecieModel[]>([]);

  const starWarsService: StarWarsService = useMemo(
    () => new StarWarsService(),
    []
  );

  useEffect(() => {
    (async () => {
      if (data) {
        setIsLoading(true);

        let models: FilmModel[] = [];
        let species: SpecieModel[] = [];

        const filmsIds: number[] = data.films;
        const speciesIds: number[] = data.films;

        for (const id of filmsIds) {
          const filmData = await starWarsService.getFilm(id);

          models = models.concat(filmData);
        }

        for (const id of speciesIds) {
          const specieData = await starWarsService.getSpecie(id);

          species = species.concat(specieData);
        }

        setFilms(models);
        setSpecies(species);
        setIsLoading(false);
      } else navigation.goBack();
    })();
  }, []);

  if (!data) return null;

  return (
    <CharacterView
      navigation={navigation}
      data={data}
      films={films}
      species={species}
      isLoading={isLoading}
    />
  );
};
