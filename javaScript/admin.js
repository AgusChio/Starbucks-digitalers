const cafes = [
    {
        id: 1,
        name: "WHITE HOT CHOCOLATE",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985322/Starbucks-coffee-image/hap1q5ulupxh32wigdqv.png",
        deescription: "A traditional hot chocolate beverage made with white chocolate sauce and steamed milk, topped with whipped cream.o",
        price: 8.50,
        points: 200,
        dateOfEntry: "2023-09-01",
        category: "Hot"
    },
    {
        id: 2,
        name: "AMERICANO COFFEE",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985227/Starbucks-coffee-image/xbd5o67m4pbqtzdhyahm.png",
        deescription: "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
        price: 5.00,
        points: 100,
        dateOfEntry: "2023-09-02",
        category: "Hot"
    },
    {
        id: 3,
        name: "CARAMEL MACCHIATO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985299/Starbucks-coffee-image/gtlbtztd1onqbq0fnbqf.png",
        deescription: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.",
        price: 9.50,
        points: 230,
        dateOfEntry: "2023-09-03",
        category: "Hot"
    },
    {
        id: 4,
        name: "MOCHA COFFEE",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985314/Starbucks-coffee-image/ykwlehuadydw1psqhk3h.png",
        deescription: "Our rich, full-bodied espresso combined with bittersweet mocha sauce and steamed milk, then topped with sweetened whipped cream. The classic coffee drink that always sweetly satisfies.",
        price: 8.50,
        points: 270,
        dateOfEntry: "2023-09-04",
        category: "Hot"
    },
    {
        id: 5,
        name: "CARAMEL APPLE SPICE",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985269/Starbucks-coffee-image/xxfgv5azjl5vqn7sdvqn.png",
        deescription: "Steamed apple juice complemented with cinnamon syrup, whipped cream and a caramel sauce drizzle.",
        price: 10.00,
        points: 300,
        dateOfEntry: "2023-09-05",
        category: "Hot"
    },
    {
        id: 6,
        name: "WHITE CHOCOLATE MOCHA",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985330/Starbucks-coffee-image/zebbrdqwj9xyavlhcgvn.png",
        deescription: "Our signature espresso meets white chocolate sauce and steamed milk, and then is finished off with sweetened whipped cream to create this supreme white chocolate delight.",
        price: 7.00,
        points: 280,
        dateOfEntry: "2023-09-06",
        category: "Hot"
    },
    {
        id: 7,
        name: "CARAMEL FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985294/Starbucks-coffee-image/ra9runoxrox7ogcsht9n.png",
        deescription: "Caramel syrup meets coffee, milk and ice for a rendezvous in the blender, while whipped cream and buttery caramel sauce layer the love on top. To change things up, try it affogato-style with a hot espresso shot poured right over the top.",
        price: 7.50,
        points: 250,
        dateOfEntry: "2023-09-07",
        category: "Ice"
    },
    {
        id: 8,
        name: "CARAMEL RIBBON CRUNCH FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985305/Starbucks-coffee-image/s3jk0pu4bosivudu3tcs.png",
        deescription: "Buttery caramel syrup blended with coffee, milk and ice, then topped with a layer of dark caramel sauce, whipped cream, caramel drizzle and a crunchy caramel-sugar topping—oh-so-beautifully delicious.",
        price: 6.00,
        points: 200,
        dateOfEntry: "2023-09-08",
        category: "Ice"
    },
    {
        id: 9,
        name: "CHOCOLATE JAVA MINT FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985309/Starbucks-coffee-image/zidunqsrqextkrknrfmi.png",
        deescription: "Coffee and flavors of sweet chocolate and refreshing mint blended with rich Frappuccino® chips for a smooth treat finished with a layer of mocha sauce, whipped cream and chocolate-mint cookie crumble.",
        price: 8.00,
        points: 230,
        dateOfEntry: "2023-09-09",
        category: "Ice"
    },
    {
        id: 10,
        name: "JAVA CHIP FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985347/Starbucks-coffee-image/takhv2tsuni69ascdgii.png",
        deescription: "We blend mocha sauce and Frappuccino® chips with coffee, milk and ice, then top it off with whipped cream and a mocha drizzle to bring you endless java joy.",
        price: 6.00,
        points: 220,
        dateOfEntry: "2023-09-10",
        category: "Ice"
    },
    {
        id: 11,
        name: "STRAWBERRY CREME FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985380/Starbucks-coffee-image/dwm9hxvfoxzqxbp2vpiz.png",
        deescription: "Summer's favorite berry is the star of this delicious Frappuccino® Blended Beverage—a blend of ice, milk and strawberry puree layered on top of a splash of strawberry puree and finished with vanilla whipped cream.",
        price: 5.00,
        points: 210,
        dateOfEntry: "2023-09-11",
        category: "Ice"
    },
    {
        id: 12,
        name: "MOCHA COOKIE CRUMBLE FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985341/Starbucks-coffee-image/imq7kkihcwbh8tl75oqg.png",
        deescription: "Frappuccino® Roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice, layered on top of whipped cream and chocolate cookie crumble and topped with vanilla whipped cream, mocha drizzle and even more chocolate cookie crumble. Each sip is as good as the last . . . all the way to the end.",
        price: 9.50,
        points: 300,
        dateOfEntry: "2023-09-12",
        category: "Ice"
    }
];