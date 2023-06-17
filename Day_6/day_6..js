const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const txt = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

// function requestHandler (){
//     console.log(JSON.parse(this.response))
// }
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function txtHandler (){
    const matchtxt = findMatchtxt(this.value, cities);
    console.log(matchtxt)

    const html = matchtxt.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
          </li>
        `;
      }).join('');
      suggestions.innerHTML = html;

}

function findMatchtxt(match, cities){
    return cities.filter((place) => {
        const regex = new RegExp(match, "gi");
        // 正則表達式(g=全域搜尋，i=不分大小寫)
        return place.city.match(regex) || place.state.match(regex)
   
    })
} 
// XMLHttpRequest方法
// let xhr =  new XMLHttpRequest()
// xhr.addEventListener("load", requestHandler);
// xhr.open("get", endpoint)
// xhr.send();

// fetch方法
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
    
console.log(cities)

txt.addEventListener('keyup',txtHandler) 