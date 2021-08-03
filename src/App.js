
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box, Grid } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Contacto from "./Components/Contacto/Contacto";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";



function App() {
  return (
    <div>
 <Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
 <Box w="100%" h="50px" />

 <Navbar />
 <Home />
 <Footer />

 <Box
  w="100%"
  h="200px"
  bgGradient={[
    "linear(to-tr, teal.300,yellow.400)",
    "linear(to-t, blue.200, teal.500)",
    "linear(to-b, orange.100, purple.300)",
  ]}
/>


<Box
  as="button"
  p={4}
  color="white"
  fontWeight="bold"
  borderRadius="md"
  bgGradient="linear(to-r, teal.500,green.500)"
  _hover={{
    bgGradient: "linear(to-r, red.500, yellow.500)",
  }}
>
  Click here
</Box>

<Box w={1/2} />
     <Button colorScheme="blue" variant="outline">Button</Button>

     <Grid gap={2} autoFlow="row dense">
  Grid
</Grid>

<Box border="1px" borderColor="gray.200">
  Card
</Box>


<Button borderRightRadius="0">Button 1</Button>

<Button borderLeftRadius="0">Button 2</Button>

<Button borderTopRadius="md">Button 2</Button>

    </div>
  );
}

export default App;
