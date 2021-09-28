import 'boxicons/css/boxicons.min.css'
import '../scss/style.scss'

const cart = JSON.parse(sessionStorage.getItem('cart'));
const goods = JSON.parse(sessionStorage.getItem('Goods'));

const ul1 = document.getElementById("cart-list");

function showCart(){
    let s=""
    for(let item of cart){
        let id = item.id;

        s+=`<li> ${getTitleById(id)} img + ${item.quantity} - x</li>`
    }

    console.log(s);
    ul1.innerHTML = s;

}

function getPriceById(id){
    for(let good of goods){
        if(good.id==id){return good.price}        
    }
    return 0;
}

function getTitleById(id){
    for(let good of goods){
        if(good.id==id){return good.title}        
    }
    return 0;
}
function getImgById(id){
    for(let good of goods){
        if(good.id==id){return good.img}        
    }
    return 0;
}

showCart();