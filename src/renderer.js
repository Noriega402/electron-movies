const KEY = "1f3a836c41734431bdc7d1bdb82fdf36";
const ID = "505642";
const PATH = "https://api.themoviedb.org/3"
const API = `${PATH}/movie/popular?api_key=${KEY}&language=en-US&page=1`;
const IMAGES = "https://image.tmdb.org/t/p/w500";
// const DETAILS = `${PATH}/movie/${ID}?api_key=${KEY}`
const container = document.querySelector('.row');

window.addEventListener('DOMContentLoaded', async (e) => {
    try {
        const response = await fetch(`${API}`);
        const status = response.status;
        if (status === 200) {
            // console.log(status);
            const data = await response.json();
            // console.log(data);
            let movies = '';
            data.results.forEach(item => {
                movies += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <a href="details.html">
                <div class="card mb-3">
                    <img src="${IMAGES}${item.backdrop_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <span class="badge rounded-pill bg-custom-secondary">${item.release_date}</span>
                    </div>
                </div>
            </a>
        </div>`
            });

            container.innerHTML = movies;
        } else {
            console.error("hubo un error...");
        }
    } catch (err) {
        console.error(err);
    }
})
