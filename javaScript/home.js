let storedProducts = JSON.parse(localStorage.getItem("products")) || coffeeFirstCharge;

if (JSON.parse(localStorage.getItem("products")) === null) {
    localStorage.setItem("products", JSON.stringify(storedProducts));
}

function filterProductsByType(products, type) {
    return products.filter(product => product.category === type);
}

let hotProducts = filterProductsByType(storedProducts, 'Hot');
let iceProducts = filterProductsByType(storedProducts, 'Ice');

console.log(hotProducts);
console.log(iceProducts);

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
                        <a href="#">Read More</a>
                        <a href="#">Buy</a>
                    </div>
                </div>
                <img src="${product.image}" alt="${product.name}">
            </div>
        `;
        container.innerHTML += card;
    });
}

renderProducts(hotProducts, 'container-cards-hot', true);
renderProducts(iceProducts, 'container-cards-ice', false);