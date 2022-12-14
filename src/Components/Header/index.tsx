import { Box, Center, Text, Flex } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  title: string;
  isOpen: boolean;
  onClose: any;
}

export const Header = ({ title, isOpen, onClose }: Props) => {
  return (
    <Flex bg="teal" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {!isOpen && <GiHamburgerMenu size={25} onClick={() => onClose()} />}
      </Box>
      <Center flex="1" h="40px">
        <Text fontSize="xl" data-testid="topicTitle">
          {title}
        </Text>
      </Center>
      <Box flex="1" />
    </Flex>
  );
};
