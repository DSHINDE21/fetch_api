import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

interface SearchBoxProps {
  onSearch: (isSearch: boolean, searchQuery: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const toast = useToast();
  const handleSearch = () => {
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

    const isSearch = true;
    onSearch(isSearch, searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery(""); // Clear the search input
    const isSearch = false; // Set isSearch to false since it's not a search
    onSearch(isSearch, ""); // Notify the parent component that the search is cleared
  };

  return (
    <div>
      <Flex direction="column" alignItems="flex-start" p={4}>
        <Box
          display="inline-block"
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.300"
          mb="2px"
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
            {searchQuery && ( // Render the close icon conditionally when searchQuery is not empty
              <IconButton
                aria-label="Clear Search"
                icon={<CloseIcon />}
                ml={2}
                onClick={handleClearSearch}
                colorScheme="teal"
                borderRadius="md"
              />
            )}
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              ml={2}
              onClick={handleSearch}
              colorScheme="teal"
              borderRadius="md"
            />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SearchBox;

// isSearch and query value sent to parent component listapageview
