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

app.get("/movies", async function (req, res) {
  const allMovies = await getMovies();
  res.json({
    success: true,
    payload: allMovies,
  });
});

app.get("/movie/:id", async function (req, res) {
  const movieByID = await getMovieByID();
  res.json({
    success: true,
    payload: movieByID,
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
