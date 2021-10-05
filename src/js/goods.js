const goods = [
    {
        id: 1,
        name: "BLACK book",
        price: 30,
        img: "img/goods_item1.jpg"

    },
    {
        id: 2,
        name: "BLUE book",
        price: 100,
        img: "img/goods_item2.jpg"
    },
    {
        id: 3,
        name: "GREEN book",
        price: 200,
        img: "img/goods_item3.jpg"
    },
    {
        id: 4,
        name: "PURPLE book",
        price: 500,
        img: "img/goods_item4.jpg"
    },
    {
        id: 5,
        name: "RED book",
        price: 45,
        img: "img/goods_item5.jpg"
    },
    {
        id: 6,
        name: "YELLOW book",
        price: 120,
        img: "img/goods_item7.jpg"
    }
];

localStorage.setItem("goods", JSON.stringify(goods));

const goodsContainer = document.getElementById("goods__container");

let list = "";

goods.forEach(item => {
    list += `<div class="goods__container__item">
    <img class="goods__container__item__img" src="${item.img}" alt="">
    <p class="goods__container__item__name">
        ${item.name}
    </p>
    <p class="goods__container__item__price">
        ₴ ${item.price}
    </p>
    <button class="goods__container__item__button" id="${item.id}">Buy</button>
    </div>`;
});

goodsContainer.innerHTML = list;
