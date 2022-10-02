import { Box, VStack, Divider, Center, Image, Text } from "native-base";

const MovieCard = (props) => {
  const { id, image, title, release, popularity } = props;
  const basicImageUri = "https://image.tmdb.org/t/p/original";

  return (
    <Box>
      <VStack space={4} divider={<Divider />}>
        <Center>
          <Box>
            <Image
              alt={"label"}
              source={{ uri: basicImageUri + image }}
              size="2xl"
            />
          </Box>
          <Box px={4} py={4}>
            <Text>eta</Text>
          </Box>
        </Center>
      </VStack>
    </Box>
  );
};

export default MovieCard;
