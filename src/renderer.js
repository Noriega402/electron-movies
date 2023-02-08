const KEY = "1f3a836c41734431bdc7d1bdb82fdf36";
const API = `https://api.themoviedb.org/3/movie/100?api_key=${KEY}`;
const container = document.querySelector('#container');
const btn = document.querySelector('.btn');
const btnMenuMobile = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const menu1 = document.querySelector('#menu-left');
const menu2 = document.querySelector('#menu-right');

btnMenuMobile.addEventListener('click', e =>{
    btnMenuMobile.classList.toggle('is-active');
    // menu1.classList.toggle('hidden')
    menu.classList.toggle('hidden');
    menu1.classList.toggle('hidden');
    menu2.classList.toggle('hidden');
})

// window.addEventListener('DOMContentLoaded', () => {
//     const p = document.createElement('H3');
//     p.setAttribute('id', 'name');
//     p.innerText = "Daniel Noriega";
//     container.append(p);
// })

// btn.addEventListener('click', async e => {
//     // console.log("Daniel");
//     try {
//         const response = await fetch(API);
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//         console.log(data.title);
//         for(let i = 0; i < data.genres.length; i++){
//             console.log(data.genres[i]);
//         }
//     } catch (err) {
//         console.error(err);
//     };
// })

// window.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const response = await fetch(API);
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//         console.log(data.title);
//         for(let i = 0; i < data.genres.length; i++){
//             console.log(data.genres[i]);
//         }
//     } catch (err) {
//         console.error(err);
//     };
// })
