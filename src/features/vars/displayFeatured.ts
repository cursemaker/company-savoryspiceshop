export interface IDisplayFeatured {
  name: string;
  review: number;
  imgUrl1: string;
  imgUrl2: string;
  price: {
    size: string;
    price: number;
  }[];
}

export const displayFeatured = [
  {
    name: "Taco Soups",
    review: 199,
    imgUrl1: "https://www.savoryspiceshop.com/cdn/shop/files/s_e_taco-soup_f_1_1200x1000.jpg?v=1739378652",
    imgUrl2:
      "https://www.savoryspiceshop.com/cdn/shop/files/taco-soup-overhead-bowl_web-crop_1200x1000.jpg?v=1739378652",
    price: [
      { size: "1 Count", price: 10.99 },
      { size: "3 Count", price: 28.02 },
    ],
  },
  {
    name: "Butter Chicken",
    review: 145,
    imgUrl1: "https://www.savoryspiceshop.com/cdn/shop/files/s_e_butter-chicken_f_1200x1000.jpg?v=1739378606",
    imgUrl2: "https://www.savoryspiceshop.com/cdn/shop/files/Butter-Chicken-7_1200x1000.jpg?v=1739378606",
    price: [
      { size: "1 Count", price: 6.99 },
      { size: "3 Count", price: 17.82 },
    ],
  },
  {
    name: "Thai Coconut Curry Soup",
    review: 121,
    imgUrl2: "https://www.savoryspiceshop.com/cdn/shop/files/thai-coconut-curry2_web-crop_1200x1000.jpg?v=1739378647",
    imgUrl1:
      "https://www.savoryspiceshop.com/cdn/shop/files/s_e_thai-coconut-curry-soup_f_1_1200x1000.jpg?v=1739378647",
    price: [
      { size: "1 Count", price: 7.99 },
      { size: "3 Count", price: 20.37 },
    ],
  },
];
