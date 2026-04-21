const dataSet = [
  {
    "id": 1,
    "title": "Spaghetti Aglio e Olio",
    "ingredients": ["200g spaghetti", "4 cloves garlic", "1/4 cup olive oil", "1 tsp red pepper flakes", "Salt", "Parsley"],
    "steps": ["Boil pasta until al dente", "Heat olive oil and sauté garlic", "Add red pepper flakes", "Toss pasta with oil mixture", "Garnish with parsley"],
    "tools": ["pot", "pan", "knife"],
    "metadata": {
      "tags": ["Italian", "dinner", "vegetarian"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 450,
      "image": "https://cookingwithayeh.com/wp-content/uploads/2025/02/Spaghetti-Aglio-e-Olio-SQ.jpg"
    }
  },
  {
    "id": 2,
    "title": "Chicken Stir Fry",
    "ingredients": ["2 chicken breasts", "1 cup broccoli", "1 bell pepper", "soy sauce", "garlic", "ginger"],
    "steps": ["Slice chicken", "Cook chicken in wok", "Add vegetables", "Add sauce and stir fry"],
    "tools": ["wok", "knife"],
    "metadata": {
      "tags": ["Asian", "dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 25,
      "difficulty": "easy",
      "calories": 400,
      "image": "https://natashaskitchen.com/wp-content/uploads/2018/08/Chicken-Stir-Fry-1-1.jpg"
    }
  },
  {
    "id": 3,
    "title": "Avocado Toast",
    "ingredients": ["2 slices bread", "1 avocado", "Salt", "Pepper", "Lemon juice"],
    "steps": ["Toast bread", "Mash avocado", "Spread on toast", "Season to taste"],
    "tools": ["toaster", "fork"],
    "metadata": {
      "tags": ["breakfast", "vegetarian", "healthy"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 10,
      "difficulty": "easy",
      "calories": 300,
      "image": "https://thesaltypot.com/wp-content/uploads/2019/02/Avocado-Toast09.jpg"
    }
  },
  {
    "id": 4,
    "title": "Beef Tacos",
    "ingredients": ["ground beef", "taco shells", "lettuce", "cheese", "tomato", "taco seasoning"],
    "steps": ["Cook beef with seasoning", "Prepare toppings", "Assemble tacos"],
    "tools": ["pan"],
    "metadata": {
      "tags": ["Mexican", "dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 500,
      "image": "https://tamingofthespoon.com/wp-content/uploads/2025/03/Braised-Beef-Shank-Tacos-R6-5.jpg"
    }
  },
  {
    "id": 5,
    "title": "Vegetable Curry",
    "ingredients": ["mixed vegetables", "coconut milk", "curry paste", "onion", "garlic"],
    "steps": ["Sauté onion and garlic", "Add curry paste", "Add vegetables and coconut milk", "Simmer"],
    "tools": ["pot"],
    "metadata": {
      "tags": ["Indian", "dinner", "vegan"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 30,
      "difficulty": "medium",
      "calories": 350,
      "image": "https://woonheng.com/wp-content/uploads/2021/04/Curry-Vegetable-Bowl-2.jpg"
    }
  },
  {
    "id": 6,
    "title": "Pancakes",
    "ingredients": ["flour", "milk", "egg", "baking powder", "sugar"],
    "steps": ["Mix ingredients", "Pour batter on griddle", "Flip when bubbles form"],
    "tools": ["bowl", "pan"],
    "metadata": {
      "tags": ["breakfast", "vegetarian"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 350,
      "image": "https://i.etsystatic.com/64258734/r/il/ee97c3/7847184680/il_794xN.7847184680_oynh.jpg"
    }
  },
  {
    "id": 7,
    "title": "Grilled Salmon",
    "ingredients": ["salmon fillet", "lemon", "olive oil", "salt", "pepper"],
    "steps": ["Season salmon", "Grill for 8-10 minutes", "Serve with lemon"],
    "tools": ["grill"],
    "metadata": {
      "tags": ["seafood", "dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 15,
      "difficulty": "easy",
      "calories": 450,
      "image": "https://whatmollymade.com/wp-content/uploads/2025/06/grilled-salmon-4.jpg"
    }
  },
  {
    "id": 8,
    "title": "Caesar Salad",
    "ingredients": ["romaine lettuce", "croutons", "parmesan", "caesar dressing"],
    "steps": ["Chop lettuce", "Add toppings", "Toss with dressing"],
    "tools": ["bowl"],
    "metadata": {
      "tags": ["salad", "lunch"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 10,
      "difficulty": "easy",
      "calories": 250,
      "image": "https://www.noracooks.com/wp-content/uploads/2022/06/vegan-caesar-salad-4.jpg"
    }
  },
  {
    "id": 9,
    "title": "Tomato Soup",
    "ingredients": ["tomatoes", "onion", "garlic", "broth"],
    "steps": ["Cook ingredients", "Blend", "Simmer"],
    "tools": ["pot", "blender"],
    "metadata": {
      "tags": ["soup", "vegan", "lunch"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 30,
      "difficulty": "easy",
      "calories": 200,
      "image": "https://i.etsystatic.com/54796013/r/il/6d49df/7590201690/il_794xN.7590201690_chyf.jpg"
    }
  },
  {
    "id": 10,
    "title": "Omelette",
    "ingredients": ["eggs", "cheese", "vegetables"],
    "steps": ["Beat eggs", "Cook in pan", "Add fillings", "Fold"],
    "tools": ["pan"],
    "metadata": {
      "tags": ["breakfast", "vegetarian"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 10,
      "difficulty": "easy",
      "calories": 300,
      "image": "https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1-500x500.jpg"
    }
  },
  {
    "id": 11,
    "title": "Burger",
    "ingredients": ["ground beef", "bun", "lettuce", "cheese"],
    "steps": ["Form patty", "Grill", "Assemble"],
    "tools": ["grill"],
    "metadata": {
      "tags": ["American", "dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 700,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IVpqe16u-gx426F_k52l-UUzQnpJU_QS_ZK7jSKX9jLueiNB5STkSLb4THJc-WId6O77j9XQcZeOzDTrR89ZkAGBTQj-vJEnEU6Gzg&s=10"
    }
  },
  {
    "id": 12,
    "title": "Margherita Pizza",
    "ingredients": ["pizza dough", "tomato sauce", "mozzarella", "basil"],
    "steps": ["Prepare dough", "Add toppings", "Bake"],
    "tools": ["oven"],
    "metadata": {
      "tags": ["Italian", "dinner", "vegetarian"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 25,
      "difficulty": "medium",
      "calories": 600,
      "image": "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080"
    }
  },
  {
    "id": 13,
    "title": "Greek Salad",
    "ingredients": ["cucumber", "tomato", "feta", "olives"],
    "steps": ["Chop ingredients", "Mix"],
    "tools": ["bowl"],
    "metadata": {
      "tags": ["Mediterranean", "lunch", "vegetarian"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 10,
      "difficulty": "easy",
      "calories": 250,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tCg5ijAzSkAX4tY0DjuVRDXGC98A1vE5Yt1fYpJdkNZB-wlHnTCEUkMK8i1iDtBziHGF6hpUrBHdcJet_63GsMOBN-sNKaEVJWMJChA&s=10"
    }
  },
  {
    "id": 14,
    "title": "Pad Thai",
    "ingredients": ["rice noodles", "shrimp", "egg", "peanuts"],
    "steps": ["Cook noodles", "Stir fry ingredients", "Combine"],
    "tools": ["wok"],
    "metadata": {
      "tags": ["Thai", "dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 30,
      "difficulty": "medium",
      "calories": 550,
      "image": "https://pinchmegood.com/wp-content/uploads/2025/07/Vegetarian-Pad-Thai-11.jpg"
    }
  },
  {
    "id": 15,
    "title": "Fried Rice",
    "ingredients": ["rice", "egg", "vegetables", "soy sauce"],
    "steps": ["Cook rice", "Stir fry everything"],
    "tools": ["wok"],
    "metadata": {
      "tags": ["Asian", "dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 400,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8QmiadI5lnyWzJDg_kikB7dkVkR4jcnk0wwAy4bZoQw3FwbDxCRdZOSuOgx0x8iPcdUTR1t-LNO2OXxhb0N5tnvKIb3OYiPbixYT6w&s=10"
    }
  },
  {
    "id": 16,
    "title": "Lentil Soup",
    "ingredients": ["lentils", "carrot", "celery", "onion"],
    "steps": ["Cook ingredients", "Simmer"],
    "tools": ["pot"],
    "metadata": {
      "tags": ["vegan", "soup", "dinner"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 40,
      "difficulty": "easy",
      "calories": 300,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePJ5xqlOgb-0SSeEt4DJKsYpURMzDBpyu23dJmbgmBU3HeaAV36asGeAY0UwsQWP0ovd9asBEQqPMNxWNCuIZC_CB1H6PxIffV_PX3A&s=10"
    }
  },
  {
    "id": 17,
    "title": "Smoothie Bowl",
    "ingredients": ["banana", "berries", "granola"],
    "steps": ["Blend fruit", "Add toppings"],
    "tools": ["blender"],
    "metadata": {
      "tags": ["breakfast", "healthy", "vegan"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 5,
      "difficulty": "easy",
      "calories": 250,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHBoNXqSdoy8cIIQ-6H8RAoi4CSMEVev7SbexJ0pL1rWNaO9Gg5oImh856gSK3M3TfanxLlNKRBsUMJcVTroXwdk5-pikT5KTD0yqnA&s=10"
    }
  },
  {
    "id": 18,
    "title": "Roast Chicken",
    "ingredients": ["whole chicken", "herbs", "butter"],
    "steps": ["Season chicken", "Roast"],
    "tools": ["oven"],
    "metadata": {
      "tags": ["dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 90,
      "difficulty": "medium",
      "calories": 600,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZv5MBbwuPkBLhNx47GJbO2Iyqp9OmDGcWqMi-Zm3xXnHP-xg7ygxgDdCXq5iAUHxvEH0aa3B_WZnxH-NOoiNY7HfR2K7VvGQPh_gLZx4&s=10"
    }
  },
  {
    "id": 19,
    "title": "Mac and Cheese",
    "ingredients": ["pasta", "cheese", "milk"],
    "steps": ["Cook pasta", "Make cheese sauce", "Combine"],
    "tools": ["pot"],
    "metadata": {
      "tags": ["dinner", "vegetarian"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 25,
      "difficulty": "easy",
      "calories": 650,
      "image": "https://www.seriouseats.com/thmb/RjSCYLZ7fw6XgYyNN8eEojOnLNs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210214-stovetop-mac-cheese-reshoot-vicky-wasik-9-0760b642ca704cf8b2c5121a363a60a2.jpg"
    }
  },
  {
    "id": 20,
    "title": "Falafel",
    "ingredients": ["chickpeas", "herbs", "spices"],
    "steps": ["Blend ingredients", "Form balls", "Fry"],
    "tools": ["food processor", "pan"],
    "metadata": {
      "tags": ["Middle Eastern", "vegan"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 30,
      "difficulty": "medium",
      "calories": 350,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUIDqF5JlbRp-i36yym4yu_a8YAVpmy16iqCJTZL3L4XxoxG8bI3YMRwCQ3gLyT8BucDTh4Fx3nj2Zf10tXGakZQYg4IPfmRB7715ng&s=10"
    }
  },
  {
    "id": 21,
    "title": "Chocolate Chip Cookies",
    "ingredients": ["flour", "sugar", "chocolate chips"],
    "steps": ["Mix ingredients", "Bake"],
    "tools": ["oven"],
    "metadata": {
      "tags": ["dessert", "vegetarian"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 200,
      "image": "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg"
    }
  },
  {
    "id": 22,
    "title": "Quinoa Salad",
    "ingredients": ["quinoa", "vegetables", "lemon"],
    "steps": ["Cook quinoa", "Mix ingredients"],
    "tools": ["pot"],
    "metadata": {
      "tags": ["healthy", "vegan", "lunch"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 25,
      "difficulty": "easy",
      "calories": 300,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkgWQfaBu9Fp8WzllAzodvVYQi5mScx2maQ&s"
    }
  },
  {
    "id": 23,
    "title": "Shrimp Scampi",
    "ingredients": ["shrimp", "garlic", "butter", "lemon"],
    "steps": ["Cook shrimp", "Add sauce"],
    "tools": ["pan"],
    "metadata": {
      "tags": ["Italian", "seafood", "dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 15,
      "difficulty": "easy",
      "calories": 400,
      "image": "https://www.allrecipes.com/thmb/gGiZlDOs_cqp65nB23gsVlcmBI0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-19508-shrimp-scampi-VAT-hero-01-4x3-f5a1c9cadca542919285caa8dcf5d135.jpg"
    }
  },
  {
    "id": 24,
    "title": "Stuffed Peppers",
    "ingredients": ["bell peppers", "rice", "ground meat"],
    "steps": ["Stuff peppers", "Bake"],
    "tools": ["oven"],
    "metadata": {
      "tags": ["dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 45,
      "difficulty": "medium",
      "calories": 450,
      "image": "https://embed.widencdn.net/img/beef/t9bwp7fitq/360x360px/Stuffed%20Peppers%20-%20NCBA%20Beef%20Aug%20202431717.jpg?keep=c&u=7fueml"
    }
  },
  {
    "id": 25,
    "title": "Egg Fried Rice (Vegetarian)",
    "ingredients": ["rice", "egg", "vegetables", "soy sauce"],
    "steps": ["Cook rice", "Stir fry ingredients", "Combine"],
    "tools": ["wok"],
    "metadata": {
      "tags": ["Asian", "vegetarian", "dinner"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 380,
      "image": "https://christieathome.com/wp-content/uploads/2022/06/Egg-Fried-Rice-3.jpg"
    }
  }
];

export default dataSet;
