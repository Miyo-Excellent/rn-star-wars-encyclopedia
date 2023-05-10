import { StarWarsModel } from './StarWars.model';
import { getStarWarsModelIdFromUrl } from '@utils/getStarWarsModelIdFromUrl';

export interface SpecieData {
  readonly image: string;
  readonly averageHeight: string;
  readonly averageLifespan: string;
  readonly classification: string;
  readonly created: string;
  readonly designation: string;
  readonly edited: string;
  readonly eyeColors: string[];
  readonly hairColors: string[];
  readonly homeWorld: string;
  readonly language: string;
  readonly name: string;
  readonly people: number[];
  readonly films: number[];
  readonly skinColors: string;
  readonly url: string;
}

export class SpecieModel extends StarWarsModel implements SpecieData {
  readonly image: string;
  readonly averageHeight: string;
  readonly averageLifespan: string;
  readonly classification: string;
  readonly created: string;
  readonly designation: string;
  readonly edited: string;
  readonly eyeColors: string[];
  readonly hairColors: string[];
  readonly homeWorld: string;
  readonly language: string;
  readonly name: string;
  readonly people: number[];
  readonly films: number[];
  readonly skinColors: string;

  constructor(data: SpecieData) {
    super({ url: data.url });
    this.image = data.image;
    this.averageHeight = data.averageHeight;
    this.averageLifespan = data.averageLifespan;
    this.classification = data.classification;
    this.created = data.created;
    this.designation = data.designation;
    this.edited = data.edited;
    this.eyeColors = data.eyeColors;
    this.hairColors = data.hairColors;
    this.homeWorld = data.homeWorld;
    this.language = data.language;
    this.name = data.name;
    this.people = data.people;
    this.skinColors = data.skinColors;
    this.films = data.films;
  }

  static toModel(json: any): SpecieModel {
    const {
      image,
      average_height,
      average_lifespan,
      classification,
      created,
      designation,
      edited,
      eye_colors = [],
      hair_colors = [],
      home_world,
      language,
      name,
      people = [],
      skin_colors,
      films = [],
      url
    } = json;

    return new SpecieModel({
      image,
      averageHeight: average_height,
      averageLifespan: average_lifespan,
      classification,
      created,
      designation,
      edited,
      eyeColors: eye_colors.split(', '),
      hairColors: hair_colors.split(', '),
      homeWorld: home_world,
      language,
      name,
      people: people.map(getStarWarsModelIdFromUrl),
      skinColors: skin_colors,
      films: films.map(getStarWarsModelIdFromUrl),
      url
    });
  }
}
