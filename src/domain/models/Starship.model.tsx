import { CharacterModel } from '@models/Character.model';
import { StarWarsModel } from './StarWars.model';
import { getStarWarsModelIdFromUrl } from '@utils/getStarWarsModelIdFromUrl';

export interface StarshipData {
  readonly image: string;
  readonly MGLT: string;
  readonly characters: CharacterModel[];
  readonly cargoCapacity: string;
  readonly consumables: string;
  readonly costInCredits: string;
  readonly created: string;
  readonly crew: string;
  readonly edited: string;
  readonly hyperDriveRating: string;
  readonly length: string;
  readonly manufacturer: string;
  readonly maxAtmospheringSpeed: string;
  readonly model: string;
  readonly name: string;
  readonly passengers: string;
  readonly films: number[];
  readonly pilots: number[];
  readonly starshipClass: string;
  readonly url: string;
}

export class StarshipModel extends StarWarsModel implements StarshipData {
  readonly image: string;
  readonly MGLT: string;
  readonly characters: CharacterModel[];
  readonly cargoCapacity: string;
  readonly consumables: string;
  readonly costInCredits: string;
  readonly created: string;
  readonly crew: string;
  readonly edited: string;
  readonly hyperDriveRating: string;
  readonly length: string;
  readonly manufacturer: string;
  readonly maxAtmospheringSpeed: string;
  readonly model: string;
  readonly name: string;
  readonly passengers: string;
  readonly films: number[];
  readonly pilots: number[];
  readonly starshipClass: string;
  readonly url: string;

  constructor(data: StarshipData) {
    super({ url: data.url });
    this.image = data.image;
    this.MGLT = data.MGLT;
    this.characters = data.characters;
    this.cargoCapacity = data.cargoCapacity;
    this.consumables = data.consumables;
    this.costInCredits = data.costInCredits;
    this.created = data.created;
    this.crew = data.crew;
    this.edited = data.edited;
    this.hyperDriveRating = data.hyperDriveRating;
    this.length = data.length;
    this.manufacturer = data.manufacturer;
    this.maxAtmospheringSpeed = data.maxAtmospheringSpeed;
    this.model = data.model;
    this.name = data.name;
    this.passengers = data.passengers;
    this.films = data.films;
    this.pilots = data.pilots;
    this.starshipClass = data.starshipClass;
    this.url = data.url;
  }

  static toModel(json: any): StarshipModel {
    const {
      image,
      MGLT,
      characters,
      cargo_capacity,
      consumables,
      cost_in_credits,
      created,
      crew,
      edited,
      hyper_driveRating,
      length,
      manufacturer,
      max_atmosphering_speed,
      model,
      name,
      passengers,
      films,
      pilots,
      starship_class,
      url
    } = json;

    return new StarshipModel({
      image,
      MGLT,
      characters,
      cargoCapacity: cargo_capacity,
      consumables,
      costInCredits: cost_in_credits,
      created,
      crew,
      edited,
      hyperDriveRating: hyper_driveRating,
      length,
      manufacturer,
      maxAtmospheringSpeed: max_atmosphering_speed,
      model,
      name,
      passengers,
      films: films.map(getStarWarsModelIdFromUrl),
      pilots: pilots.map(getStarWarsModelIdFromUrl),
      starshipClass: starship_class,
      url
    });
  }
}
