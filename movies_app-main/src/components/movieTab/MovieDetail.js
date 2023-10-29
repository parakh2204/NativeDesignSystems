import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Container,
  CardImg,
  Button,
  Spinner,
} from "reactstrap";
import { useParams } from "react-router-dom";
import UpdateMoviePopup from "../movieTab/UpdateMoviePopup";
import { ToastContainer } from "react-toastify";
function MovieDetail(props) {
  const [movieData, setMovieData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [loading, setLoading] = useState(true)
  const getMoviesData = async () => {
    const fetchUrl = `https://www.myapifilms.com/imdb/idIMDB?idIMDB=${id}&token=${process.env.REACT_APP_MYAPI_ENDPOINT_TOKEN}`;
    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer 7EwYxT-Z1DCReyP5LWk4NXSn4XVPxffV4mWG-wL_mDU`,
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(fetchUrl, fetchOptions).then((response) => {
      return response.json();
    });
    setMovieData(response.data.movies[0]);
    setOriginalData(response.data.movies[0]);
    setLoading(false)
  };
  useEffect(() => {
    getMoviesData();
  }, [id]);

  return (
    <Container>
      {loading && (
        <div style={{ top: "50%", position: "absolute", left: '50%' }}>
          <Spinner color="primary"></Spinner>
        </div>
      )}
      {!loading && (
        <>
          <Row className="mt-5">
            <Col sm="3"></Col>
            <Col sm="6">
              {movieData && (
                <Card body>
                  <CardImg
                    alt="Card image cap"
                    src={movieData.urlPoster}
                    style={{
                      height: "350px",
                    }}
                    width="100%"
                  />
                  <CardTitle tag="h5">{movieData.title}</CardTitle>
                  <CardText>{movieData.simplePlot}</CardText>
                  <CardText>
                    Genres:{" "}
                    {movieData.genres.map((data, index) => {
                      return (
                        <span>
                          {data}
                          {movieData.genres.length - 2 >= index && ","}
                        </span>
                      );
                    })}
                  </CardText>
                  <CardText>Rating: {movieData.rating}</CardText>
                  <CardText>Votes: {movieData.votes}</CardText>
                  <Button color="primary" onClick={() => toggle()}>
                    Update
                  </Button>
                </Card>
              )}
            </Col>
            <Col sm="3"></Col>
          </Row>
          <UpdateMoviePopup
            modal={modal}
            toggle={toggle}
            originalData={originalData}
            setMovieData={setMovieData}
          />
          <ToastContainer />
        </>
      )}
    </Container>
  );
}

export default MovieDetail;
