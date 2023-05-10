import { StarWarsModel } from '@models/StarWars.model';
import { getStarWarsModelIdFromUrl } from '@utils/getStarWarsModelIdFromUrl';

export interface FilmData {
  readonly image: string;
  readonly characters: number[];
  readonly created: string;
  readonly director: string;
  readonly edited: string;
  readonly episodeId: string;
  readonly openingCrawl: string;
  readonly planets: number[];
  readonly producer: string[];
  readonly releaseDate: string;
  readonly species: number[];
  readonly starships: number[];
  readonly title: string;
  readonly url: string;
  readonly vehicles: number[];
}

export class FilmModel extends StarWarsModel implements FilmData {
  readonly image: string;
  readonly characters: number[];
  readonly created: string;
  readonly director: string;
  readonly edited: string;
  readonly episodeId: string;
  readonly openingCrawl: string;
  readonly planets: number[];
  readonly producer: string[];
  readonly releaseDate: string;
  readonly species: number[];
  readonly starships: number[];
  readonly title: string;
  readonly url: string;
  readonly vehicles: number[];

  constructor(data: FilmData) {
    super({ url: data.url });
    this.image = data.image;
    this.characters = data.characters;
    this.created = data.created;
    this.director = data.director;
    this.edited = data.edited;
    this.episodeId = data.episodeId;
    this.openingCrawl = data.openingCrawl;
    this.planets = data.planets;
    this.producer = data.producer;
    this.releaseDate = data.releaseDate;
    this.species = data.species;
    this.starships = data.starships;
    this.title = data.title;
    this.url = data.url;
    this.vehicles = data.vehicles;
  }

  static toModel(json: any): FilmModel {
    const {
      image,
      characters = [],
      created,
      director,
      edited,
      episode_id,
      opening_crawl,
      planets = [],
      producer = [],
      release_date,
      species = [],
      starships = [],
      title,
      url,
      vehicles = []
    } = json;

    return new FilmModel({
      image,
      characters: characters.map(getStarWarsModelIdFromUrl),
      created: created,
      director: director,
      edited: edited,
      episodeId: episode_id,
      openingCrawl: opening_crawl,
      planets: planets.map(getStarWarsModelIdFromUrl),
      producer: producer.split(', '),
      releaseDate: release_date,
      species: species.map(getStarWarsModelIdFromUrl),
      starships: starships.map(getStarWarsModelIdFromUrl),
      title: title,
      url: url,
      vehicles: vehicles.map(getStarWarsModelIdFromUrl)
    });
  }
}
