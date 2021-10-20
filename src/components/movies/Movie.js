import React, { useContext } from "react";
import classes from "./Movie.module.css";
import Grid from "@mui/material/Grid";
import { DetailsContext } from "../../store/details";

const baseUrl = "http://image.tmdb.org/t/p/original/";

function Movie({ movie }) {
    const { showDetailsHandler } = useContext(DetailsContext);
    return (
        <Grid item lg={2} md={3} sm={4} xs={6}>
            <img
                onClick={() => showDetailsHandler(movie.id, movie.media_type)}
                className={classes.img}
                src={`${baseUrl}${movie.backdrop_path}`}
                alt={movie.name}
            />
        </Grid>
    );
}

export default Movie;
