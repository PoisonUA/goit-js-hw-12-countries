import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from '../../node_modules/pnotify/dist/es/PNotifyStyleMaterial.js';

export default function stringCombiner(arrOrNot) {
    
    PNotify.defaults.icons = 'material';
    PNotify.notice({
        title: 'To many matches found.',
        text: 'Please enter a more specific query!',
        addClass: 'custom nonblock',
        delay: 2000,
        icon: true
      });
      
    return arrOrNot.reduce((acc, cur) => {return acc += `<li class="country__list">${cur.name}</li>`}, '');
}