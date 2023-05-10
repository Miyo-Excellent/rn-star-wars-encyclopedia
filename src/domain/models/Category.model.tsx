export interface CategoryData {
  readonly type:
    | 'characters'
    | 'planets'
    | 'species'
    | 'starships'
    | 'vehicles'
    | 'films';
  readonly title: string;
  readonly uri: string;
}

export class CategoryModel implements CategoryData {
  readonly type:
    | 'characters'
    | 'planets'
    | 'species'
    | 'starships'
    | 'vehicles'
    | 'films';
  readonly title: string;
  readonly uri: string;

  constructor(data: CategoryData) {
    this.type = data.type;
    this.title = data.title;
    this.uri = data.uri;
  }
}
