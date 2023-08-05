import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Arrows: React.FC = () => {
  const [isUpClicked, setIsUpClicked] = useState(false);
  const [isDownClicked, setIsDownClicked] = useState(false);

  //   const handleApiCall = (isUp: boolean, type: string) => {
  //     if (isUp && type === "ASC") {
  //       //   console.log("Calling API for up arrow");
  //     } else if (!isUp && type === "DESC") {
  //       //   console.log("Calling API for down arrow");
  //     }
  //   };

  const handleOrder = (type: string) => {
    if (type === "ASC") {
      setIsUpClicked(true);
      setIsDownClicked(false);
      //  handleApiCall(true, type);
    } else if (type === "DESC") {
      setIsDownClicked(true);
      setIsUpClicked(false);
      // handleApiCall(false, type);
    }
  };

  useEffect(() => {
    console.log("bool up1 :", isUpClicked);
    console.log("bool down1 :", isDownClicked);
  }, [isUpClicked, isDownClicked]);

  return (
    <div>
      <Flex p={3} flexDirection="column" alignItems="center">
        since_agreement
        <TriangleUpIcon
          m={2}
          as="button"
          _hover={{ cursor: "pointer" }}
          onClick={() => handleOrder("ASC")}
          color={isUpClicked ? "green.500" : "gray.500"}
        />
        <TriangleDownIcon
          as="button"
          _hover={{ cursor: "pointer" }}
          onClick={() => handleOrder("DESC")}
          color={isDownClicked ? "red.500" : "gray.500"}
        />
      </Flex>
    </div>
  );
};

export default Arrows;
