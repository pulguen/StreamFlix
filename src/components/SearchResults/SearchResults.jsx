import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import options from "../../config/apiOptions";
import { Card, Button } from "react-bootstrap";
import './SearchResult.css'

const SearchResults = () => {
  const [category] = useState("movie");
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const { search } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/${category}?query=${search}&language=es-MX&page=${page}`, options)
      .then(response => response.json())
      .then(response => {
        setSearchResults(response.results);
        setTotalPages(response.total_pages);
      })
      .catch(err => console.error(err));
  }, [category, search, page]);

  return (
    <PrivateRoute>
      <div className="d-flex align-items-center flex-column">
        <div className="d-flex flex-wrap justify-content-center">
          {searchResults.map((selectedMovie) => (
            <Link
              key={selectedMovie.id}
              to={`../movie/${selectedMovie.id}`}
              className="text-decoration-none"
            >
              <Card style={{ width: "200px", border: "1px solid red", margin: "10px" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${selectedMovie.poster_path}`}
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="h6 text-truncate" style={{ maxHeight: "3rem" }}>
                    {selectedMovie.title}
                  </Card.Title>
                  <p className="text-muted">Año: {selectedMovie.release_date ? selectedMovie.release_date.substring(0, 4) : "N/A"}</p>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
        <div className="d-flex justify-content-center w-100 mb-4">
          <Link to="/">
            <Button variant="outline-primary" className="boton">
              Inicio
            </Button>
          </Link>
          <Button
            variant="primary"
            onClick={() => {
              page > 1 && setPage(page - 1);
            }}
            className="boton"
          >
            Atrás
          </Button>{" "}
          <Button
            variant="primary"
            onClick={() => {
              page < totalPages && setPage(page + 1);
            }}
            className="boton"
          >
            Siguiente
          </Button>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default SearchResults;
