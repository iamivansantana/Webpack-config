import './style.css';
import logo from './assets/GHOST2.png';
import data from './data.json';

console.log('holi');
const arr = [1, 2, 3];
((name, arr) => console.log(`HolaFunction ${name}`, ...arr))('ivan', arr);

document.getElementById(
	'app'
).innerHTML = `<img width='100px' src='${logo}' alt='logoExaple'>`;
// ).innerHTML = `<img src='assets\GHOST2.png' alt='logoExaple'>`;

const app = document.getElementById('app');

const d = document,
	nav = d.createElement('nav');

let menu = '';

data.links.forEach((el) => (menu += `<a href="${el[1]}">${el[0]}</a>`));

nav.innerHTML = menu;
nav.classList.add('menu');

app.appendChild(nav);
