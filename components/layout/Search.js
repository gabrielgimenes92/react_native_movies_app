import {
  Box,
  FormControl,
  Input,
  Icon,
  Select,
  CheckIcon,
  HStack,
  Button,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import Loading from "../Loading";
import ShowList from "../lists/ShowList";
import { searchMovie, searchMulti, searchTV } from "../../services/api";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [service, setService] = useState("mo");
  const [search, setSearch] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  async function onSubmit() {
    try {
      let list;
      switch (service) {
        case "mo":
          list = await searchMovie(search);
          break;
        case "mu":
          list = await searchMulti(search);
          break;
        case "tv":
          list = await searchTV(search);
          break;
      }
      console.log("fetching api for " + service + " with keyword " + search);
      console.log(list.data.results);
      setMoviesList(list.data.results);
    } catch (error) {
      throw error;
    }
  }

  const handleSetSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Box alignItems="center">
        <FormControl isRequired>
          <FormControl.Label pb={1}>
            Search Movie/TV Show Name
          </FormControl.Label>
          <Input
            InputLeftElement={
              <Icon
                as={<Entypo name="magnifying-glass" size={24} color="black" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            onChangeText={(value) => {
              handleSetSearch(value);
            }}
            placeholder="i.e. James Bond, CSI"
            w="80%"
          />
          <HStack pt={3} width="95%">
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
              <Select.Item label="movie" value="mo" />
              <Select.Item label="multi" value="mu" />
              <Select.Item label="tv" value="tv" />
            </Select>
            <Button ml={3} width="30%" onPress={onSubmit}>
              Search
            </Button>
          </HStack>
          <FormControl.ErrorMessage>
            Movie/TV show name is required
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      {isLoading ? <Loading /> : <ShowList movies={moviesList} />}
    </>
  );
};

export default Search;
