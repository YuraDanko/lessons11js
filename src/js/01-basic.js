// // Основи запиту
// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = `https://jsonplaceholder.typicode.com`;

const containerEl = document.querySelector(`.container`);

const fetchUsers = () => {
  return fetch(`${BASE_URL}/users`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      iziToast.error({
        title: 'Помилка',
        message: `Не вдалося завантажити користувачів: ${error.message}`,
        position: 'topRight',
      });
    });
};

fetchUsers()
  .then(users => {
    const usersMarkup = users
      .map(user => {
        return `<li class="user-item">
        <p class="avatar">${user.username.slice(0, 1)}</p>
        <h1 class="name">${user.name}</h1>
        <a href="" class="website">${user.website}</a>
      </li>`;
      })
      .join(``);
    containerEl.insertAdjacentHTML(`beforeend`, usersMarkup);
  })
  .catch(err => {
    console.log(err);
  });
