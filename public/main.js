const getMovieButton = document.getElementById("getMovieButton"); 
const movieSearch = document.getElementById("movieSearch");
const resultsList = document.getElementById("resultsList"); 

getMovieButton.addEventListener("click", () => {
    fetch(`http://localhost:3000/movies?search=${movieSearch.value}`)
    .then(res => res.json())
    .then(result => {
        result.payload.forEach(element => {
            const li = document.createElement("li"); 
            li.innerText = element.title; 
            resultsList.appendChild(li);
        });

    })
}); 

