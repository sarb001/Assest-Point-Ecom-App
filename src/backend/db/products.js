import {v4 as uuid} from "uuid";


export const products = [
  {
    _id: "a1b2c3d4e5f6e7",
    imgSrc: "https://assetpoint.netlify.app/images/book-1.jpg",
    title: "The Psychology of Money",
    author: "by Morgan Housel",
    oldPrice: 399,
    newPrice: 290,
    discount: 40,
    rating: 4.8,
    isBestSeller: true,
    isOutOfStock: false,
    category: "selfHelp",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-2.png",
    title: "Rich Dad Poor Dad",
    author: "by Robert Kiyosaki",
    oldPrice: 499,
    newPrice: 302,
    discount: 39,
    rating: 4.5,
    isBestSeller: false,
    isOutOfStock: false,
    category: "realEstate",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-3.png",
    title: "Let's Talk Money",
    author: "by Monika Halan",
    oldPrice: 399,
    newPrice: 230,
    discount: 42,
    rating: 4.2,
    isBestSeller: false,
    isOutOfStock: false,
    category: "stockInvesting",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-4.jpg",
    title: "The Intelligent Investor",
    author: "by Benjamin Graham",
    oldPrice: 799,
    newPrice: 480,
    discount: 40,
    rating: 4.5,
    isBestSeller: true,
    isOutOfStock: false,
    category: "stockInvesting",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-5.png",
    title: "The Richest Man in Babylon",
    author: "by George Clason",
    oldPrice: 150,
    newPrice: 99,
    discount: 34,
    rating: 4,
    isBestSeller: false,
    isOutOfStock: true,
    category: "selfHelp",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-6.png",
    title: "Richer, Wiser, Happier",
    author: "by William Green",
    oldPrice: 599,
    newPrice: 469,
    discount: 22,
    rating: 4.3,
    isBestSeller: false,
    category: "stockInvesting",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-7.jpg",
    title: "Art of handling money...",
    author: "by Rajiv K. Tayal",
    oldPrice: 550,
    newPrice: 450,
    discount: 18,
    rating: 4.7,
    isBestSeller: false,
    category: "selfHelp",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-8.jpg",
    title: "Rich Dads Cashflow...",
    author: "by Robert Kiyosaki",
    oldPrice: 550,
    newPrice: 321,
    discount: 42,
    rating: 4.1,
    isBestSeller: false,
    isOutOfStock: true,
    category: "selfHelp",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-9.jpg",
    title: "Rich Dads Guide to Investing",
    author: "by Robert Kiyosaki",
    oldPrice: 550,
    newPrice: 321,
    discount: 42,
    rating: 3.5,
    isBestSeller: false,
    isOutOfStock: false,
    category: "selfHelp",
  },
  {
    _id: uuid(),
    imgSrc: "https://assetpoint.netlify.app/images/book-10.png",
    title: "The Millionaire Real Estate...",
    author: "by Gary Keller",
    oldPrice: 1000,
    newPrice: 900,
    discount: 10,
    rating: 4.4,
    isBestSeller: false,
    isOutOfStock: false,
    category: "realEstate",
  },
];