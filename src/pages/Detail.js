import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieListByID } from "../Api";

export const Detail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [backdropUrl, setBackdropUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const { movie_id } = useParams();

  useEffect(() => {
    getMovieListByID(movie_id).then((results) => {
      setMovieDetail(results);
      setBackdropUrl(`${process.env.REACT_APP_BASEIMAGEURL}/${movieDetail.backdrop_path}`);
      setLoading();
    });
  }, []);

  if (loading) {
    return <h1 className="mt-5 pt-5">loading...</h1>;
  }

  return (
    <div className="detail-wrapper text-white">
      <div className="content" style={{ backgroundImage: `url(${process.env.REACT_APP_BASEIMAGEURL}/${movieDetail.backdrop_path})`, backgroundSize: "cover", height: "80vh" }}>
        <div className="overlay-detail">
          <Container fluid>
            <Row>
              <Col md={3}>
                <Image className="img-fluid ps-5 mt-5 pt-5 pb-3" src={`${process.env.REACT_APP_BASEIMAGEURL}/${movieDetail.poster_path}`} alt="Card image" />
              </Col>
              <Col md={9}>
                <div className="overview mt-sm-5 pt-md-5 pt-sm-2">
                  <h1 className="title">
                    <h4>{movieDetail.title}</h4>
                  </h1>
                  <p className="" style={{ fontSize: "20px" }}>
                    {movieDetail.overview}
                  </p>
                </div>
                <div>
                  <p>
                    Genres:
                    {movieDetail.genres.map((i) => (
                      <> {i.name} </>
                    ))}
                  </p>
                  <p>Status: {movieDetail.status}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
