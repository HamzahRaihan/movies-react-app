import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { getMovieList } from "../Api";

export const TrendingMovie = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, []);

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
    <div className="trending">
      <div className="overlay-trending">
        <Container>
          <Row>
            <PopularMovieLists />
          </Row>
        </Container>
      </div>
    </div>
  );
};
