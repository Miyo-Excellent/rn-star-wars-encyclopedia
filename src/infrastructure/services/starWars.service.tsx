import axios, { AxiosResponse } from 'axios';
import { StarWarsServiceData } from '@servicesData/starWars.serviceData';
import { FilmModel } from '@models/Film.model';
import { CharacterModel } from '@models/Character.model';
import { PlanetModel } from '@models/Planet.model';
import { SpecieModel } from '@models/Specie.model';
import { StarshipModel } from '@models/Starship.model';
import { VehicleModel } from '@models/Vehicle.model';
import { getStarWarsModelIdFromUrl } from '@utils/getStarWarsModelIdFromUrl';

export class StarWarsService implements StarWarsServiceData {
  readonly filmsUrl: string = '/films';
  readonly peoplesUrl: string = '/people';
  readonly planetsUrl: string = '/planets';
  readonly querySearchKey: string = 'search';
  readonly speciesUrl: string = '/species';
  readonly starshipsUrl: string = '/starships';
  readonly urlBase: string = 'https://swapi.dev/api';
  readonly urlImageBase: string = 'https://starwars-visualguide.com/assets/img';
  readonly vehiclesUrl: string = '/vehicles';

  async parseCollection<Model>(
    data: any[],
    category:
      | 'characters'
      | 'planets'
      | 'species'
      | 'starships'
      | 'vehicles'
      | 'films',
    toModel: (json: any) => Model
  ): Promise<Model[]> {
    const raws = [];

    for (const raw of data) {
      const id: number = getStarWarsModelIdFromUrl(raw.url);
      const image: string = this.getImage(category, id);

      raws.push({ ...raw, image });
    }

    return raws.map<Model>((raw: any) => toModel(raw));
  }

  getQuerySearch(query: string): string {
    return `${this.querySearchKey}=${query}`;
  }

  getImage(
    category:
      | 'characters'
      | 'planets'
      | 'species'
      | 'starships'
      | 'vehicles'
      | 'films',
    id: number
  ): string {
    return `${this.urlImageBase}/${category}/${id}.jpg`;
  }

  async getFilm(id: number): Promise<FilmModel> {
    try {
      const url: string = `${this.urlBase}${this.filmsUrl}/${id}`;
      const response: AxiosResponse = await axios.get(url);
      const image: string = this.getImage('films', id);
      return FilmModel.toModel({ ...response.data, image });
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message || '');
    }
  }

  async getCharacter(id: number): Promise<CharacterModel> {
    try {
      const url: string = `${this.urlBase}${this.peoplesUrl}/${id}`;
      const response: AxiosResponse = await axios.get(url);
      const image: string = this.getImage('characters', id);
      return CharacterModel.toModel({ ...response.data, image });
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message || '');
    }
  }

  async getPlanet(id: number): Promise<PlanetModel> {
    try {
      const url: string = `${this.urlBase}${this.planetsUrl}/${id}`;
      const response: AxiosResponse = await axios.get(url);
      const image: string = this.getImage('planets', id);
      return PlanetModel.toModel({ ...response.data, image });
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message || '');
    }
  }

  async getSpecie(id: number): Promise<SpecieModel> {
    try {
      const url: string = `${this.urlBase}${this.speciesUrl}/${id}`;
      const response: AxiosResponse = await axios.get(url);
      const image: string = this.getImage('species', id);
      return SpecieModel.toModel({ ...response.data, image });
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message || '');
    }
  }

  async getStarship(id: number): Promise<StarshipModel> {
    try {
      const url: string = `${this.urlBase}${this.starshipsUrl}/${id}`;
      const response: AxiosResponse = await axios.get(url);
      const image: string = this.getImage('starships', id);
      return StarshipModel.toModel({ ...response.data, image });
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message || '');
    }
  }

  async getVehicle(id: number): Promise<VehicleModel> {
    try {
      const url: string = `${this.urlBase}${this.vehiclesUrl}/${id}`;
      const response: AxiosResponse = await axios.get(url);
      const image: string = this.getImage('vehicles', id);
      return VehicleModel.toModel({ ...response.data, image });
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message || '');
    }
  }

  async getFilms(): Promise<FilmModel[]> {
    try {
      const url: string = `${this.urlBase}${this.filmsUrl}`;
      const response: AxiosResponse = await axios.get(url);
      return this.parseCollection<FilmModel>(
        response.data.results,
        'films',
        FilmModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getCharacters(): Promise<CharacterModel[]> {
    try {
      const url: string = `${this.urlBase}${this.peoplesUrl}`;
      const response = await axios.get(url);

      return this.parseCollection<CharacterModel>(
        response.data.results,
        'characters',
        CharacterModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getPlanets(): Promise<PlanetModel[]> {
    try {
      const url: string = `${this.urlBase}${this.planetsUrl}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<PlanetModel>(
        response.data.results,
        'planets',
        PlanetModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getSpecies(): Promise<SpecieModel[]> {
    try {
      const url: string = `${this.urlBase}${this.speciesUrl}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<SpecieModel>(
        response.data.results,
        'species',
        SpecieModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getStarships(): Promise<StarshipModel[]> {
    try {
      const url: string = `${this.urlBase}${this.starshipsUrl}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<StarshipModel>(
        response.data.results,
        'starships',
        StarshipModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getVehicles(): Promise<VehicleModel[]> {
    try {
      const url: string = `${this.urlBase}${this.vehiclesUrl}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<VehicleModel>(
        response.data.results,
        'vehicles',
        VehicleModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchFilms(query: string): Promise<FilmModel[]> {
    try {
      const url: string = `${this.urlBase}${
        this.filmsUrl
      }?${this.getQuerySearch(query)}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<FilmModel>(
        response.data.results,
        'films',
        FilmModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchCharacters(query: string): Promise<CharacterModel[]> {
    try {
      const url: string = `${this.urlBase}${
        this.filmsUrl
      }?${this.getQuerySearch(query)}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<CharacterModel>(
        response.data.results,
        'characters',
        CharacterModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchPlanets(query: string): Promise<PlanetModel[]> {
    try {
      const url: string = `${this.urlBase}${
        this.filmsUrl
      }?${this.getQuerySearch(query)}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<PlanetModel>(
        response.data.results,
        'planets',
        PlanetModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchSpecies(query: string): Promise<SpecieModel[]> {
    try {
      const url: string = `${this.urlBase}${
        this.filmsUrl
      }?${this.getQuerySearch(query)}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<SpecieModel>(
        response.data.results,
        'species',
        SpecieModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchStarships(query: string): Promise<StarshipModel[]> {
    try {
      const url: string = `${this.urlBase}${
        this.filmsUrl
      }?${this.getQuerySearch(query)}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<StarshipModel>(
        response.data.results,
        'starships',
        StarshipModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchVehicles(query: string): Promise<VehicleModel[]> {
    try {
      const url: string = `${this.urlBase}${
        this.filmsUrl
      }?${this.getQuerySearch(query)}`;
      const response: AxiosResponse = await axios.get(url);

      return this.parseCollection<VehicleModel>(
        response.data.results,
        'vehicles',
        VehicleModel.toModel
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
