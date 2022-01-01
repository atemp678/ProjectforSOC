import movies from "../data/data.js";

// getMovieByID should return the particular movies we are looking for
// createMovie should add a recipe to the collection and return the new movie
// updateMoviesByID should replace the movie at a certain ID with an updated version and return the new movie
// deleteMoviesByID should remove the specific movies from the collection, and return the deleted movie

// GET ALL movies
// getMovies should return an array of all recipes
export async function getMovies() {
  return movies;
}

// GET A Movie BY ID
export async function getMovieByID(id) {
  const movieById = movies.find(({ id }) => id === id);
  if (movieById) {
    return movieById;
  }
}

// CREATE A movie
export async function createMovie(movie) {
  movies.push(movie);
  return movies[movies.length - 1];
}

// UPDATE A Movie BY ID
export async function updateMovieByID(id, updates) {
  //take in the id, take in an updated movie
  //find the movie with the id matching what we were given.
  //replace that movie with the updates
  //return new movie
  const foundIndex = movies.findIndex(function (movie) {
    return movies.id === id;
  });
  movies[foundIndex] = updates;
  return movies[foundIndex];
}

// DELETE A movie BY ID
export async function deleteMovieByID(id) {
  //take an item with that id
  //find that item from the array
  const foundIndex = movies.findIndex(function (movie) {
    return movie.id === id;
  });
  const item = movies[foundIndex];
  //remove it from array
  //return that removed item
  movies.splice(foundIndex, 1);
  return item;
}
