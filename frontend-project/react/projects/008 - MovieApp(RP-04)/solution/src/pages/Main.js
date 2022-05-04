import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query='



const Main = () => {

    const [ movies, setMovies ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState('') 
    const {currentUser} = useContext(AuthContext)

    useEffect(() => {
        getMovies(FEATURED_API)
    }, [])

    const getMovies = (API) => {
        fetch(API)
        .then(res => res.json())
        .then(res => setMovies(res.results))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchTerm && currentUser) {
            getMovies(SEARCH_API + searchTerm)
        }else{
            alert('Please log in to search a movie.')
        }
        setSearchTerm('')
    }

    return (
        <>
        <form className='search' onSubmit={handleSubmit}>
            <input 
            type='search'
            className='search-input'
            placeholder='Search a movie...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit' >Search</button>
        </form>
        <div className='movie-container'>
            {movies.map((movie) => <MovieCard  key={movie.id} {...movie} />)}
        </div>
        </>
    )
}

export default Main;