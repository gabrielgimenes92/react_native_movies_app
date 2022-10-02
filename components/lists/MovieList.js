import { FlatList } from "native-base";
import MovieCard from "../listItems/MovieCard";

const MovieList = (props) => {
  const { movies } = props;

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          id={item.id}
          image={item.poster_path}
          title={item.original_title}
          release={item.release_date}
          popularity={item.popularity}
        />
      )}
    />
  );
};

export default MovieList;
