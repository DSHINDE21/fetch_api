// ... Other imports and code ...

import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";

interface SearchBoxProps {
  onSearch: (isSearch: boolean, searchQuery: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const toast = useToast();

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

    setIsLoading(true); // Set loading to true when search starts
    const isSearch = true;
    await onSearch(isSearch, searchQuery);
    setIsLoading(false); // Set loading back to false when search is complete
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
            {searchQuery && (
              <IconButton
                aria-label="Clear Search"
                icon={<CloseIcon />}
                ml={2}
                onClick={handleClearSearch}
                colorScheme="red"
                borderRadius="md"
                isDisabled={isLoading}
              />
            )}
            {/* Set isDisabled prop to disable the button when loading is true */}

            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              ml={2}
              onClick={handleSearch}
              colorScheme="teal"
              borderRadius="md"
              isDisabled={isLoading}
            />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SearchBox;
