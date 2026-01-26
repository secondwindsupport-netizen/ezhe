export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image?: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Eco-Friendly Water Bottle",
    description: "Sustainable stainless steel water bottle that keeps drinks cold for 24 hours",
    longDescription: "This eco-friendly water bottle is made from premium stainless steel and is perfect for daily use. It keeps your drinks cold for 24 hours or hot for 12 hours. BPA-free and dishwasher safe. Available in multiple colors.",
    price: 29.99,
    category: "Essentials",
  },
  {
    id: "2",
    name: "Reusable Shopping Bag Set",
    description: "Durable cotton shopping bags for everyday use",
    longDescription: "A set of 5 reusable shopping bags made from organic cotton. These bags are washable, foldable, and can hold up to 25 lbs. Perfect for grocery shopping and everyday errands. Help reduce plastic waste with style.",
    price: 24.99,
    category: "Essentials",
  },
  {
    id: "3",
    name: "Solar-Powered LED Lantern",
    description: "Portable solar lantern for camping and emergencies",
    longDescription: "This solar-powered LED lantern is perfect for outdoor adventures or emergency situations. It charges via USB or solar panel, has multiple brightness settings, and is weather-resistant. Ideal for camping, hiking, or power outages.",
    price: 39.99,
    category: "Outdoor",
  },
  {
    id: "4",
    name: "Compostable Food Storage Containers",
    description: "Biodegradable containers for food storage",
    longDescription: "Set of 12 compostable food storage containers made from plant-based materials. Microwave and freezer safe. These containers break down naturally in commercial composting facilities. Perfect for meal prep and leftovers.",
    price: 19.99,
    category: "Kitchen",
  },
  {
    id: "5",
    name: "Bamboo Toothbrush Set",
    description: "Eco-friendly bamboo toothbrushes with soft bristles",
    longDescription: "Pack of 4 bamboo toothbrushes with biodegradable bristles. Made from sustainable bamboo, these toothbrushes are an excellent alternative to plastic. Each brush comes with a compostable packaging. Soft bristles for gentle cleaning.",
    price: 12.99,
    category: "Personal Care",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
