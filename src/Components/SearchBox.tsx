import React from "react";
import { Input, IconButton, Flex, Box, useToast } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBoxProps {
  onSearch: (query: string) => void;
  searchQuery: string; // Receive searchQuery as prop
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, searchQuery }) => {
  const toast = useToast();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Use onSearch directly, no need for a separate state
  };

  const handleSearch = () => {
    // console.log(searchQuery);
    if (!searchQuery) {
      toast({
        title: "Empty Search",
        description: "Please enter a search query.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
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
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
        />
      </Flex>
    </Box>
  );
};

export default SearchBox;
