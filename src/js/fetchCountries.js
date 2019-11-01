import stringCombiner from './srtingcombiner.js'
import stringListCombiner from './stringlistcombiner.js'

export default function fetchCountries(dataFromInput) {
  return fetch(`https://restcountries.eu/rest/v2/name/${dataFromInput}?fields=name;capital;population;languages;flag`)

  .then(response => {if (response.ok) {
      return response.json()
    } else {
      throw Error(`Request rejected with status ${response.status}`);
    }
    })
  .then(data => {
    if (data.length < 11 && data.length >= 1) {
      return data;
    } else {
        return false;
    }
  })
  .then(country => {
    if (country.length === 1) {
        let finalToPost = stringCombiner(country);
        return finalToPost;
    } else if (country.length < 11) {
        let listToPost = stringListCombiner(country);
        return listToPost;
    }
  })
  .catch(console.error);
}