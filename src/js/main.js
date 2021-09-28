   
import 'boxicons/css/boxicons.min.css'
import '../scss/style.scss'
import './goods'

let totalPrice = 0;
let totalItems = 0;
let cart = [];


const cartInfo = document.getElementById("cart-info")

function setCartInfo(ti, tp) {
    var item = "items";
    if (ti === 0) { cartInfo.innerHTML = ""; }
    else {
        if (ti === 1) { item = "item" };
        cartInfo.innerHTML = `total ${ti} ${item} (${tp} UAH)`;
    }
}

setCartInfo(1, 1);


let goods;
const goodsList = document.getElementById('list-goods');



function showGoods() {
    goods = JSON.parse(sessionStorage.getItem('Goods'));
    var s = "";

    for (let good of goods) {
        s = s + `<div id="${good.id}" class="card"><h3>${good.title}</h3>    <img src="${good.img}" alt="img"><p>${good.price}</p>   <button class="add-button">Add to Cart</button></div>`;
    }
    goodsList.innerHTML=s;

    let buttons=Array.from(document.getElementsByClassName("add-button"));
    

    for(let button of buttons){
        button.addEventListener('click',addToCart);
    }
}

function addToCart(e){
    let newId = e.target.parentNode.id;
    cart.push({id:newId, quantity:1}); 
    console.log(cart);
}

showGoods();