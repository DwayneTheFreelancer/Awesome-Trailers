const findMovie = document.getElementById("find-movie");
const movieSearch = document.getElementById("movie-search");
const output = document.getElementById("output");

movie = [
    {
        img: "",
        title: "It",
        releaseDate: "September 8, 2017",
        Genre: "Horror",
        Duration: "2 hr 15 mins"
    },
    {
        img: "",
        title: "The Mountain Between Us",
        releaseDate: "October 6, 2017",
        Genre: "Action/Adventure",
        Duration: "1 hr 44 min"
    },
    {
        img: "",
        title: "Geo Storm",
        releaseDate: "October 20, 2017",
        Genre: "Action/Adventure",
        Duration: "1 hr 49 min"
    },
    {
        img: "",
        title: "A Bad Moms Christmas",
        releaseDate: "November 1, 2017",
        Genre: "Comedy",
        Duration: "1 hr 44 mins"
    },
    {
        img: "",
        title: "",
        releaseDate: "",
        Genre: "",
        Duration: ""
    },
    {
        img: "",
        title: "",
        releaseDate: "",
        Genre: "",
        Duration: ""
    },
    {
        img: "",
        title: "",
        releaseDate: "",
        Genre: "",
        Duration: ""
    },
    {
        img: "",
        title: "",
        releaseDate: "",
        Genre: "",
        Duration: ""
    },
    {
        img: "",
        title: "",
        releaseDate: "",
        Genre: "",
        Duration: ""
    },
    {
        img: "",
        title: "",
        releaseDate: "",
        Genre: "",
        Duration: ""
    },
    {
        img: "",
        title: "",
        releaseDate: "",
        Genre: "",
        Duration: ""
    },
    {
        img: "",
        title: "",
        releaseDate: "",
        Genre: "",
        Duration: ""
    }
];

movieSearch.addEventListener("submit", browseMovies);
findMovie.addEventListener("click", inputFocus);
findMovie.addEventListener("mouseleave", inputFocusOut);

function browseMovies(e) {
    e.preventDefault();
    for(let i = 0; i < movie.length; i++) {
        if(findMovie.value == movie[i].title || findMovie.value == movie[i].title.toUpperCase() || findMovie.value == movie[i].title.toLowerCase()) {
            output.innerHTML = 
            `<ul>
                <li>${movie[i].title}</li>
                <li>${movie[i].releaseDate}</li>
                <li>${movie[i].Genre}</li>
                <li>${movie[i].Duration}</li>
            </ul>
            `;
            $("#output").show().fadeOut(4000);
        }
    } 
    findMovie.value = "";
}

function inputFocus(e) {
    if(e.target.tagName == "INPUT") {
        e.target.style.width = "80%";
    } 
}

function inputFocusOut() {
    setTimeout(function(){
        findMovie.style.width = "40%";
    }, 1000)
}