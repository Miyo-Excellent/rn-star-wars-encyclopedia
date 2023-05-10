import { CharacterModel } from '@models/Character.model';
import { PlanetModel } from '@models/Planet.model';
import { SpecieModel } from '@models/Specie.model';
import { StarshipModel } from '@models/Starship.model';
import { VehicleModel } from '@models/Vehicle.model';
import { FilmModel } from '@models/Film.model';

export interface StarWarsServiceData {
  readonly urlBase: string;
  readonly querySearchKey: string;
  readonly peoplesUrl: string;
  readonly planetsUrl: string;
  readonly speciesUrl: string;
  readonly starshipsUrl: string;
  readonly vehiclesUrl: string;
  readonly filmsUrl: string;

  parseCollection<Model>(
    data: any,
    category:
      | 'characters'
      | 'planets'
      | 'species'
      | 'starships'
      | 'vehicles'
      | 'films',
    toModel: (json: any) => Model
  ): Promise<Model[]>;

  searchCharacters(query: string): Promise<CharacterModel[]>;

  searchPlanets(query: string): Promise<PlanetModel[]>;

  searchSpecies(query: string): Promise<SpecieModel[]>;

  searchStarships(query: string): Promise<StarshipModel[]>;

  searchVehicles(query: string): Promise<VehicleModel[]>;

  searchFilms(query: string): Promise<FilmModel[]>;

  getQuerySearch(query: string): string;

  getImage(
    category:
      | 'characters'
      | 'planets'
      | 'species'
      | 'starships'
      | 'vehicles'
      | 'films',
    id: number
  ): string;

  getCharacters(): Promise<CharacterModel[]>;

  getPlanets(): Promise<PlanetModel[]>;

  getSpecies(): Promise<SpecieModel[]>;

  getStarships(): Promise<StarshipModel[]>;

  getVehicles(): Promise<VehicleModel[]>;

  getFilms(): Promise<FilmModel[]>;

  getQuerySearch(query: string): string;

  getCharacter(id: number): Promise<CharacterModel>;

  getPlanet(id: number): Promise<PlanetModel>;

  getSpecie(id: number): Promise<SpecieModel>;

  getStarship(id: number): Promise<StarshipModel>;

  getVehicle(id: number): Promise<VehicleModel>;

  getFilm(id: number): Promise<FilmModel>;
}
