import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"} bg="coral">
          Nav
        </GridItem>
        <GridItem
          area={"aside"}
          bg="gold"
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>
        {/* <Show when={{ base: false, lg: true }}>
          <GridItem area={"aside"} bg="gold">
            Aside
          </GridItem>
        </Show> */}
        <GridItem area={"main"} bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
