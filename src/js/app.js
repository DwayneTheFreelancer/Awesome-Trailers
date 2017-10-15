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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmxldCBmaW5kTW92aWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmQtbW92aWVcIik7XG5jb25zdCBtb3ZpZVNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92aWUtc2VhcmNoXCIpO1xuY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRWYWx1ZVwiKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZUJ1dHRvblwiKTtcblxuY29uc3QgbW92aWUgPSBbXG4gICAge1xuICAgICAgICBpbWc6IFwic3JjL2ltYWdlcy9JdC5qcGdcIixcbiAgICAgICAgY2xvc2VCdXR0b246IFwic3JjL2ltYWdlcy9jbG9zZSBjb3B5LnN2Z1wiLFxuICAgICAgICB0aXRsZTogXCJJdFwiLFxuICAgICAgICByZWxlYXNlRGF0ZTogXCJTZXB0ZW1iZXIgOCwgMjAxN1wiLFxuICAgICAgICBHZW5yZTogXCJIb3Jyb3JcIixcbiAgICAgICAgRHVyYXRpb246IFwiMiBociAxNSBtaW5zXCIsXG4gICAgICAgIHZpZGVvOiAnPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2NkZzE5M0d2bkJBXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiBcInNyYy9pbWFnZXMvbW91bnRhaW5fYmV0d2Vlbl91cy5qcGdcIixcbiAgICAgICAgY2xvc2VCdXR0b246IFwic3JjL2ltYWdlcy9jbG9zZSBjb3B5LnN2Z1wiLFxuICAgICAgICB0aXRsZTogXCJUaGUgTW91bnRhaW4gQmV0d2VlbiBVc1wiLFxuICAgICAgICByZWxlYXNlRGF0ZTogXCJPY3RvYmVyIDYsIDIwMTdcIixcbiAgICAgICAgR2VucmU6IFwiQWN0aW9uL0FkdmVudHVyZVwiLFxuICAgICAgICBEdXJhdGlvbjogXCIxIGhyIDQ0IG1pblwiLFxuICAgICAgICB2aWRlbzogJzxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzUwcHhcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC91Q0IyNWxqOU0tc1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZzogXCJzcmMvaW1hZ2VzL2dlb3N0b3JtLmpwZ1wiLFxuICAgICAgICBjbG9zZUJ1dHRvbjogXCJzcmMvaW1hZ2VzL2Nsb3NlIGNvcHkuc3ZnXCIsXG4gICAgICAgIHRpdGxlOiBcIkdlbyBTdG9ybVwiLFxuICAgICAgICByZWxlYXNlRGF0ZTogXCJPY3RvYmVyIDIwLCAyMDE3XCIsXG4gICAgICAgIEdlbnJlOiBcIkFjdGlvbi9BZHZlbnR1cmVcIixcbiAgICAgICAgRHVyYXRpb246IFwiMSBociA0OSBtaW5cIixcbiAgICAgICAgdmlkZW86ICc8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRXVPbFlQU0V6U2NcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xuICAgIH0sXG4gICAge1xuICAgICAgICBpbWc6IFwic3JjL2ltYWdlcy9iYWRfbW9tc19jaHJpc3RtYXMuanBnXCIsXG4gICAgICAgIGNsb3NlQnV0dG9uOiBcInNyYy9pbWFnZXMvY2xvc2UgY29weS5zdmdcIixcbiAgICAgICAgdGl0bGU6IFwiQSBCYWQgTW9tcyBDaHJpc3RtYXNcIixcbiAgICAgICAgcmVsZWFzZURhdGU6IFwiTm92ZW1iZXIgMSwgMjAxN1wiLFxuICAgICAgICBHZW5yZTogXCJDb21lZHlcIixcbiAgICAgICAgRHVyYXRpb246IFwiMSBociA0NCBtaW5zXCIsXG4gICAgICAgIHZpZGVvOiAnPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3lGZnhzckZEa0hFXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiBcInNyYy9pbWFnZXMvVGhvci5qcGdcIixcbiAgICAgICAgY2xvc2VCdXR0b246IFwic3JjL2ltYWdlcy9jbG9zZSBjb3B5LnN2Z1wiLFxuICAgICAgICB0aXRsZTogXCJUaG9yXCIsXG4gICAgICAgIHJlbGVhc2VEYXRlOiBcIk5vdmVtYmVyIDMsIDIwMTdcIixcbiAgICAgICAgR2VucmU6IFwiQWN0aW9uL0FkdmVudHVyZVwiLFxuICAgICAgICBEdXJhdGlvbjogXCIyIGhyIDEwIG1pblwiLFxuICAgICAgICB2aWRlbzogJzxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzUwcHhcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC91ZTgwUXdYTVJIZ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZzogXCJzcmMvaW1hZ2VzL21hcnNoYWxsLmpwZ1wiLFxuICAgICAgICBjbG9zZUJ1dHRvbjogXCJzcmMvaW1hZ2VzL2Nsb3NlIGNvcHkuc3ZnXCIsXG4gICAgICAgIHRpdGxlOiBcIk1hcnNoYWxsXCIsXG4gICAgICAgIHJlbGVhc2VEYXRlOiBcIk9jdG9iZXIgMTMsIDIwMTdcIixcbiAgICAgICAgR2VucmU6IFwiRHJhbWFcIixcbiAgICAgICAgRHVyYXRpb246IFwiMSBociA1OCBtaW5cIixcbiAgICAgICAgdmlkZW86ICc8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvSWZ2ekVYaGhXTmtcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xuICAgIH1cbl07XG5cbm1vdmllU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYnJvd3NlTW92aWVzKTtcbm91dHB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VPdXRwdXRWYWx1ZSk7XG5cbmZ1bmN0aW9uIGJyb3dzZU1vdmllcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtb3ZpZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihmaW5kTW92aWUudmFsdWUgPT0gbW92aWVbaV0udGl0bGUgfHwgZmluZE1vdmllLnZhbHVlID09IG1vdmllW2ldLnRpdGxlLnRvVXBwZXJDYXNlKCkgfHwgZmluZE1vdmllLnZhbHVlID09IG1vdmllW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIG91dHB1dC5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRwdXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+PGgxPiR7bW92aWVbaV0udGl0bGV9PC9oMT48L2NlbnRlcj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJvdXRwdXQtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+JHttb3ZpZVtpXS5yZWxlYXNlRGF0ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+JHttb3ZpZVtpXS5HZW5yZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+JHttb3ZpZVtpXS5EdXJhdGlvbn08L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm91dHB1dC1waWNcIiBzcmM9XCIke21vdmllW2ldLmltZ31cIiB3aWR0aD1cIjUwJVwiIGhlaWdodD1cIjE4MHB4XCIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgY2xvc2VCdXR0b25cIj5DbG9zZSBTZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRwdXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAke21vdmllW2ldLnZpZGVvfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgJChcIiNvdXRwdXRWYWx1ZVwiKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgd2hpbGUoZmluZE1vdmllLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgZmlsbCBpbiBhIG1vdmllXCIpO1xuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gXCJwbGVhc2UgZmlsbCBpbiBhIG1vdmllXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbmRNb3ZpZS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlT3V0cHV0VmFsdWUoZSkge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImJ0biBidG4tZGFuZ2VyIGNsb3NlQnV0dG9uXCIpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFZhbHVlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG59XG4iXX0=
