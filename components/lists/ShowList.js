import { FlatList } from "native-base";
import ShowCard from "../listItems/ShowCard";

const ShowList = (props) => {
  const { movies } = props;

  return (
    <FlatList
      width="100%"
      data={movies}
      renderItem={({ item }) =>
        item.original_title ? (
          <ShowCard
            id={item.id}
            image={item.poster_path}
            title={item.original_title}
            release={item.release_date}
            popularity={item.popularity}
            type={"movie"}
          />
        ) : (
          <ShowCard
            id={item.id}
            image={item.poster_path}
            title={item.original_name}
            release={item.first_air_date}
            popularity={item.popularity}
            type={"tv"}
          />
        )
      }
    />
  );
};

export default ShowList;
