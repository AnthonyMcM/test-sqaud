export enum EMainHeadingColor {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
}

export interface ICar {
  id: number;
  make: string;
  model: string;
  reg: string;
  price: number;
}

export interface ICarFormData extends Omit<ICar, 'id' | 'price'> {
  price: string;
}

export interface ICardData extends Omit<ICar, 'id' | 'price'> {
  price: string;
}
