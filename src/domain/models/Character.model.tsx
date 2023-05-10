import { StarWarsModel } from '@models/StarWars.model';
import { getStarWarsModelIdFromUrl } from '@utils/getStarWarsModelIdFromUrl';

export interface CharacterData {
  readonly image: string;
  readonly birthYear: string;
  readonly eyeColor: string;
  readonly films: number[];
  readonly gender: string;
  readonly hairColor: string;
  readonly height: string;
  readonly homeWorld: string;
  readonly mass: string;
  readonly name: string;
  readonly skinColor: string;
  readonly created: string;
  readonly edited: string;
  readonly species: number[];
  readonly starships: number[];
  readonly url: string;
  readonly vehicles: number[];
}

export class CharacterModel extends StarWarsModel implements CharacterData {
  readonly image: string;
  readonly birthYear: string;
  readonly eyeColor: string;
  readonly films: number[];
  readonly gender: string;
  readonly hairColor: string;
  readonly height: string;
  readonly homeWorld: string;
  readonly mass: string;
  readonly name: string;
  readonly skinColor: string;
  readonly created: string;
  readonly edited: string;
  readonly species: number[];
  readonly starships: number[];
  readonly vehicles: number[];

  constructor(data: CharacterData) {
    super({ url: data.url });
    this.image = data.image;
    this.birthYear = data.birthYear;
    this.eyeColor = data.eyeColor;
    this.films = data.films;
    this.gender = data.gender;
    this.hairColor = data.hairColor;
    this.height = data.height;
    this.homeWorld = data.homeWorld;
    this.mass = data.mass;
    this.name = data.name;
    this.skinColor = data.skinColor;
    this.created = data.created;
    this.edited = data.edited;
    this.species = data.species;
    this.starships = data.starships;
    this.vehicles = data.vehicles;
  }

  static toModel(json: any): CharacterModel {
    const {
      image,
      birth_year,
      eye_color,
      films = [],
      gender,
      hair_color,
      height,
      homeworld,
      mass,
      name,
      skin_color,
      created,
      edited,
      species = [],
      starships = [],
      url,
      vehicles = []
    } = json;

    return new CharacterModel({
      image,
      birthYear: birth_year,
      eyeColor: eye_color,
      films: films.map(getStarWarsModelIdFromUrl),
      gender: gender,
      hairColor: hair_color,
      height: height,
      homeWorld: homeworld,
      mass: mass,
      name: name,
      skinColor: skin_color,
      created: created,
      edited: edited,
      species: species.map(getStarWarsModelIdFromUrl),
      starships: starships.map(getStarWarsModelIdFromUrl),
      url: url,
      vehicles: vehicles.map(getStarWarsModelIdFromUrl)
    });
  }
}
