import { Box, Center, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import gif from "./resources/loading.webp";
import { API } from "./backend";

function Redirection({ match }) {
  const {
    params: { shortid },
  } = match;

  const [loading, setLoading] = useState(true);
  const [recLink, setLink] = useState();
  useEffect(() => {
    getlink().then((k) => setLink(k));
    // eslint-disable-next-line
  }, [loading, recLink]);

  const getlink = () => {
    let sid = { shortid: shortid };
    return fetch(`${API}getlink`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sid),
    }).then((response) => {
      let k = response.json();
      console.log(k);
      return k;
    });
  };
  const gotoURL = () => {
    console.log(String(recLink));
    if (recLink !== undefined) {
      window.location = recLink;
      setLoading(false);
    }
  };

  return (
    loading && (
      <div>
        <Box maxH="100vh" paddingTop="20px">
          <Grid
            h="100vh"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(4, 1fr)"
            width="100%"
          >
            <GridItem colSpan="4" rowSpan={4} bg="white" textAlign="center">
              <Center>
                <Image src={gif} alt="Loading..." objectFit="cover" />
              </Center>
              <Heading marginTop="50px">
                Please Hold While We Are Racing To Your Destination!
              </Heading>
            </GridItem>
          </Grid>
        </Box>
        {gotoURL()}
      </div>
    )
  );
}
export default Redirection;
