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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaW5kTW92aWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmQtbW92aWVcIik7XG5jb25zdCBtb3ZpZVNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92aWUtc2VhcmNoXCIpO1xuY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIik7XG5cbm1vdmllID0gW1xuICAgIHtcbiAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJJdFwiLFxuICAgICAgICByZWxlYXNlRGF0ZTogXCJTZXB0ZW1iZXIgOCwgMjAxN1wiLFxuICAgICAgICBHZW5yZTogXCJIb3Jyb3JcIixcbiAgICAgICAgRHVyYXRpb246IFwiMiBociAxNSBtaW5zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJUaGUgTW91bnRhaW4gQmV0d2VlbiBVc1wiLFxuICAgICAgICByZWxlYXNlRGF0ZTogXCJPY3RvYmVyIDYsIDIwMTdcIixcbiAgICAgICAgR2VucmU6IFwiQWN0aW9uL0FkdmVudHVyZVwiLFxuICAgICAgICBEdXJhdGlvbjogXCIxIGhyIDQ0IG1pblwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgdGl0bGU6IFwiR2VvIFN0b3JtXCIsXG4gICAgICAgIHJlbGVhc2VEYXRlOiBcIk9jdG9iZXIgMjAsIDIwMTdcIixcbiAgICAgICAgR2VucmU6IFwiQWN0aW9uL0FkdmVudHVyZVwiLFxuICAgICAgICBEdXJhdGlvbjogXCIxIGhyIDQ5IG1pblwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgdGl0bGU6IFwiQSBCYWQgTW9tcyBDaHJpc3RtYXNcIixcbiAgICAgICAgcmVsZWFzZURhdGU6IFwiTm92ZW1iZXIgMSwgMjAxN1wiLFxuICAgICAgICBHZW5yZTogXCJDb21lZHlcIixcbiAgICAgICAgRHVyYXRpb246IFwiMSBociA0NCBtaW5zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgcmVsZWFzZURhdGU6IFwiXCIsXG4gICAgICAgIEdlbnJlOiBcIlwiLFxuICAgICAgICBEdXJhdGlvbjogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICByZWxlYXNlRGF0ZTogXCJcIixcbiAgICAgICAgR2VucmU6IFwiXCIsXG4gICAgICAgIER1cmF0aW9uOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHJlbGVhc2VEYXRlOiBcIlwiLFxuICAgICAgICBHZW5yZTogXCJcIixcbiAgICAgICAgRHVyYXRpb246IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgcmVsZWFzZURhdGU6IFwiXCIsXG4gICAgICAgIEdlbnJlOiBcIlwiLFxuICAgICAgICBEdXJhdGlvbjogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICByZWxlYXNlRGF0ZTogXCJcIixcbiAgICAgICAgR2VucmU6IFwiXCIsXG4gICAgICAgIER1cmF0aW9uOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHJlbGVhc2VEYXRlOiBcIlwiLFxuICAgICAgICBHZW5yZTogXCJcIixcbiAgICAgICAgRHVyYXRpb246IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgcmVsZWFzZURhdGU6IFwiXCIsXG4gICAgICAgIEdlbnJlOiBcIlwiLFxuICAgICAgICBEdXJhdGlvbjogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICByZWxlYXNlRGF0ZTogXCJcIixcbiAgICAgICAgR2VucmU6IFwiXCIsXG4gICAgICAgIER1cmF0aW9uOiBcIlwiXG4gICAgfVxuXTtcblxubW92aWVTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBicm93c2VNb3ZpZXMpO1xuZmluZE1vdmllLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbnB1dEZvY3VzKTtcbmZpbmRNb3ZpZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBpbnB1dEZvY3VzT3V0KTtcblxuZnVuY3Rpb24gYnJvd3NlTW92aWVzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1vdmllLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGZpbmRNb3ZpZS52YWx1ZSA9PSBtb3ZpZVtpXS50aXRsZSB8fCBmaW5kTW92aWUudmFsdWUgPT0gbW92aWVbaV0udGl0bGUudG9VcHBlckNhc2UoKSB8fCBmaW5kTW92aWUudmFsdWUgPT0gbW92aWVbaV0udGl0bGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgb3V0cHV0LmlubmVySFRNTCA9IFxuICAgICAgICAgICAgYDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+JHttb3ZpZVtpXS50aXRsZX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4ke21vdmllW2ldLnJlbGVhc2VEYXRlfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPiR7bW92aWVbaV0uR2VucmV9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+JHttb3ZpZVtpXS5EdXJhdGlvbn08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5zaG93KCkuZmFkZU91dCg0MDAwKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgZmluZE1vdmllLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaW5wdXRGb2N1cyhlKSB7XG4gICAgaWYoZS50YXJnZXQudGFnTmFtZSA9PSBcIklOUFVUXCIpIHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUud2lkdGggPSBcIjgwJVwiO1xuICAgIH0gXG59XG5cbmZ1bmN0aW9uIGlucHV0Rm9jdXNPdXQoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBmaW5kTW92aWUuc3R5bGUud2lkdGggPSBcIjQwJVwiO1xuICAgIH0sIDEwMDApXG59Il19
