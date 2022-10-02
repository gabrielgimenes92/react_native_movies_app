import { FlatList } from "native-base";
import MovieCard from "../listItems/MovieCard";

const ShowList = (props) => {
  const { movies } = props;

  return (
    <FlatList
      width="100%"
      data={movies}
      renderItem={({ item }) =>
        item.original_title ? (
          <MovieCard
            id={item.id}
            image={item.poster_path}
            title={item.original_title}
            release={item.release_date}
            popularity={item.popularity}
          />
        ) : (
          <MovieCard
            id={item.id}
            image={item.poster_path}
            title={item.original_name}
            release={item.first_air_date}
            popularity={item.popularity}
          />
        )
      }
    />
  );
};

export default ShowList;
