import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import requests from "../../apis/requests";
import classes from "./Banner.module.css";

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            const movies = await axios.get(requests[1].fetchUrl);
            setMovie(
                movies.data?.results[
                    Math.floor(Math.random() * movies?.data.results.length - 1)
                ]
            );
        }
        fetchMovie();
    }, []);

    function truncate(string, numberOfCharacters) {
        return string?.length > numberOfCharacters
            ? string.substring(0, numberOfCharacters - 1) + "..."
            : string;
    }

    return (
        <div
            className={classes.banner}
            style={{
                backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className={classes.content}>
                <h1>{movie?.name || movie?.title || movie?.orginal_title}</h1>
                <div className={classes.actions}>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{truncate(movie?.overview, 200)}</p>
            </div>
            <div className={classes["banner-fade-left"]} />
            <div className={classes["banner-fade-bottom"]} />
        </div>
    );
}

export default React.memo(Banner);
