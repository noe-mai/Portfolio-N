import { Button, ButtonGroup } from "@chakra-ui/react"
import { Box, Grid } from "@chakra-ui/react"



function App() {
  return (
    <div>
      <Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
 <Box w="100%" h="50px" />

 <Box
  w="100%"
  h="200px"
  bgGradient={[
    "linear(to-tr, teal.300,yellow.400)",
    "linear(to-t, blue.200, teal.500)",
    "linear(to-b, orange.100, purple.300)",
  ]}
/>

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
