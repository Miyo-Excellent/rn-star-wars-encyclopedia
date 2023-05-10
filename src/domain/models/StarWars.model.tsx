import { getStarWarsModelIdFromUrl } from '@utils/getStarWarsModelIdFromUrl';

export interface StarWarsData {
  readonly url: string;
}

export class StarWarsModel implements StarWarsData {
  readonly id: number;
  readonly url: string;

  constructor(data: StarWarsData) {
    this.id = getStarWarsModelIdFromUrl(data.url);
    this.url = data.url;
  }
}
