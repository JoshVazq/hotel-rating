export enum ReviewMode {
    Add,
    View,
    Moderate
}
export class Review {
  id: number;
  user: number;
  hotel: number;
  text: string = '';
  rate: number = 3;
  moderated: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
