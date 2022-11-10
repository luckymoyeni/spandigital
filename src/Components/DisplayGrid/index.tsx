import React from "react";
import { Grid, Image } from "@chakra-ui/react";
export const DisplayGrid = ({ currentImages }: any) => {
  return (
    <Grid
      gridGap={5}
      gap={3}
      p={4}
      h={"81vh"}
      className="grid-rail"
      gridTemplateRows="1fr 1fr"
      templateColumns="1fr 1fr 1fr"
    >
      {currentImages.map((x: any, index: number) =>
        index % 2 === 0 ? (
          <Image
            key={x?.urls.raw}
            src={x?.urls.raw + "&fit=crop&crop=entropy&w=650&h=400&dpr=1"}
            maxW="100%"
            minW="100%"
          />
        ) : (
          ""
        )
      )}
      {currentImages.map((x: any, index: number) =>
        index % 2 !== 0 ? (
          <Image
            key={x?.urls.raw}
            src={x?.urls.raw + "&fit=crop&crop=entropy&w=650&h=400&dpr=1"}
            maxW="100%"
            minW="100%"
          />
        ) : (
          ""
        )
      )}
    </Grid>
  );
};
