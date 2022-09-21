export {};

declare global {
  namespace MyNamespace {
    interface ICar {
      id: number;
      make: string;
      model: string;
      reg: string;
      price: number;
    }

    interface ICarFormData extends Omit<ICar, 'id' | 'price'> {
      price: string;
    }

    interface ICardData extends Omit<ICar, 'id' | 'price'> {
      price: string;
    }
  }
}
