const API_KEY = "74f029883a68ba2ef798a64bd3e1c849";

const requests = [
    {
        title: "Netflix Originals",
        fetchUrl: `discover/tv?api_key=${API_KEY}&with_network=213`,
        isLargeRow: true,
        mediaType: "tv",
    },
    {
        title: "Trending Now",
        fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        isLargeRow: false,
    },
    {
        title: "Top Rated",
        fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        isLargeRow: false,
        mediaType: "movie",
    },
    {
        title: "Action Movies",
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        isLargeRow: false,
        mediaType: "movie",
    },
    {
        title: "Comedy Movies",
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        isLargeRow: false,
        mediaType: "movie",
    },
    {
        title: "Horror Moviess",
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        isLargeRow: false,
        mediaType: "movie",
    },
    {
        title: "Romance Movies",
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        isLargeRow: false,
        mediaType: "movie",
    },
    {
        title: "Documentaries Movies",
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        isLargeRow: false,
        mediaType: "movie",
    },
];

export default requests;
