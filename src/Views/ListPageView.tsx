import React from "react";
import ApiCaller from "../Api/ApiCaller";
import { Center, Container, Flex, Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../Utils/logoutUtils";
import LogoutButton from "../Components/LogoutButton";

const ListPageView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Container maxW="sm" mt={3}>
          <Center position="sticky" top="0" zIndex="1" bg="white">
            <Heading
              as="h1"
              size="xl"
              color="red.500"
              textAlign="center"
              mt={5}
            >
              User List
            </Heading>
          </Center>
        </Container>
        <Flex justifyContent="flex-end" p={4}>
          <LogoutButton handleLogout={() => handleLogout(navigate)} />
        </Flex>
        <ApiCaller />
      </Box>
    </>
  );
};

export default ListPageView;
