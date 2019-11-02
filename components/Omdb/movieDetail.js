import axios from '../../lib/axios';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Image from '../UIComponents/Image';
import { Table } from "react-bootstrap";

const Error = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieDetail = props => {
  const [detail, setDetail] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = process.env.API_KEY;
    if(props.id?.trim()) {
      axios.get(`/?i=${props.id}&apikey=${apiKey}`)
        .then(data => {
          const error = data.data?.Error;
          const movieDetail = data.data;
          if(error) {
            setError(error);
          } else {
            setDetail(movieDetail);
            setError(null);
          }
        });
    }
  }, [props.id]);

  if(error) {
    return (
      <div className="col col-md-12">
        <Error>{error}</Error>
      </div>
    )
  }
  const keys = Object.keys(detail) || [];
  if(keys.length) {
    return (
      <Container style={{ marginTop: "1rem" }}>
        <ImageContainer>
          <Image 
            src={detail.Poster} 
            alt={"Image not available"}
          />
        </ImageContainer>
        <br/>
        <Table striped bordered responsive variant="dark">
          <tbody>

            {keys.map((key, index) => {
              if(typeof detail[key] === "object") {
                let obj = detail[key][0] || {};
                let objKeys = Object.keys(obj) || [];
                return objKeys.map((objk, obji) => {
                  <tr key={obji}>
                    <td>{objk}</td>
                    <td>{obj[objk]}</td>
                  </tr>
                })
              }
              return (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{detail[key]}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    );
  } else {
    return <></>;
  }
}

export default MovieDetail;
