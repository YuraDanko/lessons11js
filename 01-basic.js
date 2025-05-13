import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-I1I71QQ2.js";const o="https://jsonplaceholder.typicode.com",a=document.querySelector(".container"),c=()=>fetch(`${o}/users`).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).catch(t=>{r.error({title:"Помилка",message:`Не вдалося завантажити користувачів: ${t.message}`,position:"topRight"})});c().then(t=>{const s=t.map(e=>`<li class="user-item">
        <p class="avatar">${e.username.slice(0,1)}</p>
        <h1 class="name">${e.name}</h1>
        <a href="" class="website">${e.website}</a>
      </li>`).join("");a.insertAdjacentHTML("beforeend",s)}).catch(t=>{console.log(t)});
//# sourceMappingURL=01-basic.js.map
