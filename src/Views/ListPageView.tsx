import React from "react";
import ApiCaller from "../Api/ApiCaller";
import { Center, Container, Heading } from "@chakra-ui/react";

const ListPageView: React.FC = () => {
  return (
    <>
      <Container maxW="sm" mt={3}>
        <Center position="sticky" top="0" zIndex="1" bg="white">
          <Heading as="h1" size="xl" color="red.500" textAlign="center">
            User List
          </Heading>
        </Center>

        {/* Call to API */}
      </Container>
      <ApiCaller />
    </>
  );
};

export default ListPageView;
