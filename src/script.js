let URL1 = "https://api.openweathermap.org/data/2.5/weather?q=Kyiv,%20UA&APPID=6ed55aaa6af55f24b71d529588503993"

const pasteTemp = document.getElementById("temp")
const pasteTempMin = document.getElementById("temp-min")
const pasteTempMax = document.getElementById("temp-max")
const pasteFeels = document.getElementById("feels")
const pasteWeather = document.getElementById("weather")

let pasteWeatherFunc;

function toChange() {
    fetch(URL1)
        .then(response => response.json())
        .then(resp =>{
            pasteWeatherFunc = resp; 
            toPaste(pasteWeatherFunc)  
        })
}

function toPaste(pasteWeatherFunc) {
    pasteTemp.textContent = `${Math.round(pasteWeatherFunc.main.temp-272.15)}°C`;
    pasteTempMin.textContent = `${Math.round(pasteWeatherFunc.main.temp_min-272.15)}°C`;
    pasteTempMax.textContent = `${Math.round(pasteWeatherFunc.main.temp_max-272.15)}°C`;
    pasteFeels.textContent = `${Math.round(pasteWeatherFunc.main.feels_like-272.15)}°C`;
    pasteWeather.textContent = `${pasteWeatherFunc.weather[0].description}`;
}

toChange();

const fform = document.querySelector('.change_city');
fform.addEventListener('click', function () {
    const city = document.querySelector('.textplace').value
    URL1 = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=6ed55aaa6af55f24b71d529588503993"
    toChange()
 }) 


let URL2 = "https://jsonplaceholder.typicode.com/posts"

let pasteTextFunc;

const infoo1 = document.getElementById("infotext0")
const infoo2 = document.getElementById("infotext1")
const infoo3 = document.getElementById("infotext2")
const textt1 = document.getElementById("text0")
const textt2 = document.getElementById("text1")
const textt3 = document.getElementById("text2")

const toPasteText = (response) => {
    infoo1.textContent =`${pasteTextFunc[0].title}`;
    infoo2.textContent =`${pasteTextFunc[1].title}`;
    infoo3.textContent =`${pasteTextFunc[2].title}`;
    textt1.textContent =`${pasteTextFunc[0].body}`;
    textt2.textContent =`${pasteTextFunc[1].body}`;
    textt3.textContent =`${pasteTextFunc[2].body}`;
}

fetch(URL2)
    .then(response => response.json())
    .then(json => { 
        pasteTextFunc = json;
        toPasteText(pasteTextFunc);
    })


let URL3 = "data.json"

let pasteStuffText;
let wholeText = "";

const toPasteStuff = (response) => {
    for (let i = 0; i < 3; i++) {
        let partText = `<div id = "flex${i}"> 
            <div><p><b>Name: ${pasteStuffText[i].name}</p></b></div>
            <div><p><b>Price: ${pasteStuffText[i].price}</p></b></div>
            <div><p><b>Count: ${pasteStuffText[i].count}</p></b></div>
            <br> <div id = "back${i}"> </div>
        </div>`
            wholeText += partText
    }
    toPasteStuffText2.innerHTML = wholeText
}

let toPasteStuffText2 = document.querySelector('.stuff');

fetch(URL3)
    .then(response => response.json())
    .then(json => {
        pasteStuffText = json; 
        toPasteStuff(pasteStuffText);
    })