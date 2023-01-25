import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { getMovieList, searchMovie } from "../Api";
import { useEffect, useState } from "react";
import React from "react";
import { Loading } from "../components/Loading";

export const LandingPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const PopularMovieLists = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Col md={4} className="mt-5">
          <Card className="bg-dark text-white text-center movieImage">
            <Image src={`${process.env.REACT_APP_BASEIMAGEURL}/${movie.poster_path}`} alt="Card image" />
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text className="text-truncate">{movie.overview}</Card.Text>
            <Card.Text>
              Rating: <span style={{ color: "yellow" }}>{movie.vote_average}</span>
            </Card.Text>
            <Card.Text>Release date: {movie.release_date}</Card.Text>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="wrapper">
      <div className="welcome-message">
        <Container className="text-white d-flex justify-content-center align-item-center ">
          <Row>
            <Col>
              <h3 className="text-center">Search your favorite movies</h3>
              <input className="movie-search" placeholder="Search Movie..." type="text" onChange={({ target }) => search(target.value)} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="trending">
        <div className="overlay-trending">
          <Container>
            <Row>
              <Loading />
              <PopularMovieLists />
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
