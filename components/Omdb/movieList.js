import styled from 'styled-components';
import Router from 'next/Router';
import { Table } from "react-bootstrap";

const Error = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`;

const MovieList = props => {
  const redirectToDetail = (movie) => {
    Router.push({
      pathname: '/detail',
      query: { id: movie.imdbID }
    });
  };

  if(props.errMessage) {
    return (
      <div className="col col-md-12">
        <Error>{props.errMessage}</Error>
      </div>
    )
  }

  if(props.list?.length) {
    return (
      <Table striped bordered responsive variant="dark">
        <tbody>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Release Year</th>
          </tr>
          {props?.list?.map(movie => (
            <tr style={{cursor: 'pointer'}} key={movie.imdbID} onClick={() => redirectToDetail(movie)}>
              <td>
                {movie.Type}:
              </td>
              <td>
                {movie.Title}
              </td>
              <td>
                {movie.Year}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } else {
    return <></>;
  }
};

export default MovieList;
