import React from "react";
import requests from "../apis/requests";
import Row from "../components/UI/Row";
import Banner from "../components/UI/Banner";

function HomePage() {
    return (
        <React.Fragment>
            <Banner />
            {requests.map((request) => (
                <Row
                    key={request.title}
                    title={request.title}
                    fetchUrl={request.fetchUrl}
                    isLargeRow={request.isLargeRow}
                    mediaType={request.mediaType}
                />
            ))}
        </React.Fragment>
    );
}

export default HomePage;
