import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "./MovieList.module.css";
import axios from "../../axios/axios";
import Movie from "./Movie";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=74f029883a68ba2ef798a64bd3e1c849&include_adult=true&vote_count.gte=5`
            );
            console.log(response);
            setMovies(response.data.results);
        }
        getMovies();
    }, [query]);

    return (
        <div className={classes.results}>
            <Box sx={{ width: "100%" }}>
                <Grid container rowSpacing={6} columnSpacing={1}>
                    {movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default MovieList;
