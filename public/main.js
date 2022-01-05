const getMovieButton = document.getElementById("getMovieButton"); 

getMovieButton.addEventListener("click", () => {
    console.log("here");
    fetch("http://localhost:3000/movies?search=d")
    .then(res => res.json())
    .then(result => {
        console.log("Result", result);
        
    })
}); 

