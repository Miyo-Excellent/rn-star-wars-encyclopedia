import { StarWarsModel } from './StarWars.model';
import { getStarWarsModelIdFromUrl } from '@utils/getStarWarsModelIdFromUrl';

export interface PlanetData {
  readonly image: string;
  readonly climate: string;
  readonly created: string;
  readonly diameter: string;
  readonly edited: string;
  readonly films: number[];
  readonly gravity: string;
  readonly name: string;
  readonly orbitalPeriod: string;
  readonly population: string;
  readonly residents: number[];
  readonly rotationPeriod: string;
  readonly surfaceWater: string;
  readonly terrain: string;
  readonly url: string;
}

export class PlanetModel extends StarWarsModel implements PlanetData {
  readonly image: string;
  readonly climate: string;
  readonly created: string;
  readonly diameter: string;
  readonly edited: string;
  readonly films: number[];
  readonly gravity: string;
  readonly name: string;
  readonly orbitalPeriod: string;
  readonly population: string;
  readonly residents: number[];
  readonly rotationPeriod: string;
  readonly surfaceWater: string;
  readonly terrain: string;

  constructor(data: PlanetData) {
    super({ url: data.url });
    this.image = data.image;
    this.climate = data.climate;
    this.created = data.created;
    this.diameter = data.diameter;
    this.edited = data.edited;
    this.films = data.films;
    this.gravity = data.gravity;
    this.name = data.name;
    this.orbitalPeriod = data.orbitalPeriod;
    this.population = data.population;
    this.residents = data.residents;
    this.rotationPeriod = data.rotationPeriod;
    this.surfaceWater = data.surfaceWater;
    this.terrain = data.terrain;
  }

  static toModel(json: any): PlanetModel {
    const {
      image,
      climate,
      created,
      diameter,
      edited,
      films = [],
      gravity,
      name,
      orbital_period,
      population,
      residents = [],
      rotation_period,
      surface_ater,
      terrain,
      url
    } = json;

    return new PlanetModel({
      image,
      climate: climate,
      created,
      diameter: diameter,
      edited,
      films: films.map(getStarWarsModelIdFromUrl),
      gravity,
      name,
      orbitalPeriod: orbital_period,
      population: population,
      residents: residents.map(getStarWarsModelIdFromUrl),
      rotationPeriod: rotation_period,
      surfaceWater: surface_ater,
      terrain,
      url
    });
  }
}
