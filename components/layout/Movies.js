import { Text, View, Button, Container, Center } from "native-base";
import { getMoviesNowPlaying } from "../../services/api";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import MovieList from "../lists/MovieList";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  /*   useEffect(() => {
    async function updateMoviesList(moviesList) {
      try {
        const list = await getMoviesNowPlaying();
        console.log("fetching api...");
        setMoviesList(list.data.results);
      } catch (error) {
        throw error;
      }
    }
  }, []); */

  async function updateMoviesList(moviesList) {
    try {
      const list = await getMoviesNowPlaying();
      console.log("fetching api...");
      setMoviesList(list.data.results);
    } catch (error) {
      throw error;
    }
  }

  /*   updateMoviesList(); */

  return (
    <Container>
      <Center px={4}>
        {isLoading ? <Loading /> : <MovieList movies={moviesList} />}
        <Button onPress={updateMoviesList}>Butt</Button>
      </Center>
    </Container>
  );
};

export default Movies;
