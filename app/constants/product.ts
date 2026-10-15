
export type ProductType =
  | "oil"
  | "shampoo"
  | "comb"
  | "bundle";

export type Product = {
  id: string;
  slug: string;
  name: string;
  type: ProductType;

  tagline: string;
  shortDescription: string;
  description: string;

  originalPrice: number;
  salePrice: number;
  discount: number;

  size?: string;
  formula?: string;
  suitableFor?: string;
  stock: string;

  image: string;
  images: string[];

  bundleItems?: string[];
};

export const PRODUCTS: Product[] = [
  // 1. Signature Hair Oil
  {
    id: "signature-hair-oil",
    slug: "signature-hair-oil",
    name: "R & N Botanics Signature Hair Oil",
    type: "oil",

    tagline: "Our Signature Botanical Blend",

    shortDescription:
      "A botanical hair-care ritual inspired by nature.",


description: "• Helps reduce hair fall \n • Nourishes the scalp\n• Strengthens hair roots\n• Adds natural shine\n• Leaves hair soft and silky\n• Helps care for dry, frizzy hair",
    originalPrice: 1600,
    salePrice: 1440,
    discount: 10,

    size: "100 ml",
    formula: "Botanical Oil Blend",
    suitableFor: "All Hair Types",
    stock: "In Stock",

    image: "/images/product1.jpg",

    images: [
      "/images/product1.jpg",
      "/images/product2.jpg",
      "/images/product3.jpg",
      "/images/product4.jpg",
    ],
  },

  // 2. Coffee Velvet Shampoo
  {
    id: "coffee-velvet-shampoo",
    slug: "coffee-velvet-shampoo",
    name: "R & N Botanics Coffee Velvet Shampoo",
    type: "shampoo",

    tagline: "A Luxurious Coffee-Inspired Hair Ritual",

    shortDescription:
      "Coffee-inspired care for your everyday hair routine.",

    description:
      "Bring a little everyday luxury to wash day with Coffee Velvet Shampoo. Inspired by the rich character of coffee, this hair-care essential is designed to cleanse your hair and leave it feeling fresh, soft, and manageable. A thoughtful addition to your everyday routine.",

    originalPrice: 1500,
    salePrice: 1350,
    discount: 10,

    size: "200 ml",
    suitableFor: "All Hair Types",
    stock: "In Stock",

    image: "/images/shampoo1.jpg",

    images: [
      "/images/shampoo1.jpg",
      "/images/shampoo2.jpg",
      "/images/shampoo3.jpg",
    ],
  },

  // 3. Wooden Comb
  {
    id: "wooden-comb",
    slug: "wooden-comb",
    name: "R & N Botanics Wooden Comb",
    type: "comb",

    tagline: "A Timeless Everyday Essential",

    shortDescription:
      "A simple addition to your daily hair-care ritual.",

    description:
      "Complete your everyday hair-care routine with the R & N Botanics Wooden Comb. Its natural wooden appearance brings a timeless touch to your self-care collection, making it a practical companion for your daily grooming routine.",

    originalPrice: 500,
    salePrice: 500,
    discount: 0,

    suitableFor: "Everyday Hair Care",
    stock: "In Stock",

    image: "/images/comb.jpg",

    images: [
      "/images/comb.jpg",
    ],
  },

  // 4. Oil + Shampoo Bundle
  {
    id: "oil-shampoo-bundle",
    slug: "oil-shampoo-bundle",
    name: "The Botanical Hair Ritual Duo ",
    type: "bundle",

    tagline: "Your Two-Step Hair-Care Ritual",

    shortDescription:
      "Signature Hair Oil + Coffee Velvet Shampoo.",

    description:
      "Bring two essentials together in one convenient bundle. Pair the R & N Botanics Signature Hair Oil with Coffee Velvet Shampoo to create a simple hair-care ritual that fits naturally into your routine. Enjoy both products together at a special bundle price.",

    originalPrice: 3100,
    salePrice: 2480,
    discount: 20,

    suitableFor: "A Complete Hair-Care Routine",
    stock: "In Stock",

    image: "/images/bundle1.jpg",

    images: [
      "/images/bundle1.jpg",
      "/images/bundle1-2.jpg",
    ],

    bundleItems: [
      "R & N Botanics Signature Hair Oil",
      "R & N Botanics Coffee Velvet Shampoo",
    ],
  },

  // 5. Complete Haircare Bundle
  {
    id: "complete-haircare-bundle",
    slug: "complete-haircare-bundle",
    name: "R&N Botanics Complete Haircare Bundle",
    type: "bundle",

    tagline: "Three Essentials. One Thoughtful Routine.",

    shortDescription:
      "Hair Oil + Coffee Velvet Shampoo + Wooden Comb.",

    description:
      "Bring your hair-care essentials together with the Complete Haircare Bundle. Featuring our Signature Hair Oil, Coffee Velvet Shampoo, and Wooden Comb, this collection makes it easy to build a simple routine around your everyday self-care. Enjoy all three products together at a special bundle price.",

    originalPrice: 3600,
    salePrice: 2880,
    discount: 20,

    suitableFor: "Everyday Hair Care",
    stock: "In Stock",

    image: "/images/bundle2.jpg",

    images: [
      "/images/bundle2.jpg",
      "/images/bundle2-2.jpg",
    ],

    bundleItems: [
      "R & N Botanics Signature Hair Oil",
      "R & N Botanics Coffee Velvet Shampoo",
      "R & N Botanics Wooden Comb",
    ],
  },
];

// Backward compatibility for existing components
export const PRODUCT = PRODUCTS[0];
