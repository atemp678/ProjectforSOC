import express from "express";

import { html } from "./config.js";

import {
  getMovies,
  updateMovieByID,
  getMovieByID,
  createMovie,
  deleteMovieByID,
} from "./models/functions.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

/*our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.get("/movie/:id", async function (req, res) {
  console.log(req.params.id);
  var movieByID = await getMovieByID(req.params.id);
  if (movieByID) {
    res.json({
      success: true,
      payload: movieByID,
    });
  } else {
    res.json({
      success: false,
    });
  }
});

app.get("/movies", async function (req, res) {
  const searchString = req.query.search;
  let allMovies = await getMovies();
  if (searchString){
    allMovies = allMovies.filter(movieObj => movieObj.title.toLowerCase().includes(searchString.toLowerCase()))
  }
  res.json({
    success: true,
    payload: allMovies,
  });
});

app.post("/movies", async function (req, res) {
  let newMovie = req.body;
  newMovie = await createMovie();
  res.json({
    success: true,
    payload: newMovie,
  });
});

app.put("/movies/:id", async function (req, res) {
  let updatedMovie = await updateMovieByID(req.params.id, req.body);
  res.json({
    success: true,
    payload: updatedMovie,
  });
});

app.delete("/movies/:id", async function (req, res) {
  const deletedMovie = await deleteMovieByID(req.params.id);
  res.json({
    success: true,
    payload: deletedMovie,
  });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
