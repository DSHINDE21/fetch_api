import React, { useState } from "react";
import ApiCaller from "../Api/ApiCaller";
import { Center, Container, Flex, Heading, Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../Utils/logoutUtils";
import LogoutButton from "../Components/LogoutButton";
import SearchBox from "../Components/SearchBox";
import TaskTable from "../Components/TaskTableApiData";

const ListPageView: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  // const [isActive, setisActived] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // setisActived(true);
  };

  return (
    <Box>
      <Container maxW="sm" mt={3}>
        <Center position="sticky" top="0" zIndex="1" bg="white">
          <Image src="/logo.png" alt="Logo" h="50px" mr={4} mt={3} />
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
        {/* {isActive ? null : <ApiCaller />} */}
        {/* <TaskTable data={data} /> */}
      </Flex>

      <ApiCaller />
    </Box>
  );
};

export default ListPageView;
