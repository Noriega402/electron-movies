const KEY = "1f3a836c41734431bdc7d1bdb82fdf36";
const API = `https://api.themoviedb.org/3/movie/100?api_key=${KEY}`;
const container = document.querySelector('#container');
const btn = document.querySelector('.btn');

window.addEventListener('DOMContentLoaded', () => {
    const p = document.createElement('H3');
    p.setAttribute('id', 'name');
    p.innerText = "Daniel Noriega";
    container.append(p);
})

btn.addEventListener('click', async e => {
    // console.log("Daniel");
    try {
        const response = await fetch(API);
        // console.log(response);
        const data = await response.json()
        console.log(data);
        console.log(data.title);
        for(let i = 0; i < data.genres.length; i++){
            console.log(data.genres[i]);
        }
    } catch (err) {
        console.error(err);
    };
})
