import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

interface ArrowsProps {
  isClicked: boolean;
  type: string | undefined;
  onArrowClick: (orderType: string) => void;
}

const Arrows: React.FC<ArrowsProps> = ({ isClicked, type, onArrowClick }) => {
  const handleOrder = (orderType: string) => {
    onArrowClick(orderType);
  };

  useEffect(() => {
    console.log("isClicked:", isClicked);
    console.log("type:", type);
  }, [isClicked, type]);

  return (
    <div>
      <Flex p={3} flexDirection="column" alignItems="center">
        since_agreement
        <TriangleUpIcon
          m={2}
          as="button"
          _hover={{ cursor: "pointer" }}
          onClick={() => handleOrder("ASC")}
          color={isClicked && type === "ASC" ? "green.500" : "gray.500"}
        />
        <TriangleDownIcon
          as="button"
          _hover={{ cursor: "pointer" }}
          onClick={() => handleOrder("DESC")}
          color={isClicked && type === "DESC" ? "red.500" : "gray.500"}
        />
      </Flex>
    </div>
  );
};

export default Arrows;
