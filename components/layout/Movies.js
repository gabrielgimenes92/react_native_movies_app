import { Button, Container, Center, Select, Box, CheckIcon } from "native-base";
import {
  getMoviesNowPlaying,
  getMoviesPopular,
  getMoviesUpcoming,
  getMoviesTopRated,
} from "../../services/api";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import MovieList from "../lists/MovieList";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [service, setService] = useState("np");

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

  async function updateMoviesList() {
    try {
      let list = {};
      switch (service) {
        case "np":
          list = await getMoviesNowPlaying();
          break;
        case "p":
          list = await getMoviesPopular();
          break;
        case "tr":
          list = await getMoviesTopRated();
          break;
        case "u":
          list = await getMoviesUpcoming();
          break;
      }
      console.log("fetching api for " + service);
      setMoviesList(list.data.results);
    } catch (error) {
      throw error;
    }
  }

  /* updateMoviesList(); */

  useEffect(() => {
    console.log(service);
  }, [service]);

  return (
    <Container>
      <Center>
        <Box maxW="300" py={6}>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose category"
            placeholder="Choose category"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="now playing" value="np" />
            <Select.Item label="popular" value="p" />
            <Select.Item label="top rated" value="tr" />
            <Select.Item label="upcoming" value="u" />
          </Select>
        </Box>
        {isLoading ? <Loading /> : <MovieList movies={moviesList} />}
        <Button onPress={updateMoviesList}>Butt</Button>
      </Center>
    </Container>
  );
};

export default Movies;
