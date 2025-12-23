import iphone_image from "./iphone.png";
import s24_image from "./s24.png";
import rai from "./rai.png";

export const assets = {
  iphone_image,
  s24_image,
  rai,
};

export const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#efe70eff"
    >
      <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
    </svg>
  );
};

export const HeadphoneImage = () => {
  return (
    <>
      <img
        className="h-50 w-50"
        src="https://m.media-amazon.com/images/I/61XvYOrqVeL.jpg"
      ></img>
    </>
  );
};

export const ProductDummyData = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 999,
    image: iphone_image,
    rating: 4.3,
  },
  {
    id: 2,
    name: "Samsung S24 Ultra",
    price: 899,
    image: s24_image,
    rating: 2.3,
  },
  {
    id: 3,
    name: "Boat Headphone",
    price: 749,
    image: "https://m.media-amazon.com/images/I/61XvYOrqVeL.jpg",
    rating: 1.3,
  },
  {
    id: 4,
    name: "Pixel 9 Pro",
    price: 799,
    image: "https://m.media-amazon.com/images/I/61XvYOrqVeL.jpg",
  },
  {
    id: 5,
    name: "Xiaomi 14 Ultra",
    price: 699,
    image: "https://m.media-amazon.com/images/I/61XvYOrqVeL.jpg",
  },
  {
    id: 6,
    name: "Raii's Phone",
    price: 999,
    image: rai,
    rating: 5,
  },
  {
    id: 7,
    name: "Samsung S24 Ultra",
    price: 899,
    image: "https://m.media-amazon.com/images/I/61XvYOrqVeL.jpg",
  },
  {
    id: 8,
    name: "OnePlus 12",
    price: 749,
    image: "https://m.media-amazon.com/images/I/61XvYOrqVeL.jpg",
  },
  {
    id: 9,
    name: "Pixel 9 Pro",
    price: 799,
    image: "https://m.media-amazon.com/images/I/61XvYOrqVeL.jpg",
  },
  {
    id: 10,
    name: "Xiaomi 14 Ultra",
    price: 699,
    image: "https://m.media-amazon.com/images/I/61XvYOrqVeL.jpg",
  },
];
