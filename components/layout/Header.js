import { Box, VStack, StatusBar, Text } from "native-base";

const Header = () => (
  <>
    <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
    <Box safeAreaTop bgColor="#2c3e50">
      <VStack
        bg="#2c3e50"
        px={1}
        py={3}
        alignItems="center"
        justifyContent="center"
      >
        <Text color="#fff" fontSize={20} fontWeight="Bold">
          Hello World
        </Text>
      </VStack>
    </Box>
  </>
);

export default Header;
