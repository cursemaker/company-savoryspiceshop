
export interface IDisplayProducts {
    name: string;
    review: number;
    imgUrl1: string;
    imgUrl2: string;
    price: {
      size: string;
      weight: number;
      price: number;
    }[];
}

export const displayProducts = [
  {
    name: "Italian Herbs",
    review: 218,
    imgUrl1:
      "https://cdn.shopify.com/s/files/1/0564/3904/6331/products/italian-herbs_jar-crop_400x400.jpg?v=1739378791",
    imgUrl2: "https://cdn.shopify.com/s/files/1/0564/3904/6331/products/italian-herbs_macro_spoon.jpg?v=1739378791",
    price: [
      { size: "Medium Jar", weight: 0.75, price: 5.95 },
      { size: "1/2 Cup Bag", weight: 0.7, price: 5.5 },
      { size: "1 Cup Bag", weight: 1.4, price: 8.99 },
      { size: "2 Cup Bag", weight: 2.8, price: 14.99 },
    ],
  },
  {
    name: "Capitol Hill Seasoning",
    review: 501,
    imgUrl1:
      "https://cdn.shopify.com/s/files/1/0564/3904/6331/products/capitol-hill-seasoning_jar-crop_400x400.jpg?v=1739378908",
    imgUrl2:
      "https://cdn.shopify.com/s/files/1/0564/3904/6331/products/capitol-hill-seasoning_spoon_macro.jpg?v=1739378909",
    price: [
      { size: "Medium Jar", weight: 1.25, price: 9.95 },
      { size: "1/2 Cup Bag", weight: 1.2, price: 9.5 },
      { size: "1 Cup Bag", weight: 2.4, price: 15.99 },
      { size: "3 Cup Bag", weight: 7.2, price: 38.99 },
    ],
  },
  {
    name: "Taco Seasoning",
    review: 279,
    imgUrl1:
      "https://cdn.shopify.com/s/files/1/0564/3904/6331/products/taco-seasoning_jar-crop_400x400.jpg?v=1741095441",
    imgUrl2: "https://cdn.shopify.com/s/files/1/0564/3904/6331/products/taco-seasoning_spoon_macro.jpg?v=1741095441",
    price: [
      { size: "Medium Jar", weight: 2.4, price: 9.95 },
      { size: "1 Cup Bag", weight: 4.7, price: 15.99 },
      { size: "2 Cup Bag", weight: 9.4, price: 25.99 },
      { size: "3 Cup Bag", weight: 14.1, price: 38.99 },
    ],
  },
  {
    name: "Supreme Saigon Cinnamon",
    review: 317,
    imgUrl1:
      "https://cdn.shopify.com/s/files/1/0564/3904/6331/products/supreme-saigon-cinnamon_jar-crop_400x400.jpg?v=1739378823",
    imgUrl2:
      "https://cdn.shopify.com/s/files/1/0564/3904/6331/products/supreme-saigon-cinnamon_spoon_macro.jpg?v=1739378823",

    price: [
      { size: "Medium Jar", weight: 1.85, price: 8.95 },
      { size: "1/2 Cup Bag", weight: 1.55, price: 8.5 },
      { size: "1 Cup Bag", weight: 3.1, price: 13.99 },
      { size: "2 Cup Bag", weight: 6.2, price: 22.99 },
    ],
  },
];
