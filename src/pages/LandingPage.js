import { Card, Col, Container, Row, Image, InputGroup, Form, Button } from "react-bootstrap";
import { getMovieList, searchMovie } from "../Api";
import { useEffect, useState } from "react";
import React from "react";
import { Loading } from "../components/Loading";
import { Link } from "react-router-dom";

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
            <Card.Title>
              <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
            </Card.Title>
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
            <Col md={12}>
              <h3 className="text-center">Search your favorite movies</h3>
              <InputGroup className="mb-3">
                <Form.Control placeholder="Search your movie" onChange={({ target }) => search(target.value)} />
              </InputGroup>
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
