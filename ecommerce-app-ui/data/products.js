const PRODUCTS = [
    {
        id: 1,
        title: "Beige Jogger",
        category: "Pants",
        imgUrl: "beige_jogger(men).jpg",
        gender: "M",
        price: "30",
        description: "Beige Jogger is a casual jogger made of 100% cotton jersey knit fabric. The jogging pants are perfect for running or walking around town. They have elastic waistband and drawstring. The joggers are available in different colors like beige, black, white, grey, blue, red, green, yellow, orange and brown."
    },
    {
        id: 2,
        title: "Beige Sweater",
        category: "Sweaters",
        imgUrl: "beige_sweater(men).jpg",
        gender: "M",
        price: "78",
        description: "This sweater is made of 100% cotton, it has a round neckline, front button closure, ribbed cuffs and hem, and a straight cut. This sweater can be worn as an outer layer or under a jacket."
    },
    {
        id: 3,
        title: "Black Blouse",
        category: "Blouses",
        imgUrl: "black_blouse.jpg",
        gender: "F",
        price: "80",
        description: "This black blouse has a round neckline, short sleeves, and a front button closure. The top is made of 100% cotton. This item is machine washable."
    },
    {
        id: 4,
        title: "Black Coat",
        category: "Coats",
        imgUrl: "black_coat.jpg",
        gender: "F",
        price: "200",
        description: "Black coat is a stylish and versatile outerwear that can be worn over any outfit. The coat has an adjustable hood, two front pockets, and a detachable belt. This coat will make your wardrobe complete."
    },
    {
        id: 5,
        title: "Black Coat Long",
        category: "Coats",
        imgUrl: "black_coat(1).jpg",
        gender: "F",
        price: "250",
        description: "This coat has been made using 100% wool and is fully lined with a soft fleece lining. The coat has a button fastening with two front pockets and a zip pocket. This coat will be perfect for keeping warm during winter months."
    },
    {
        id: 6,
        title: "Black Dress",
        category: "Dresses",
        imgUrl: "black_dress.jpg",
        gender: "M",
        price: "100",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
    {
        id: 7,
        title: "Brown Coat",
        category: "Coats",
        imgUrl: "brown_coat.jpg",
        gender: "F",
        price: "170",
        description: "It has a wool coat with a large collar. The coat is designed to keep the wearer warm and cozy, even when the temperature outside is low. The Brown Coat is a comfortable and warm coat made of wool. It is designed with a large collar that keeps the wearer warm in the winter."
    },
    {
        id: 8,
        title: "Checkered Pants",
        category: "Pants",
        imgUrl: "checkered_pants.jpg",
        gender: "F",
        price: "43",
        description: "Woven with a classic black and white pattern, these dark wash jeans are a must-have for any guy's closet. Pair them with a white shirt and brown boots for a sophisticated look."
    },
    {
        id: 9,
        title: "Green Bag",
        category: "",
        imgUrl: "green_bag.jpg",
        gender: "F",
        price: "333",
        description: "We carry all the necessities for your day with us."
    },
    {
        id: 10,
        title: "Green Blouse",
        category: "Blouses",
        imgUrl: "green_blouse.jpg",
        gender: "F",
        price: "85",
        description: "Woven with a classic black and white pattern, these dark wash jeans are a must-have for any guy's closet. Pair them with a white shirt and brown boots for a sophisticated look."
    },
    {
        id: 11,
        title: "Green Dress",
        category: "Dresses",
        imgUrl: "green_dress.jpg",
        gender: "F",
        price: "369",
        description: "We carry all the necessities for your day with us."
    },
    {
        id: 12,
        title: "Green Shirt",
        category: "Shirts",
        imgUrl: "green_shirt(men).jpg",
        gender: "F",
        price: "94",
        description: "We carry all the necessities for your day with us."
    },
    {
        id: 13,
        title: "Grey Shirt",
        category: "Shirts",
        imgUrl: "grey_shirt(men).jpg",
        gender: "M",
        price: "400",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
    {
        id: 14,
        title: "Navy Jogger Pants",
        category: "Pants",
        imgUrl: "navy_jogger_patn(men).jpg",
        gender: "M",
        price: "47",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
    {
        id: 15,
        title: "Pink Blouse",
        category: "Blouses",
        imgUrl: "pink_blouse.jpg",
        gender: "F",
        price: "63",
        description: "This pink blouse has a round neckline, short sleeves, and a front button closure. The top is made of 100% cotton. This item is machine washable."
    },
    {
        id: 16,
        title: "Pink Coat",
        category: "Coats",
        imgUrl: "pink_coat.jpg",
        gender: "M",
        price: "230",
        description: "This pink blouse has a round neckline, short sleeves, and a front button closure. The top is made of 100% cotton. This item is machine washable."
    },
    {
        id: 17,
        title: "Pink Pyjamas",
        category: "",
        imgUrl: "pink_pyjamas.jpg",
        gender: "F",
        price: "84",
        description: "These pink pyjamas has a round neckline, short sleeves, and a front button closure. The top is made of 100% cotton. This item is machine washable."
    },
    {
        id: 18,
        title: "Pink shirt",
        category: "Shirts",
        imgUrl: "pink_shirt(men).jpg",
        gender: "M",
        price: "50",
        description: "We carry all the necessities for your day with us."
    },
    {
        id: 19,
        title: "Plaid Skirt",
        category: "Skirts",
        imgUrl: "plaid_skirt.jpg",
        gender: "F",
        price: "21",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
    {
        id: 20,
        title: "Red Coat",
        category: "Coats",
        imgUrl: "red_coat.jpg",
        gender: "F",
        price: "128",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
    {
        id: 21,
        title: "White Blouse",
        category: "Blouses",
        imgUrl: "white_blouse.jpg",
        gender: "F",
        price: "59",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
    {
        id: 22,
        title: "White Blouse Long",
        category: "Blouses",
        imgUrl: "white_blouse(1).jpg",
        gender: "F",
        price: "67",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
    {
        id: 23,
        title: "White Pants",
        category: "Pants",
        imgUrl: "white_pants.jpg",
        gender: "F",
        price: "23",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
    {
        id: 24,
        title: "White Shirt",
        category: "Shirts",
        imgUrl: "white_shirt(men).jpg",
        gender: "M",
        price: "10",
        description: "This black dress is perfect for any occasion. The high neckline and short sleeves make it easy to wear under a jacket or sweater. Wear it over your favorite tee for casual looks."
    },
]

export { PRODUCTS }