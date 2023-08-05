import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { fetchDataFromAPI } from "../Api/ApiCaller";

const Arrows: React.FC = () => {
  const [sortOrder, setSortOrder] = useState("ASC");

  const handleOrder = async (order: string) => {
    if (order === "ASC") {
      setSortOrder("ASC");
    } else if (order === "DESC") {
      setSortOrder("DESC");
    }
  };

  const callApiWithSortOrder = async () => {
    try {
      const data = await fetchDataFromAPI(false, "", sortOrder);

      if (data) {
        console.log("Data from API:", data);
      } else {
        console.log("Data not available.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  callApiWithSortOrder();

  useEffect(() => {
    console.log("Sort Order:", sortOrder);
  }, [sortOrder]);

  return (
    <div>
      <Flex p={3} flexDirection="column" alignItems="center">
        since_agreement
        <TriangleUpIcon
          m={2}
          as="button"
          _hover={{ cursor: "pointer" }}
          onClick={() => handleOrder("ASC")}
          color={sortOrder === "ASC" ? "green.500" : "gray.500"}
        />
        <TriangleDownIcon
          as="button"
          _hover={{ cursor: "pointer" }}
          onClick={() => handleOrder("DESC")}
          color={sortOrder === "DESC" ? "red.500" : "gray.500"}
        />
      </Flex>
    </div>
  );
};

export default Arrows;
