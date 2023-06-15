const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const txt = document.querySelector('.search')

function requestHandler (){
    console.log(JSON.parse(this.response))
}
function txtHandler (){
    console.log(txt.value)
}

// XMLHttpRequest方法
let xhr =  new XMLHttpRequest()
xhr.addEventListener("load", requestHandler);
xhr.open("get", endpoint)
xhr.send();

// fetch方法
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => console.log(data));
    
console.log(cities)

txt.addEventListener('keyup',txtHandler) 