const getMovieButton = document.getElementById("getMovieButton"); 
const movieSearch = document.getElementById("movieSearch");

getMovieButton.addEventListener("click", () => {
    fetch(`http://localhost:3000/movies?search=${movieSearch.value}`)
    .then(res => res.json())
    .then(result => {
        console.log("Result", result);
    })
}); 

