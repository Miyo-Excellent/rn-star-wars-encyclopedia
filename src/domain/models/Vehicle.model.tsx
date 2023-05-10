import { StarWarsModel } from './StarWars.model';
import { getStarWarsModelIdFromUrl } from '@utils/getStarWarsModelIdFromUrl';

export interface VehicleData {
  readonly image: string;
  readonly cargoCapacity: string;
  readonly consumables: string;
  readonly costInCredits: string;
  readonly created: string;
  readonly crew: string;
  readonly edited: string;
  readonly manufacturer: string;
  readonly maxAtmospheringSpeed: string;
  readonly model: string;
  readonly name: string;
  readonly passengers: string;
  readonly pilots: string[];
  readonly films: string;
  readonly url: string;
  readonly vehicleClass: string;
}

export class VehicleModel extends StarWarsModel implements VehicleData {
  readonly image: string;
  readonly cargoCapacity: string;
  readonly consumables: string;
  readonly costInCredits: string;
  readonly created: string;
  readonly crew: string;
  readonly edited: string;
  readonly manufacturer: string;
  readonly maxAtmospheringSpeed: string;
  readonly model: string;
  readonly name: string;
  readonly passengers: string;
  readonly pilots: string[];
  readonly films: string;
  readonly url: string;
  readonly vehicleClass: string;

  constructor(data: VehicleData) {
    super({ url: data.url });
    this.image = data.image;
    this.cargoCapacity = data.cargoCapacity;
    this.consumables = data.consumables;
    this.costInCredits = data.costInCredits;
    this.created = data.created;
    this.crew = data.crew;
    this.edited = data.edited;
    this.manufacturer = data.manufacturer;
    this.maxAtmospheringSpeed = data.maxAtmospheringSpeed;
    this.model = data.model;
    this.name = data.name;
    this.passengers = data.passengers;
    this.pilots = data.pilots;
    this.films = data.films;
    this.url = data.url;
    this.vehicleClass = data.vehicleClass;
  }

  static toModel(json: any): VehicleModel {
    const {
      image,
      cargo_capacity,
      consumables,
      cost_in_credits,
      created,
      crew,
      edited,
      manufacturer,
      max_atmosphering_speed,
      model,
      name,
      passengers,
      pilots,
      films = [],
      url,
      vehicle_class = []
    } = json;

    return new VehicleModel({
      image,
      cargoCapacity: cargo_capacity,
      consumables,
      costInCredits: cost_in_credits,
      created,
      crew,
      edited,
      manufacturer,
      maxAtmospheringSpeed: max_atmosphering_speed,
      model,
      name,
      passengers,
      pilots,
      films: films.map(getStarWarsModelIdFromUrl),
      url,
      vehicleClass: vehicle_class,
    });
  }
}
