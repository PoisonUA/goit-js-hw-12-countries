export default function stringCombiner(arrOrNot) {

    return arrOrNot.reduce((acc, cur) => {return acc += `<li class="country__list">${cur.name}</li>`}, '');
}