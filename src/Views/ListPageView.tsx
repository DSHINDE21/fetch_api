import React, { useState } from "react";
import ApiCaller from "../Api/ApiCaller";
import { Center, Container, Flex, Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../Utils/logoutUtils";
import LogoutButton from "../Components/LogoutButton";
import SearchBox from "../Components/SearchBox";

const ListPageView: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // console.log(query);
    // if (!query) {
    //   console.log("empty");
    // }
  };

  return (
    <Box>
      <Container maxW="sm" mt={3}>
        <Center position="sticky" top="0" zIndex="1" bg="white">
          <Heading as="h1" size="xl" color="red.500" textAlign="center" mt={5}>
            User List
          </Heading>
        </Center>
      </Container>
      <Flex justifyContent="flex-end" p={4}>
        <LogoutButton handleLogout={() => handleLogout(navigate)} />
      </Flex>
      <Flex direction="column" alignItems="flex-start" p={4}>
        <SearchBox onSearch={handleSearch} searchQuery={searchQuery} />
      </Flex>
      <ApiCaller />
    </Box>
  );
};

export default ListPageView;
