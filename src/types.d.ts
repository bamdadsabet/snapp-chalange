declare global {
  interface IProduct {
      id: string;
      name: string;
      description: string;
      price: number;
      image: StaticImageData;
  }
}

export {};
