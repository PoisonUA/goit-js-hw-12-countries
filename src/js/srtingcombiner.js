export default function stringCombiner(arrOrNot) {

    return arrOrNot.map(item => item = `<h2 class="coutry__title">${item.name}</h2><div class="country__wrapper"><div class="left__side">
        <p><span style="font-weight: bold">Capital:</span>${item.capital}</p>
        <p><span style="font-weight: bold">Population:</span>${item.population}</p>
        <p><span style="font-weight: bold">Languages:</span></p>
        <ul>
        ${item.languages.reduce((acc, cur) => {return acc += `<li>${cur.name}</li>`}, '')}
        </ul>
        </div><div class="right__side"><img src="${item.flag}" width="500" height="400" alt="Flag"></div>`);
}