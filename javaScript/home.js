let coffeeFirstCharge = [
    {
        id: "11282585-4499-4d37-8999-f78ac250ddc3",
        name: "WHITE HOT CHOCOLATE",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985322/Starbucks-coffee-image/hap1q5ulupxh32wigdqv.png",
        description: "A traditional hot chocolate beverage made with white chocolate sauce and steamed milk, topped with whipped cream.o",
        price: 8.50,
        points: 200,
        dateOfEntry: "2023-09-01",
        category: "Hot"
    },
    {
        id: "ae48825b-394e-4de0-8a0c-d9a1ef20f47c",
        name: "AMERICANO COFFEE",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985227/Starbucks-coffee-image/xbd5o67m4pbqtzdhyahm.png",
        description: "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
        price: 5.00,
        points: 100,
        dateOfEntry: "2023-09-02",
        category: "Hot"
    },
    {
        id: "1cdd8af1-bc75-4287-89ab-437b27183f5b",
        name: "CARAMEL MACCHIATO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985299/Starbucks-coffee-image/gtlbtztd1onqbq0fnbqf.png",
        description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.",
        price: 9.50,
        points: 230,
        dateOfEntry: "2023-09-03",
        category: "Hot"
    },
    {
        id: "c733831e-6b23-44af-ad9f-98604a93a407",
        name: "MOCHA COFFEE",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985314/Starbucks-coffee-image/ykwlehuadydw1psqhk3h.png",
        description: "Our rich, full-bodied espresso combined with bittersweet mocha sauce and steamed milk, then topped with sweetened whipped cream. The classic coffee drink that always sweetly satisfies.",
        price: 8.50,
        points: 270,
        dateOfEntry: "2023-09-04",
        category: "Hot"
    },
    {
        id: "1214d4b2-a731-42c1-8ece-d342fbdbe396",
        name: "CARAMEL APPLE SPICE",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985269/Starbucks-coffee-image/xxfgv5azjl5vqn7sdvqn.png",
        description: "Steamed apple juice complemented with cinnamon syrup, whipped cream and a caramel sauce drizzle.",
        price: 10.55,
        points: 300,
        dateOfEntry: "2023-09-05",
        category: "Hot"
    },
    {
        id: "fb373804-98ff-4a49-aa04-c28827b5c04a",
        name: "WHITE CHOCOLATE MOCHA",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985330/Starbucks-coffee-image/zebbrdqwj9xyavlhcgvn.png",
        description: "Our signature espresso meets white chocolate sauce and steamed milk, and then is finished off with sweetened whipped cream to create this supreme white chocolate delight.",
        price: 7.75,
        points: 280,
        dateOfEntry: "2023-09-06",
        category: "Hot"
    },
    {
        id: "3ae83024-0410-4292-9e36-f6dda89f48a5",
        name: "CARAMEL FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985294/Starbucks-coffee-image/ra9runoxrox7ogcsht9n.png",
        description: "Caramel syrup meets coffee, milk and ice for a rendezvous in the blender, while whipped cream and buttery caramel sauce layer the love on top. To change things up, try it affogato-style with a hot espresso shot poured right over the top.",
        price: 7.50,
        points: 250,
        dateOfEntry: "2023-09-07",
        category: "Ice"
    },
    {
        id: "4ce8fc06-0a95-44eb-ae55-47eebe2b903b",
        name: "CARAMEL RIBBON CRUNCH FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985305/Starbucks-coffee-image/s3jk0pu4bosivudu3tcs.png",
        description: "Buttery caramel syrup blended with coffee, milk and ice, then topped with a layer of dark caramel sauce, whipped cream, caramel drizzle and a crunchy caramel-sugar topping—oh-so-beautifully delicious.",
        price: 6.50,
        points: 200,
        dateOfEntry: "2023-09-08",
        category: "Ice"
    },
    {
        id: "0fd3c5e6-ad16-4b0a-b0df-dc84a2c216b8",
        name: "CHOCOLATE JAVA MINT FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985309/Starbucks-coffee-image/zidunqsrqextkrknrfmi.png",
        description: "Coffee and flavors of sweet chocolate and refreshing mint blended with rich Frappuccino® chips for a smooth treat finished with a layer of mocha sauce, whipped cream and chocolate-mint cookie crumble.",
        price: 8.40,
        points: 230,
        dateOfEntry: "2023-09-09",
        category: "Ice"
    },
    {
        id: "02706449-302e-45c7-9deb-80c76b7d4c59",
        name: "JAVA CHIP FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985347/Starbucks-coffee-image/takhv2tsuni69ascdgii.png",
        description: "We blend mocha sauce and Frappuccino® chips with coffee, milk and ice, then top it off with whipped cream and a mocha drizzle to bring you endless java joy.",
        price: 6.30,
        points: 220,
        dateOfEntry: "2023-09-10",
        category: "Ice"
    },
    {
        id: "c07ee860-0315-4d65-adf8-3704aaba0177",
        name: "STRAWBERRY CREME FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985380/Starbucks-coffee-image/dwm9hxvfoxzqxbp2vpiz.png",
        description: "Summer's favorite berry is the star of this delicious Frappuccino® Blended Beverage—a blend of ice, milk and strawberry puree layered on top of a splash of strawberry puree and finished with vanilla whipped cream.",
        price: 5.20,
        points: 210,
        dateOfEntry: "2023-09-11",
        category: "Ice"
    },
    {
        id: "37b2fe13-2609-4895-991a-0daaa7cf0047",
        name: "MOCHA COOKIE CRUMBLE FRAPPUCCINO",
        image: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1696985341/Starbucks-coffee-image/imq7kkihcwbh8tl75oqg.png",
        description: "Frappuccino® Roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice, layered on top of whipped cream and chocolate cookie crumble and topped with vanilla whipped cream, mocha drizzle and even more chocolate cookie crumble. Each sip is as good as the last . . . all the way to the end.",
        price: 9.50,
        points: 300,
        dateOfEntry: "2023-09-12",
        category: "Ice"
    }
];

