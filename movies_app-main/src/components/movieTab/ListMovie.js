import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function ListMovie(props) {
  const [moviesList, setMoviesList] = useState(null);
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
    setMoviesList(response.items[0].fields.moviesData);
  };
  useEffect(() => {
    getMoviesData();
  }, []);

  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Table className="mt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Awards</th>
              <th>Released</th>
              <th>Actors</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            {moviesList &&
              moviesList.map((data, index) => {
                return (
                  <tr key={index}>
                    <td
                      className="text-primary"
                      onClick={() => navigate(`detail/${data.imdbID}`)}
                      style={{ cursor: "pointer" }}
                    >
                      {data.Title}
                    </td>
                    <td>{data.Awards}</td>
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
