import {
  Box,
  VStack,
  Divider,
  Button,
  Image,
  Text,
  HStack,
  Heading,
} from "native-base";
import { getMovieById, getSerieById } from "../../services/api";

const MovieCard = (props) => {
  const { id, image, title, release, popularity, type } = props;
  const basicImageUri = "https://image.tmdb.org/t/p/original";

  async function onSubmit() {
    let show;
    if (type == "movie") {
      show = await getMovieById(id);
      console.log("This movie name is: " + show.original_title);
      /* navigation.navigate("Details"); */
    } else {
      show = await getSerieById(id);
      console.log("This series name is: " + show.original_name);
    }
  }

  return (
    <Box>
      <VStack py={2} divider={<Divider />}>
        <HStack space={2}>
          <Box>
            <Image
              alt={"label"}
              source={{ uri: basicImageUri + image }}
              size="xl"
            />
          </Box>
          <Box>
            <Heading size="sm">{title}</Heading>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {release}</Text>
            <Button width="100%" onPress={onSubmit}>
              More Details
            </Button>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MovieCard;
