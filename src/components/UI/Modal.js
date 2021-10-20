import React, { useEffect, useContext } from "react";
import classes from "./Modal.module.css";
import { DetailsContext } from "../../store/details";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus, AiFillStar, AiFillCloseCircle } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";

function connectElements(array) {
    if (array.length === 1) {
        return array.map((element) => element.name).join("");
    } else {
        return array.map((element) => element.name).join(", ");
    }
}

export const Backdrop = () => {
    const { movieDetails, closeDetailsHandler } = useContext(DetailsContext);

    return (
        <React.Fragment>
            {movieDetails && (
                <div
                    className={classes.backdrop}
                    onClick={closeDetailsHandler}
                />
            )}
        </React.Fragment>
    );
};

export const Modal = () => {
    const { movieDetails, closeDetailsHandler } = useContext(DetailsContext);

    useEffect(() => {
        const modal = document.querySelector(`.${classes.modal}`);
        if (modal.scrollHeight > 700) {
            modal.classList.add(classes.overflowYScroll);
        }
    }, []);

    return (
        <div className={classes.modal}>
            <div
                className={classes.banner}
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}")`,
                }}
            >
                <div className={classes.close} onClick={closeDetailsHandler}>
                    <AiFillCloseCircle />
                </div>
                <div className={classes["banner-infor"]}>
                    <h2>
                        {movieDetails?.name ||
                            movieDetails?.title ||
                            movieDetails?.original_title}
                    </h2>
                    <div className={classes.actions}>
                        <button>
                            <FaPlay />
                            <span>Play</span>
                        </button>
                        <span>
                            <AiOutlinePlus />
                        </span>
                        <span>
                            <BiLike />
                        </span>
                        <span>
                            <BiDislike />
                        </span>
                    </div>
                </div>
                <div className={classes["banner-overlay"]} />
            </div>
            <div className={classes.information}>
                <div>
                    <div className={classes.rate}>
                        <AiFillStar />
                        <span>{movieDetails?.vote_average}</span>
                        <span>
                            {movieDetails?.first_air_date ||
                                movieDetails?.release_date}
                        </span>
                    </div>
                    <div className={classes.description}>
                        <p>{movieDetails?.overview}</p>
                    </div>
                </div>
                <div>
                    <div className={classes.genres}>
                        <span>Genres:</span>
                        <span>
                            {movieDetails &&
                                connectElements(movieDetails?.genres)}
                        </span>
                    </div>
                    <div className={classes.companies}>
                        <span>Companies:</span>
                        <span>
                            {movieDetails &&
                                connectElements(
                                    movieDetails?.production_companies
                                )}
                        </span>
                    </div>
                    <div className={classes.countries}>
                        <span>Countries:</span>
                        <span>
                            {movieDetails &&
                                connectElements(
                                    movieDetails?.production_countries
                                )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
