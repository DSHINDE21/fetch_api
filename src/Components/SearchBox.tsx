import React, { useState } from "react";
import { Input, IconButton, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Flex alignItems="center">
      <Input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        size="sm"
      />
      <IconButton
        aria-label="Search"
        icon={<SearchIcon />}
        ml={2}
        onClick={handleSearch}
      />
    </Flex>
  );
};

export default SearchBox;
