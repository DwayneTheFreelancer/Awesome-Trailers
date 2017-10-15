let findMovie = document.getElementById("find-movie");
const movieSearch = document.getElementById("movie-search");
const output = document.getElementById("outputValue");
const closeButton = document.querySelector(".closeButton");

const movie = [
    {
        img: "src/images/It.jpg",
        closeButton: "src/images/close copy.svg",
        title: "It",
        releaseDate: "September 8, 2017",
        Genre: "Horror",
        Duration: "2 hr 15 mins",
        video: '<iframe width="100%" height="350px" src="https://www.youtube.com/embed/cdg193GvnBA" frameborder="0" allowfullscreen></iframe>'
    },
    {
        img: "src/images/mountain_between_us.jpg",
        closeButton: "src/images/close copy.svg",
        title: "The Mountain Between Us",
        releaseDate: "October 6, 2017",
        Genre: "Action/Adventure",
        Duration: "1 hr 44 min",
        video: '<iframe width="100%" height="350px" src="https://www.youtube.com/embed/uCB25lj9M-s" frameborder="0" allowfullscreen></iframe>'
    },
    {
        img: "src/images/geostorm.jpg",
        closeButton: "src/images/close copy.svg",
        title: "Geo Storm",
        releaseDate: "October 20, 2017",
        Genre: "Action/Adventure",
        Duration: "1 hr 49 min",
        video: '<iframe width="100%" height="350px" src="https://www.youtube.com/embed/EuOlYPSEzSc" frameborder="0" allowfullscreen></iframe>'
    },
    {
        img: "src/images/bad_moms_christmas.jpg",
        closeButton: "src/images/close copy.svg",
        title: "A Bad Moms Christmas",
        releaseDate: "November 1, 2017",
        Genre: "Comedy",
        Duration: "1 hr 44 mins",
        video: '<iframe width="100%" height="350px" src="https://www.youtube.com/embed/yFfxsrFDkHE" frameborder="0" allowfullscreen></iframe>'
    },
    {
        img: "src/images/Thor.jpg",
        closeButton: "src/images/close copy.svg",
        title: "Thor",
        releaseDate: "November 3, 2017",
        Genre: "Action/Adventure",
        Duration: "2 hr 10 min",
        video: '<iframe width="100%" height="350px" src="https://www.youtube.com/embed/ue80QwXMRHg" frameborder="0" allowfullscreen></iframe>'
    },
    {
        img: "src/images/marshall.jpg",
        closeButton: "src/images/close copy.svg",
        title: "Marshall",
        releaseDate: "October 13, 2017",
        Genre: "Drama",
        Duration: "1 hr 58 min",
        video: '<iframe width="100%" height="350px" src="https://www.youtube.com/embed/IfvzEXhhWNk" frameborder="0" allowfullscreen></iframe>'
    }
];

movieSearch.addEventListener("submit", browseMovies);
output.addEventListener("click", closeOutputValue);

function browseMovies(e) {
    e.preventDefault();
    for(let i = 0; i < movie.length; i++) {
        if(findMovie.value == movie[i].title || findMovie.value == movie[i].title.toUpperCase() || findMovie.value == movie[i].title.toLowerCase()) {
            output.innerHTML = 
            `
            <div class="output-left">
                <center><h1>${movie[i].title}</h1></center>
                <ul class="output-details">
                    <li>${movie[i].releaseDate}</li>
                    <li>${movie[i].Genre}</li>
                    <li>${movie[i].Duration}</li>
                </ul>
                <img class="output-pic" src="${movie[i].img}" width="50%" height="180px"/>
                <button type="button" class="btn btn-danger closeButton">Close Search</button>
            </div> 
            <div class="output-right">
                ${movie[i].video}
            </div>
            `;
            $("#outputValue").show();
        }
    } 

    while(findMovie.value == "") {
        console.log("please fill in a movie");
        output.innerHTML = "please fill in a movie";
        break;
    }

    findMovie.value = "";
}

function closeOutputValue(e) {
    if(e.target.className == "btn btn-danger closeButton") {
        setTimeout(() => {
            document.getElementById("outputValue").style.display = "none";
        }, 200);
    }
}
