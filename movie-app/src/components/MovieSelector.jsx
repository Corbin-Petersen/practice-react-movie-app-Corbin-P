import { useState } from 'react';
import data from '../data/testData.json';

const MovieSelector = () => {

    // set up useState
    const [ selectedGenre, setGenre ] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState("Please select a genre above");
    const [ movies, setMovies ] = useState(data);

    // build genre list from genres in movieList
    function getGenres(films) {
        let list = [];
        films.map(movie => {
            movie.Genre.map(genre => {
                if (!list.includes(genre)){
                    list.push(genre);
                }
            });
        });
        return list;
    }
    const genreList = getGenres(movies);

    //build out dropdown list of genres and field for displaying list
    return (
        <>
            <div className="select-container">
                <h2>Select a movie genre:</h2>
                <select id="genre-select" name="genres" onChange={e => setGenre(e.target.value)}>
                    <option value="">Select a genre</option>
                    {genreList.map(genre => (
                        <option key={genre.toLowerCase()} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="movie-list">
                <h2>Movies</h2>   
                <ul>
                    {selectedGenre 
                        ? movies.map(movieObj => (
                            movieObj.Genre.includes(selectedGenre) &&
                                <li className="movie">
                                    <img src={movieObj.Images[1]} className="movie-image" />
                                    <h3>{movieObj.Title}</h3>
                                    <p>{movieObj.Year}</p>
                                </li>                        
                        ))
                        : <li><p>{error}</p></li>
                    }
                </ul>
            </div>
        </>
    );

}

export default MovieSelector