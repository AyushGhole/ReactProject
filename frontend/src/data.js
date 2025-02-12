const { v4: uuidv4 } = require("uuid");

const foodData = [
  {
    id: uuidv4(),
    name: "Butter Chicken",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    rating: 4,
    brief: "A rich and creamy tomato-based curry with succulent chicken.",
  },
  {
    id: uuidv4(),
    name: "Paneer Tikka",
    image:
      "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 3.2,
    brief: "Marinated paneer cubes grilled to perfection with spices.",
  },
  {
    id: uuidv4(),
    name: "Biryani",
    image:
      "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.5,
    brief:
      "Aromatic and flavorful rice dish cooked with spices and meat or veggies.",
  },
  {
    id: uuidv4(),
    name: "Dosa",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    brief: "A crispy South Indian crepe made from fermented rice and lentils.",
  },
  {
    id: uuidv4(),
    name: "Sushi",
    image:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,
    brief: "A Japanese delicacy with vinegared rice, seafood, and vegetables.",
  },
  {
    id: uuidv4(),
    name: "Pizza",
    image:
      "https://media.istockphoto.com/id/1187993811/photo/foods-high-in-calcium.webp?a=1&b=1&s=612x612&w=0&k=20&c=a1qYkBs1bmUIE5U4RHK9pxTnHzjsfhMUHTp-RVB0M8c=",
    rating: 4.9,
    brief: "Italian classic with cheese, tomato sauce, and various toppings.",
  },
  {
    id: uuidv4(),
    name: "Burger",
    image:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=PDAOJZowRgcFpLORXCV5p9Yt4wuOlxpYkxOUk5M4koo=",
    rating: 3.4,
    brief: "Juicy patty sandwiched in a bun with fresh veggies and sauces.",
  },
  {
    id: uuidv4(),
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,
    brief: "Italian delight with creamy or tangy sauce and cooked pasta.",
  },
  {
    id: uuidv4(),
    name: "Momos",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    rating: 4.3,
    brief:
      "Tibetan dumplings stuffed with veggies or meat, served with chutney.",
  },
  {
    id: uuidv4(),
    name: "Chole Bhature",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 3.5,
    brief:
      "A North Indian combo of spicy chickpea curry with deep-fried bread.",
  },
  {
    id: uuidv4(),
    name: "Shawarma",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 3.9,
    brief: "Middle Eastern wrap with grilled meat, veggies, and sauces.",
  },
  {
    id: uuidv4(),
    name: "Tacos",
    image:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
    rating: 4.9,
    brief:
      "Mexican street food with soft or hard shell filled with meat and salsa.",
  },
  {
    id: uuidv4(),
    name: "Pani Puri",
    image:
      "https://media.istockphoto.com/id/1309964339/photo/rajma-chawal-an-indian-food.jpg?s=612x612&w=0&k=20&c=16jGWMYDvRVyTIOv-xBjH_JToctwIji_bomw2nl_JcE=",
    rating: 4,
    brief: "Crispy puris filled with spicy, tangy water and mashed potatoes.",
  },
  {
    id: uuidv4(),
    name: "Samosa",
    image:
      "https://media.istockphoto.com/id/1196033348/photo/lunch-in-an-outdoor-cafe-by-the-sea-or-ocean-slices-of-fried-fish-and-french-fries-with.jpg?s=612x612&w=0&k=20&c=_S-mUiCj_A8VR_u_uCgPEOKGLN3zzHgM-PhdOYsnKGI=",
    rating: 4.9,
    brief: "Deep-fried pastry stuffed with spicy potato filling.",
  },
  {
    id: uuidv4(),
    name: "Ice Cream",
    image:
      "https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=QHrM65XqDQd3Z50r5cT2qV4nwctw6rNMM1JTlGEEVzI=",
    rating: 4.5,
    brief: "Frozen dessert available in various flavors and toppings.",
  },
  {
    id: uuidv4(),
    name: "Falooda",
    image:
      "https://media.istockphoto.com/id/500920935/photo/hamburger-with-cutlet-breaded.jpg?s=612x612&w=0&k=20&c=HGkZAzHvFXZnhsu_qy9oUVMQGq-IokL2CFdMENzMjJ4=",
    rating: 4.9,
    brief: "A royal Indian dessert with vermicelli, ice cream, and rose syrup.",
  },
  {
    id: uuidv4(),
    name: "Jalebi",
    image:
      "https://media.istockphoto.com/id/1218213212/photo/homemade-french-fries-with-ketchup-and-mayonnaise-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=pcDdMy3oCZ1g_-0nWtmo0nZpbg2W7wdRjjNcMTKdN7U=",
    rating: 3.9,
    brief: "Deep-fried spiral sweet soaked in sugar syrup.",
  },
  {
    id: uuidv4(),
    name: "Gulab Jamun",
    image:
      "https://media.istockphoto.com/id/1180580654/photo/indian-sweets-jalebi-and-gulab-jamun-served-in-plate.jpg?s=612x612&w=0&k=20&c=tXo5bM0Y5rfndW9HPxg73Vsss6kgE7cdkSYzZOEQhm4=",
    rating: 3.5,
    brief: "Soft deep-fried dumplings soaked in saffron-flavored sugar syrup.",
  },
  {
    id: uuidv4(),
    name: "Kheer",
    image:
      "https://media.istockphoto.com/id/1040749178/photo/thali-meal-indian-food.jpg?s=612x612&w=0&k=20&c=rFN8W5zVH-lCOLzf3n_wLWXBvOOIX4WP2Jh3bZ0YAgU=",
    rating: 4.8,
    brief: "A traditional Indian rice pudding cooked with milk and nuts.",
  },
  {
    id: uuidv4(),
    name: "Malai Kofta",
    image:
      "https://media.istockphoto.com/id/1219174110/photo/malai-kofta-curry-in-black-bowl-at-dark-slate-background-malai-kofta-is-indian-cuisine-dish.jpg?s=612x612&w=0&k=20&c=YBusjVmB35Q0AAFuMs48KRLNgnDQuL1dONJ0EBYwS9M=",
    rating: 5,
    brief: "Soft paneer dumplings in a rich, creamy tomato-based curry.",
  },
  {
    id: uuidv4(),
    name: "Hakka Noodles",
    image:
      "https://media.istockphoto.com/id/1319841389/photo/woman-with-fork-picking-up-indo-chinese-manchurian-hakka-street-food-noodles-from-a-black.jpg?s=612x612&w=0&k=20&c=ULzAq6g4Chj3ZABss4U4xsx37n8JkdNXH0S8xY6pf8o=",
    rating: 5,
    brief: "Indo-Chinese stir-fried noodles with veggies and sauces.",
  },
];

export default foodData;
