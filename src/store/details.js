import React, { useState } from "react";
import axios from "axios";
export const DetailsContext = React.createContext({
    movieId: null,
    showDetailsHandler: (id, mediaType) => {},
    closeDetailsHandler: () => {},
});

export default function DetailsContextProvider(props) {
    const [movieDetails, setMovieDetails] = useState(null);

    async function showDetailsHandler(id, mediaType) {
        const responseData = await axios.get(
            `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=74f029883a68ba2ef798a64bd3e1c849`
        );
        setMovieDetails(responseData.data);
    }

    const closeDetailsHandler = () => {
        setMovieDetails(null);
    };

    return (
        <DetailsContext.Provider
            value={{
                movieDetails,
                showDetailsHandler,
                closeDetailsHandler,
            }}
        >
            {props.children}
        </DetailsContext.Provider>
    );
}
