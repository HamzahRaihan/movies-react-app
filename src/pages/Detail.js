import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieListByID } from "../Api";

export const Detail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { movie_id } = useParams();

  useEffect(() => {
    getMovieListByID(movie_id).then((results) => {
      setMovieDetail(results);
    });
  });

  return (
    <div className="detail-wrapper">
      <Container>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nemo deserunt, repellat tempora possimus dignissimos illum nobis quam! Dolores, repudiandae atque accusantium voluptatum molestias exercitationem error possimus
          ducimus debitis maxime!
        </h1>
      </Container>
    </div>
  );
};
