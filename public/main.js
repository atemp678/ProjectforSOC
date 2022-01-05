import { getMovieByID } from "../models/functions";

const getMovieButton = document.querySelector(".button"); 

getMovieButton.addEventListener("onClick", getMovieByID()); 

