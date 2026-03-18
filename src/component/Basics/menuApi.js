const Menu = [
  {
    id: 1,
    image: "images/maggie.png",
    name: "Maggie",
    category: "breakfast",
    price: 12,
    description:
      "I truly love Maggie — it’s more than just a quick meal, it’s a feeling. It brings back childhood memories for some and fuels late-night conversations for others. With its warm aroma and comforting taste, Maggie creates simple moments of happiness that never go out of style, no matter your age.",
  },
  {
    id: 2,
    image: "images/pizza.png    ",
    name: "Pizza",
    category: "lunch",
    price: 80,
    description:
      "Pizza is a beloved dish that has captured the hearts and taste buds of people worldwide. With its crispy crust, savory tomato sauce, and gooey cheese, pizza offers a delightful combination of flavors and textures. Whether topped with classic ingredients like pepperoni and mushrooms or customized with a variety of toppings, pizza is a versatile and satisfying meal that brings joy to every bite.",
  },
  {
    id: 3,
    image: "images/burger.png",
    name: "Burger",
    category: "evening",
    price: 50,
    description:
      "The burger is a culinary icon that has become a staple in the world of fast food and casual dining. With its juicy patty, soft bun, and an array of toppings, the burger offers a delicious and satisfying meal that appeals to people of all ages. Whether enjoyed with classic ingredients like lettuce, tomato, and cheese or customized with unique flavors and sauces, the burger continues to be a beloved comfort food that brings people together around the table.",
  },
  {
    id: 4,
    image: "images/dosa.png",
    name: "Dosa",
    category: "breakfast",
    price: 30,
    description:
      "Dosa is a popular South Indian dish that has gained international recognition for its unique flavor and versatility. Made from fermented rice and lentil batter, dosa is a thin, crispy crepe that can be enjoyed in various ways. Whether filled with spiced potatoes, served with chutneys and sambar, or enjoyed plain, dosa offers a delightful combination of textures and flavors that make it a beloved breakfast or snack option for people around the world.",
  },
  {
    id: 5,
    image: "images/idli.png",
    name: "Idli",
    category: "breakfast",
    price: 20,
    description:
      "Idli is a traditional South Indian dish that has become a beloved breakfast staple for people around the world. Made from fermented rice and lentil batter, idli is a soft and fluffy steamed cake that offers a delightful combination of textures and flavors. Whether enjoyed with sambar, chutneys, or simply on its own, idli provides a nutritious and satisfying start to the day, making it a cherished part of many breakfast tables.",
  },
  {
    id: 6,
    image: "images/poha.png",
    name: "Poha",
    category: "breakfast",
    price: 25,
    description:
      "Poha is a popular Indian breakfast dish that has gained widespread popularity for its simplicity, flavor, and nutritional value. Made from flattened rice, poha is typically cooked with a combination of spices, vegetables, and sometimes peanuts or other toppings. With its light and fluffy texture, poha offers a delicious and satisfying meal that can be enjoyed on its own or paired with chutneys and yogurt for added flavor. Whether served as a quick breakfast or a comforting snack, poha continues to be a beloved choice for people seeking a tasty and wholesome start to their day.",
  },
  {
    id: 7,
    image: "images/sandwich.png",
    name: "Sandwich",
    category: "lunch",
    price: 40,
    description:
      "The sandwich is a versatile and beloved culinary creation that has become a staple in the world of food. With its simple yet satisfying combination of bread and fillings, the sandwich offers endless possibilities for flavors and textures. Whether it's a classic ham and cheese, a hearty club sandwich, or a creative vegetarian option, the sandwich provides a convenient and delicious meal that can be enjoyed on the go or as a leisurely lunch. Its popularity continues to grow as people around the world embrace the endless variations and combinations that make the sandwich a timeless favorite.",
  },
  {
    id: 8,
    image: "images/samosa.png",
    name: "Samosa",
    category: "evening",
    price: 10,
    description:
      "The samosa is a popular and beloved snack that has become a staple in the world of street food and appetizers. With its crispy, golden-brown exterior and flavorful filling, the samosa offers a delightful combination of textures and tastes. Whether filled with spiced potatoes, peas, meat, or lentils, the samosa provides a satisfying and savory treat that can be enjoyed on its own or paired with chutneys for added flavor. Its popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic snack.",
  },
  {
    id: 9,
    image: "images/pasta.png",
    name: "Pasta",
    category: "lunch",
    price: 60,
    description:
      "Pasta is a beloved and versatile dish that has become a staple in the world of cuisine. With its wide variety of shapes and sizes, pasta offers endless possibilities for flavors and combinations. Whether it's a classic spaghetti with marinara sauce, a creamy fettuccine Alfredo, or a hearty lasagna, pasta provides a comforting and satisfying meal that can be enjoyed by people of all ages. Its popularity continues to grow as people around the world embrace the delicious and diverse nature of this iconic dish.",
  },
  {
    id: 10,
    image: "images/frenchfries.png",
    name: "French Fries",
    category: "evening",
    price: 15,
    description:
      "French fries, also known as chips or fries, are a beloved and iconic snack that has become a staple in the world of fast food and casual dining. With their crispy exterior and soft interior, French fries offer a delightful combination of textures and flavors. Whether enjoyed on their own, dipped in ketchup or other sauces, or served as a side dish to burgers and sandwiches, French fries provide a satisfying and indulgent treat that has captured the hearts and taste buds of people around the world.",
  },
  {
    id: 11,
    image: "images/icecream.png",
    name: "Ice Cream",
    category: "evening",
    price: 25,
    description:
      "Ice cream is a beloved and iconic frozen dessert that has become a staple in the world of sweets and treats. With its creamy texture and wide range of flavors, ice cream offers a delightful combination of taste and indulgence. Whether enjoyed in a cone, a bowl, or as part of a sundae, ice cream provides a refreshing and satisfying treat that can be enjoyed by people of all ages. Its popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dessert.",
  },
  {
    id: 12,
    image: "images/cake.png",
    name: "Cake",
    category: "evening",
    price: 30,
    description:
      "Cake is a beloved and iconic dessert that has become a staple in the world of sweets and celebrations. With its soft and moist texture, cake offers a delightful combination of flavors and indulgence. Whether it's a classic chocolate cake, a rich red velvet, or a light and fluffy vanilla sponge, cake provides a delicious and satisfying treat that can be enjoyed on special occasions or as an everyday indulgence. Its popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dessert.",
  },
  {
    id: 13,
    image: "images/doughnut.png",
    name: "Doughnut",
    category: "evening",
    price: 20,
    description:
      "The doughnut, also known as a donut, is a beloved and iconic sweet treat that has become a staple in the world of desserts and snacks. With its soft and fluffy texture, doughnuts offer a delightful combination of flavors and indulgence. Whether glazed, filled with jelly or cream, or topped with sprinkles, doughnuts provide a delicious and satisfying treat that can be enjoyed on their own or paired with coffee or milk. Their popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dessert.",
  },
  {
    id: 14,
    image: "images/cupcake.png",
    name: "Cupcake",
    category: "evening",
    price: 15,
    description:
      "The cupcake is a beloved and iconic dessert that has become a staple in the world of sweets and celebrations. With its small and individual size, cupcakes offer a delightful combination of flavors and indulgence. Whether it's a classic vanilla cupcake with buttercream frosting, a rich chocolate cupcake with ganache, or a creative flavor combination, cupcakes provide a delicious and satisfying treat that can be enjoyed on special occasions or as an everyday indulgence. Their popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dessert.",
  },
  {
    id: 15,
    image: "images/waffle.png",
    name: "Waffle",
    category: "evening",
    price: 25,
    description:
      "The waffle is a beloved and iconic breakfast treat that has become a staple in the world of desserts and snacks. With its crispy exterior and soft interior, waffles offer a delightful combination of flavors and indulgence. Whether topped with syrup, fresh berries, or whipped cream, waffles provide a delicious and satisfying treat that can be enjoyed for breakfast or as a sweet snack. Their popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dessert.",
  },
  {
    id: 16,
    image: "images/pancake.png",
    name: "Pancake",
    category: "evening",
    price: 20,
    description:
      "The pancake is a beloved and iconic breakfast treat that has become a staple in the world of desserts and snacks. With its fluffy texture and sweet flavor, pancakes offer a delightful combination of taste and indulgence. Whether topped with syrup, fresh fruit, or butter, pancakes provide a delicious and satisfying treat that can be enjoyed for breakfast or as a sweet snack. Their popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dessert.",
  },
  {
    id: 17,
    image: "images/omelette.png",
    name: "Omelette",
    category: "breakfast",
    price: 30,
    description:
      "The omelette is a beloved and iconic breakfast dish that has become a staple in the world of cuisine. With its fluffy texture and savory flavor, omelettes offer a delightful combination of taste and nutrition. Whether filled with cheese, vegetables, or meats, omelettes provide a delicious and satisfying meal that can be enjoyed for breakfast or brunch. Their popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dish.",
  },
  {
    id: 18,
    image: "images/frenchtoast.png",
    name: "French Toast",
    category: "breakfast",
    price: 25,
    description:
      "The French toast is a beloved and iconic breakfast treat that has become a staple in the world of desserts and snacks. With its golden-brown exterior and soft interior, French toast offers a delightful combination of flavors and indulgence. Whether topped with syrup, fresh fruit, or butter, French toast provides a delicious and satisfying treat that can be enjoyed for breakfast or as a sweet snack. Their popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dessert.",
  },
  {
    id: 19,
    image: "images/avocadotoast.png",
    name: "Avocado Toast",
    category: "breakfast",
    price: 35,
    description:
      "The avocado toast is a beloved and iconic breakfast dish that has become a staple in the world of cuisine. With its creamy texture and fresh flavor, avocado toast offers a delightful combination of taste and nutrition. Whether topped with a sprinkle of salt, a drizzle of olive oil, or a poached egg, avocado toast provides a delicious and satisfying meal that can be enjoyed for breakfast or brunch. Their popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dish.",
  },
  {
    id: 20,
    image: "images/smoothiebowl.png",
    name: "Smoothie Bowl",
    category: "breakfast",
    price: 40,
    description:
      "The smoothie bowl is a beloved and iconic breakfast treat that has become a staple in the world of desserts and snacks. With its vibrant colors and refreshing flavor, smoothie bowls offer a delightful combination of taste and nutrition. Whether topped with granola, fresh fruit, or nuts, smoothie bowls provide a delicious and satisfying meal that can be enjoyed for breakfast or as a healthy snack. Their popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dessert.",
  },
  {
    id: 21,
    image: "images/steak.png",
    name: "Steak",
    category: "dinner",
    price: 120,
    description:
      "Steak is a classic dinner dish enjoyed for its rich flavor and tender texture. Whether grilled, pan-seared, or oven-roasted, steak provides a hearty and satisfying meal that pairs well with vegetables, potatoes, or sauces. Its popularity continues to grow as people around the world embrace the delicious and versatile nature of this iconic dinner entrée.",
  },
  {
    id: 22,
    image: "images/risotto.png",
    name: "Risotto",
    category: "dinner",
    price: 90,
    description:
      "Risotto is a creamy Italian rice dish that has become a favorite for dinner. Cooked slowly with broth and often finished with cheese, vegetables, or seafood, risotto offers a comforting and flavorful meal. Its versatility and rich taste make it a popular choice for both casual and special occasions.",
  },
  {
    id: 23,
    image: "images/salad.png",
    name: "Salad",
    category: "lunch",
    price: 35,
    description:
      "Salad is a refreshing and healthy lunch option, featuring a mix of fresh vegetables, greens, and toppings. Whether enjoyed with a light vinaigrette or a hearty protein, salads provide a nutritious and satisfying meal that can be customized to suit any taste or dietary preference.",
  },
  {
    id: 24,
    image: "images/tacos.png",
    name: "Tacos",
    category: "evening",
    price: 45,
    description:
      "Tacos are a popular evening snack or meal, known for their flavorful fillings and crispy shells. Whether filled with meat, beans, vegetables, or cheese, tacos offer a delicious and customizable treat that can be enjoyed with a variety of sauces and toppings.",
  },
  {
    id: 25,
    image: "images/curry.png",
    name: "Curry",
    category: "dinner",
    price: 70,
    description:
      "Curry is a flavorful and aromatic dinner dish enjoyed around the world. Made with a blend of spices, vegetables, and proteins, curry offers a rich and satisfying meal that pairs well with rice or bread. Its versatility and bold flavors make it a staple in many cuisines.",
  },
  {
    id: 26,
    image: "images/grilledchicken.png",
    name: "Grilled Chicken",
    category: "dinner",
    price: 100,
    description:
      "Grilled chicken is a popular dinner choice, offering juicy and flavorful meat with a smoky aroma. Served with vegetables, rice, or salad, it provides a healthy and satisfying meal suitable for any occasion.",
  },
  {
    id: 27,
    image: "images/lasagna.png",
    name: "Lasagna",
    category: "dinner",
    price: 95,
    description:
      "Lasagna is a classic Italian dinner dish made with layers of pasta, cheese, and savory sauce. Its rich flavors and hearty texture make it a favorite for family gatherings and special occasions.",
  },
  {
    id: 28,
    image: "images/chickensalad.png",
    name: "Chicken Salad",
    category: "lunch",
    price: 50,
    description:
      "Chicken salad is a light and nutritious lunch option, combining tender chicken pieces with fresh vegetables and a flavorful dressing. It’s perfect for a quick meal or a healthy snack.",
  },
  {
    id: 29,
    image: "images/quinoa.png",
    name: "Quinoa Bowl",
    category: "lunch",
    price: 55,
    description:
      "Quinoa bowl is a wholesome lunch featuring protein-rich quinoa, assorted vegetables, and a tangy dressing. It’s a great choice for those seeking a balanced and energizing meal.",
  },
  {
    id: 30,
    image: "images/stirfry.png",
    name: "Vegetable Stir Fry",
    category: "lunch",
    price: 45,
    description:
      "Vegetable stir fry is a vibrant lunch dish made with assorted fresh vegetables sautéed in a savory sauce. It’s a quick, healthy, and flavorful meal that can be enjoyed with rice or noodles.",
  },
  {
    id: 31,
    image: "images/soup.png",
    name: "Soup",
    category: "lunch",
    price: 30,
    description:
      "Soup is a comforting and versatile lunch option, offering a warm and nourishing meal. Whether it’s a hearty vegetable soup, a creamy chowder, or a spicy broth, soup provides a satisfying and flavorful experience that can be enjoyed on its own or with bread.",
  },
  {
    id: 32,
    image: "images/shawarma.png",
    name: "Shawarma",
    category: "lunch",
    price: 65,
    description:
      "Shawarma is a popular Middle Eastern lunch dish featuring spiced meat wrapped in pita bread with fresh vegetables and sauces. Its bold flavors and convenient format make it a favorite for quick meals.",
  },
  {
    id: 33,
    image: "images/biryani.png",
    name: "Biryani",
    category: "dinner",
    price: 110,
    description:
      "Biryani is a flavorful and aromatic dinner dish made with spiced rice, meat, and vegetables. Its rich taste and festive presentation make it a staple for special occasions and gatherings.",
  },
  {
    id: 34,
    image: "images/cheesetoast.png",
    name: "Cheese Toast",
    category: "breakfast",
    price: 20,
    description:
      "Cheese toast is a simple and satisfying breakfast option, featuring crisp bread topped with melted cheese. It’s perfect for a quick and tasty start to the day.",
  },
  {
    id: 35,
    image: "images/eggsbenedict.png",
    name: "Eggs Benedict",
    category: "breakfast",
    price: 45,
    description:
      "Eggs Benedict is a classic breakfast dish with poached eggs, ham, and hollandaise sauce served on toasted English muffins. Its rich flavors make it a popular brunch choice.",
  },
  {
    id: 36,
    image: "images/falafel.png",
    name: "Falafel Wrap",
    category: "lunch",
    price: 50,
    description:
      "Falafel wrap is a nutritious lunch option featuring crispy chickpea patties, fresh veggies, and tangy sauce wrapped in flatbread. It’s a flavorful and vegetarian-friendly meal.",
  },
  {
    id: 37,
    image: "images/roastbeef.png",
    name: "Roast Beef",
    category: "dinner",
    price: 130,
    description:
      "Roast beef is a classic dinner entrée, offering tender slices of beef served with gravy and sides. Its hearty and savory taste makes it ideal for festive dinners.",
  },
  {
    id: 38,
    image: "images/crepes.png",
    name: "Crepes",
    category: "breakfast",
    price: 30,
    description:
      "Crepes are thin pancakes enjoyed for breakfast, filled with sweet or savory ingredients. Their delicate texture and versatility make them a favorite morning treat.",
  },
  {
    id: 39,
    image: "images/pilaf.png",
    name: "Rice Pilaf",
    category: "dinner",
    price: 85,
    description:
      "Rice pilaf is a flavorful dinner dish made with aromatic rice, spices, and vegetables. It’s a comforting and versatile meal that pairs well with grilled meats or curries.",
  },
  {
    id: 40,
    image: "images/club-sandwich.png",
    name: "Club Sandwich",
    category: "lunch",
    price: 60,
    description:
      "Club sandwich is a hearty lunch option with layers of bread, chicken, bacon, lettuce, and tomato. Its satisfying combination of flavors makes it a popular midday meal.",
  },
];
export default Menu;
