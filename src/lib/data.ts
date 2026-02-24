import p1Img from "../assets/images/IMG2.jpg";
import p2Img from "../assets/images/IMG3.jpg";
import p3Img from "../assets/images/IMG4.jpg";
import p4Img from "../assets/images/IMG5.jpg";
import p5Img from "../assets/images/IMG6.jpg";
import p6Img from "../assets/images/IMG7.jpg";


import img from "../assets/images/IMG8.jpg";

export type Perfume = {
  id: string;
  name: string;
  brand: string;
  price: number;
  gender: 'Men' | 'Women' | 'Unisex';
  type: 'Floral' | 'Woody' | 'Citrus' | 'Spicy' | 'Fresh' | 'Sweet';
  notes: string[];
  description: string;
  imageUrl: string;
};

export const perfumes: Perfume[] = [
  {
    id: "p1",
    name: "Alpine Glacier",
    brand: "Rare Pheromone",
    price: 4999,
    gender: "Men",
    type: "Fresh",
    notes: ["Icy Water", "Mint", "White Musk"],
    description: "A breath of crisp mountain air captured in a bottle. Pure, cool, and invigorating.",
    imageUrl: img
  },
  {
    id: "p2",
    name: "Rare Bloom",
    brand: "Rare Pheromone",
    price: 3499,
    gender: "Women",
    type: "Floral",
    notes: ["Wild Rose", "Jasmine", "Pink Pepper"],
    description: "An enchanting bouquet of rare blossoms that radiates elegance and charm.",
    imageUrl: p2Img
  },
  {
    id: "p3",
    name: "Dusky Dog",
    brand: "Rare Pheromone",
    price: 4299,
    gender: "Men",
    type: "Woody",
    notes: ["Bergamot", "Cedarwood", "Black Pepper"],
    description: "Sophisticated and earthy. A scent that commands presence with subtle strength.",
    imageUrl: p3Img
  },
  {
    id: "p4",
    name: "Velvet Notes",
    brand: "Rare Pheromone",
    price: 3899,
    gender: "Women",
    type: "Sweet",
    notes: ["Vanilla", "Orchid", "Sandalwood"],
    description: "Smooth as velvet, sweet as a dream. A luxuriously comforting fragrance.",
    imageUrl: p4Img
  },
  {
    id: "p5",
    name: "Fruity Paradise",
    brand: "Rare Pheromone",
    price: 3299,
    gender: "Unisex",
    type: "Sweet",
    notes: ["Peach", "Mango", "Passionfruit"],
    description: "A vibrant explosion of tropical fruits that brings sunshine to every moment.",
    imageUrl: p5Img
  },
  {
    id: "p6",
    name: "Alpine Glacier Classic",
    brand: "Rare Pheromone",
    price: 4599,
    gender: "Men",
    type: "Fresh",
    notes: ["Ozone", "Lavender", "Amber"],
    description: "The original fresh scent that redefined masculine elegance.",
    imageUrl: img
  }
];

export const featuredPerfumes = perfumes.slice(0, 3);
export const newArrivals = perfumes.slice(3, 6);