let storedProducts = JSON.parse(localStorage.getItem("coffee")) || coffeeFirstCharge;

if (JSON.parse(localStorage.getItem("coffee")) === null) {
    localStorage.setItem("coffee", JSON.stringify(storedProducts));
}

function filterProductsByType(products, type) {
    return products.filter(product => product.category === type);
}

let hotProducts = filterProductsByType(storedProducts, 'Hot');
let iceProducts = filterProductsByType(storedProducts, 'Ice');

function renderProducts(products, containerId, isHot) {
    const container = document.querySelector(`#${containerId}`);
    container.innerHTML = '';

    products.forEach(product => {
        const description = product.description.length > 60 ? product.description.slice(0, 60) + "..." : product.description;
        const cardClass = isHot ? "card-hot-coffee" : "card";

        const card = `
            <div class="${cardClass}">
                <div class="content">
                    <div class="underline-card | w-100">
                        <h2 class="fs-5 | text-start | w-100">${product.name}</h2>
                    </div>
                    <p class="fs-6">${description}</p>
                    <p class="fs-5 | p-0 | m-0">$${product.price} USD</p>
                    <p class="fs-6 | p-0 | m-0">${product.date}</p>
                    <div class="w-100 | d-flex | justify-content-between | p-3">
                        <button onclick="event.preventDefault(); showProductDetails(${JSON.stringify(product).split('"').join('&quot;')})">Read More</a>
                        <button><span class="iconify" data-icon="emojione-monotone:shopping-cart"></span> </span></button>
                    </div>
                </div>
                <img src="${product.image}" alt="${product.name}">
            </div>
        `;
        container.innerHTML += card;
    });
}

function showProductDetails(product) {
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productPrice').textContent = "$" + product.price + " USD";
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;

    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

renderProducts(hotProducts, 'container-cards-hot', true);
renderProducts(iceProducts, 'container-cards-ice', false);
