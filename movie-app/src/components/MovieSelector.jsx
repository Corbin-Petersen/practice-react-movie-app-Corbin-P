import { useState } from 'react';
import testMovies from '../data/testData';

export default function MovieSelector() {

    // set up useState
    const [ selectedGenre, setGenre ] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState("");
    const [ movies, setMovies ] = useState(testMovies);

    // function to create array of genres pulled from movie list
    const getGenres = (films) => {
        let list = [];
        for (film in films) {
            let movObj = JSON.parse(film);
            for (genre in movObj.Genre) {
                if (!list.includes(genre)){
                    list.push(genre);
                }
            }
        }
        return list;
    }

    const genreList = getGenres(testMovies);

    return (
        <div className="select-container">
            <h2>Select a movie genre:</h2>
            <select id="genre-select" name="genres">
                {genreList.map(genre => {
                    <option value={genre}>{genre}</option>
                })}
            </select>
        </div>
    );

}