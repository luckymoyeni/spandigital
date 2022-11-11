import { Flex } from "@chakra-ui/react";
import React from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

interface IfooterNavigation {
  isOpen: boolean;
  selector: number;
  setSelector: any;
  images: any;
}
export const FooterNavigation = ({
  isOpen,
  selector,
  setSelector,
  images,
}: IfooterNavigation) => {
  return (
    <>
      {!isOpen && (
        <Flex
          flex="1"
          h="50px"
          mt="50px"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
        >
          <BsArrowLeftSquare
            style={{ marginLeft: 13 }}
            size={50}
            onClick={() => {
              if (selector !== 0) {
                setSelector(selector - 2);
              }
            }}
          />
          <BsArrowRightSquare
            style={{ marginRight: 13 }}
            size={50}
            onClick={() => {
              if (selector + 2 < images.length) {
                setSelector(selector + 2);
              }
            }}
          />
        </Flex>
      )}
    </>
  );
};
