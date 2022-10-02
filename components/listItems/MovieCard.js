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

const MovieCard = (props) => {
  const { id, image, title, release, popularity } = props;
  const basicImageUri = "https://image.tmdb.org/t/p/original";

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
            <Button width="100%">More Details</Button>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MovieCard;
