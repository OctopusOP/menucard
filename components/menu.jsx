const menu = {
  restaurantName: "Food Plaza",
  isOpen: true,
  categories: [
    {
      id: 1,
      name: "Starters",
      items: [
        {
          id: 101,
          name: "S24 Ultra",
          price: 99999,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
        {
          id: 102,
          name: "Chicken Lollipop",
          price: 180,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
        {
          id: 103,
          name: "Chicken Lollipop",
          price: 180,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
        {
          id: 104,
          name: "Chicken Lollipop",
          price: 180,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
        {
          id: 105,
          name: "Chicken Lollipop",
          price: 180,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Main Course",
      items: [
        {
          id: 201,
          name: "Paneer Butter Masala",
          price: 220,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
        {
          id: 202,
          name: "Chicken Biryani",
          price: 260,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Beverages",
      items: [
        {
          id: 301,
          name: "Cold Coffee",
          price: 90,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
        {
          id: 302,
          name: "Fresh Lime Soda",
          price: 70,
          available: true,
          imgUrl: "./iphone.png",
        },
        {
          id: 303,
          name: "Battery cocktail",
          price: 70,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Alcholic Beverages",
      items: [
        {
          id: 401,
          name: "Khatti Lassi",
          price: 2000,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
        {
          id: 402,
          name: "pritam kala khatta",
          price: 69000,
          available: true,
          imgUrl:
            "/Users/deepsaha/Documents/NEXTAPPS/app1/assets/Spring-Roll-Recipe.jpg",
        },
      ],
    },
  ],
};
export default menu;

const currentOrders = [
  {
    orderId: 1,
    items: [
      { itemId: 101, name: "Veg Spring Roll", quantity: 2, price: 120 },
      { itemId: 202, name: "Chicken Biryani", quantity: 1, price: 260 },
    ],
    totalAmount: 500,
    status: "Preparing",
  },
  {
    orderId: 2,
    items: [
      { itemId: 201, name: "Paneer Butter Masala", quantity: 1, price: 220 },
      { itemId: 301, name: "Cold Coffee", quantity: 2, price: 90 },
    ],
    totalAmount: 400,
    status: "Delivered",
  },
];
export { currentOrders };
