interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export type {ProductProps};
