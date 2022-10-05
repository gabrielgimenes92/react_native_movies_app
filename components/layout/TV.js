import { Button, Container, Center, Select, Box, CheckIcon } from "native-base";
import {
  getTVToday,
  getTVOnAir,
  getTVPopular,
  getTVTop,
} from "../../services/api";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import ShowList from "../lists/ShowList";

const TV = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [seriesList, setSeriesList] = useState([]);
  const [service, setService] = useState("at");

  /*   useEffect(() => {
    async function updateseriesList(seriesList) {
      try {
        const list = await getMoviesNowPlaying();
        console.log("fetching api...");
        setSeriesList(list.data.results);
      } catch (error) {
        throw error;
      }
    }
  }, []); */

  async function updateSeriesList() {
    try {
      let list = {};
      switch (service) {
        case "at":
          list = await getTVToday();
          break;
        case "ota":
          list = await getTVOnAir();
          break;
        case "p":
          list = await getTVPopular();
          break;
        case "tp":
          list = await getTVTop();
          break;
      }
      console.log("fetching api for " + service);
      setSeriesList(list.data.results);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    updateSeriesList();
  }, [service]);

  return (
    <Container maxWidth="90%">
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
            <Select.Item label="airing today" value="at" />
            <Select.Item label="on the air" value="ota" />
            <Select.Item label="popular" value="p" />
            <Select.Item label="top rated" value="tp" />
          </Select>
        </Box>
        {isLoading ? <Loading /> : <ShowList movies={seriesList} />}
      </Center>
    </Container>
  );
};

export default TV;
