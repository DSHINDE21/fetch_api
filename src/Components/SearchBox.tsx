import React, { useState } from "react";
import { Input, IconButton, Flex, Box, useToast } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Task } from "../Models/TaskModel";
import axios from "axios";
import { BASEURL, SEARCH, API_RM_ID, headers } from "../Constants";
import TaskTable from "../Components/TaskTableApiData";
import Loader from "./Loader";

interface SearchBoxProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, searchQuery }) => {
  const toast = useToast();
  const [data, setData] = useState<Task[] | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  const handleSearch = async () => {
    if (!searchQuery) {
      toast({
        title: "Empty Search",
        description: "Please enter a search query.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.get<{ response: { task_list: Task[] } }>(
        `${BASEURL}${SEARCH}${searchQuery}${API_RM_ID}`,
        { headers }
      );
      // setData((prevData) => {
      //   if (prevData) {
      //     return [...prevData, ...response.data.response.task_list];
      //   } else {
      //     return response.data.response.task_list;
      //   }
      // });
      setData(response.data.response.task_list);

      data ? <TaskTable data={data} /> : null;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error state here
    }
    // if (data) {
    //   return (
    //     <>
    //       <TaskTable data={data} />
    //     </>
    //   );
    // }
    // return <Loader />;
  };

  return (
    <Box
      display="inline-block"
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.300"
      p="2px"
      bgColor="white"
      boxShadow="sm"
    >
      <Flex alignItems="center">
        <Input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
          size="sm"
          variant="unstyled"
          _focus={{ outline: "none" }}
          _placeholder={{ color: "gray.400" }}
        />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          ml={2}
          onClick={handleSearch}
          colorScheme="teal"
          borderRadius="md"
        />
      </Flex>

      {/* {data ? <TaskTable data={data} /> : null} */}
    </Box>
  );
};

export default SearchBox;
