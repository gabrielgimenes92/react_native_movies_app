import { FlatList } from "native-base";
import MovieCard from "../listItems/MovieCard";

const SeriesList = (props) => {
  const { movies } = props;

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          id={item.id}
          image={item.poster_path}
          title={item.original_name}
          release={item.first_air_date}
          popularity={item.popularity}
        />
      )}
    />
  );
};

export default SeriesList;
