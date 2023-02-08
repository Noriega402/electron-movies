const KEY = "1f3a836c41734431bdc7d1bdb82fdf36";
// const API = `https://api.themoviedb.org/3/movie/100?api_key=${KEY}`;
const API = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`;
const IMAGES = "https://image.tmdb.org/t/p/w500";
const container = document.querySelector('.row');

window.addEventListener('DOMContentLoaded', async (e) => {
    // const p = document.createElement('H3');
    // p.setAttribute('id', 'name');
    // p.innerText = "Daniel Noriega";
    // container.append(p);
    try {
        const response = await fetch(`${API}`);
        const status = response.status;
        if (status === 200) {
            // console.log(status);
            const data = await response.json();
            // console.log(data);

            // let fragment = document.createDocumentFragment();
            let movies = '';
            // data.results.forEach(movie => console.log(movie.title));
            data.results.forEach(item => {
                // console.log(item);
                movies += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-3">
                <img src="${IMAGES}${item.backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <span class="badge rounded-pill bg-primary">${item.release_date}</span>
                </div>
            </div>
        </div>`
            });

            container.innerHTML = movies;
        }else{
            console.error("hubo un error...");
        }
    } catch (err) {
        console.error(err);
    }
})

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
