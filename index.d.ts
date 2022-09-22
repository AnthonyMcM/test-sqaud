export {};

declare global {
  namespace MyNamespace {
    interface ICar {
      make: string;
      model: string;
      reg: string;
      price: number;
    }

    interface ICarFormData extends Omit<ICar, 'price'> {
      price: string;
    }

    interface ICardData extends Omit<ICar, 'price'> {
      price: string;
    }
  }
}
