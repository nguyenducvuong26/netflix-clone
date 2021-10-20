import React, { useEffect, useState, useContext } from "react";
import axios from "../../axios/axios";
import classes from "./Row.module.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { DetailsContext } from "../../store/details";

const baseUrl = "http://image.tmdb.org/t/p/original";

SwiperCore.use([Navigation]);

function Row({ title, fetchUrl, isLargeRow, mediaType }) {
    const [movies, setMovies] = useState([]);
    const { showDetailsHandler } = useContext(DetailsContext);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            return;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className={classes.row}>
            <h2 className={classes.title}>
                {isLargeRow ? title.toUpperCase() : title}
            </h2>
            <Swiper
                className={`${classes["poster-list"]} ${
                    isLargeRow && classes["large-row"]
                }`}
                spaceBetween={12}
                slidesPerView={2}
                slidesPerGroup={2}
                navigation
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        minWidth: 640,
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        minWidth: 768,
                        slidesPerView: 4,
                        slidesPerGroup: 3,
                    },
                    // when window width is >= 1024px
                    1024: {
                        minWidth: 1024,
                        slidesPerView: 6,
                        slidesPerGroup: 4,
                    },
                }}
            >
                {movies.map((movie) => (
                    <SwiperSlide
                        key={movie.id}
                        className={classes["poster-item"]}
                    >
                        <img
                            onClick={() => {
                                let newMediaType = null;
                                if (mediaType) {
                                    newMediaType = mediaType;
                                } else {
                                    newMediaType = movie.media_type;
                                }
                                return showDetailsHandler(
                                    movie.id,
                                    newMediaType
                                );
                            }}
                            className={classes.image}
                            src={`${baseUrl}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Row;
