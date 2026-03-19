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
    name: "Grip Assist",
    description: "The grip assistor is used to help hold instruments, drawing/eating utensils, or any other tool. They can be attached to the hand, forearm, foot, or ankle, and the zip-tie mechanism allows for a tight hold on the tool to prevent slippage.",
    longDescription: "The grip assistor is used to help hold instruments, drawing/eating utensils, or any other tool. They can be attached to the hand, forearm, foot, or ankle, and the zip-tie mechanism allows for a tight hold on the tool to prevent slippage.",
    price: 29.99,
    category: "Essentials",
    image: "/images/grip-assist.png",
  },
  {
    id: "2",
    name: "Grip Assist Extended",
    description: "The grip assistor is used to help hold instruments, drawing/eating utensils, or any other tool. They can be attached to the hand, forearm, foot, or ankle, and the zip-tie mechanism allows for a tight hold on the tool to prevent slippage. An extra strap is provided to attach to the body, providing extra strength and stability.",
    longDescription: "The grip assistor is used to help hold instruments, drawing/eating utensils, or any other tool. They can be attached to the hand, forearm, foot, or ankle, and the zip-tie mechanism allows for a tight hold on the tool to prevent slippage. An extra strap is provided to attach to the body, providing extra strength and stability.",
    price: 24.99,
    category: "Essentials",
    image: "/images/grip-assist-extended.png",
  },
  {
    id: "3",
    name: "Kazoo - Patient",
    description: "The patient kazoo attaches to a pop tube, allowing for the patient to safely insert the tube under their mask and play even in isolation conditions. The kazoo includes a built-in mask within the body to still filter out any particles that may be blown airborne by the patient.",
    longDescription: "The patient kazoo attaches to a pop tube, allowing for the patient to safely insert the tube under their mask and play even in isolation conditions. The kazoo includes a built-in mask within the body to still filter out any particles that may be blown airborne by the patient.",
    price: 39.99,
    category: "Essentials",
    image: "/images/kazoo-patient.png",
  },
  {
    id: "4",
    name: "Kazoo - Provider",
    description: "The provider kazoo attaches to a pop tube, allowing for the provider to safely insert the tube under their mask and play even in isolation conditions. The kazoo includes a built-in mask tray within the body to still filter out any particles that may be blown airborne by the patient. The tray can also be removed and exchanged between patients to prevent cross contamination.",
    longDescription: "The provider kazoo attaches to a pop tube, allowing for the provider to safely insert the tube under their mask and play even in isolation conditions. The kazoo includes a built-in mask tray within the body to still filter out any particles that may be blown airborne by the patient. The tray can also be removed and exchanged between patients to prevent cross contamination.",
    price: 19.99,
    category: "Essentials",
    image: "/images/kazoo-provider.png",
  },
  {
    id: "5",
    name: "Slide Whistle",
    description: "The slide whistle is an easy to play instrument that uses a whistle tip to produce a sound, and a plunger system to adjust the length of the instrument chamber. It includes a full octave range, allowing users to play their favorite songs!",
    longDescription: "The slide whistle is an easy to play instrument that uses a whistle tip to produce a sound, and a plunger system to adjust the length of the instrument chamber. It includes a full octave range, allowing users to play their favorite songs!",
    price: 12.99,
    category: "Essentials",
    image: "/images/slide-whistle.png",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
