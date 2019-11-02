import { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Textarea from "../UIComponents/Textarea";
import { textareStyle } from "../../lib/cssConstants";
import axios from '../../lib/axios';
import MovieList from './movieList';


const Omdb = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const textareaRef = useRef();

  useEffect(() => {
    textareaRef.current?.refreshState();
  }, []);

  const searchMovie = () => {
    const searchText = textareaRef.current?.state?.text
      || textareaRef.current?.props?.value;
    const apiKey = process.env.API_KEY;

    // Return if no search text
    if(!searchText?.trim()) {
      return;
    }

    axios.get(`/?s=${searchText}&apikey=${apiKey}`)
      .then(data => {
        const errorMessage = data.data?.Error;
        const searchData = data.data?.Search;
        if(errorMessage) {
          setError(errorMessage);
        } else if(searchData) {
          setMovies(searchData);
          setError(null);
        }
      });
  };
  
  return (
    <Container style={{ marginTop: "1rem" }}>
      <div className="row">
        <div className="col offset-md-2 col-md-8">
          <Textarea
            style={textareStyle}
            innerRef={textareaRef}
            ref={textareaRef}
            placeholder={"Search by Title"}
            autoFocus
            setValue={searchMovie}
            errorMessage={"Please enter Title"}
            onChangeCB={searchMovie}
          />
        </div>
      </div>
      <br/>
      <MovieList list={movies} errMessage={error}/>
    </Container>
  );
};

export default Omdb;
