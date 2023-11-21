import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import options from '../../config/apiOptions'

const SearchResults = () => {

    const [category, setCategory] = useState('movie')
    const [searchResults, setSearchResults] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)

    const { search } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/${category}?query=${search}&language=es-MX&page=${page}`, options)
            .then(response => response.json())
            .then(response => { setSearchResults(response.results); setTotalPages(response.total_pages) })
            .catch(err => console.error(err));
    }, [category, search, page])

    return (
        <PrivateRoute>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {searchResults.map(selectedMovie => (
                    <Link key={selectedMovie.id} to={`../movie/${selectedMovie.id}`}>
                        <div style={{ border: "1px solid red", width: "300px" }}>
                            <img src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${selectedMovie.poster_path}`} alt="" />
                            <p>{selectedMovie.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div style={{ marginBottom: "60px" }}>
                <button onClick={() => { page > 1 && setPage(page - 1) }}>atras</button>
                <button onClick={() => { page < totalPages && setPage(page + 1) }}>siguiente</button>
            </div>
        </PrivateRoute>
    )
}

export default SearchResults