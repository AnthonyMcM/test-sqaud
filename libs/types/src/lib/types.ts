export enum EMainHeadingColor {
  'red',
  'blue',
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
