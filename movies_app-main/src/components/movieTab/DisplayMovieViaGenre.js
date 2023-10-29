import React, { useEffect, useState } from "react";
import { Table, Container, Input, Row, Col, Label } from "reactstrap";
export default function MovieViaGenre(props) {
  const [moviesViaGenres, setMoviesViaGenres] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [uniqueGenre, setUniqueGenre] = useState(null);
  const [currentSelectedValue, setCurrentSelectedValue] = useState("Action");
  const getMoviesData = async () => {
    const fetchUrl = `${process.env.REACT_APP_CONTENTFUL_ENDPOINT_URL}`;
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
    if (response) {
      let tempArr = [];
      response.items[0].fields.moviesData.map((row) => {
        row.Genre.split(",").map((child) => {
          tempArr.push(child);
        });
      });
      setUniqueGenre(Array.from(new Set(tempArr)));
      setApiData(response.items[0].fields.moviesData);
    }
  };
  useEffect(() => {
    getMoviesData();
  }, []);
  useEffect(() => {
    if (apiData && currentSelectedValue) {
      let tempArr = [];
      apiData.map((data) => {
        if (data.Genre.includes(currentSelectedValue)) {
          tempArr.push(data);
        }
      });
      setMoviesViaGenres(tempArr);
    }
  }, [apiData, currentSelectedValue]);
  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col style={{ flex: "0.5 1" }}>
            <Label for="selectGenre" className="d-inline-block">
              Sort based on genre
            </Label>
            <Input
              id="selectGenre"
              name="genre"
              type="select"
              className="d-inline-block w-50"
              style={{ marginLeft: "10px" }}
              onChange={(e) => {
                setCurrentSelectedValue(e.target.value);
              }}
            >
              {uniqueGenre &&
                uniqueGenre.map((option) => {
                  return <option>{option}</option>;
                })}
            </Input>
          </Col>
        </Row>
        <Table className="mt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Awards</th>
              <th>Genre</th>
              <th>Released</th>
              <th>Actors</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            {moviesViaGenres &&
              moviesViaGenres.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.Title}</td>
                    <td>{data.Awards}</td>
                    <td>{data.Genre}</td>
                    <td>{data.Released}</td>
                    <td>{data.Actors}</td>
                    <td>{data.Director}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
