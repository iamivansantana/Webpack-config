import './style.css';
import logo from './assets/GHOST2.png';

console.log('holi');
const arr = [1, 2, 3];
((name, arr) => console.log(`HolaFunction ${name}`, ...arr))('ivan', arr);

document.getElementById(
	'app'
).innerHTML = `<img width='100px' src='${logo}' alt='logoExaple'>`;
// ).innerHTML = `<img src='assets\GHOST2.png' alt='logoExaple'>`;
