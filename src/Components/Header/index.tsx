import { Box, Center, Text, Flex } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  onShowSidebar: any;
  showSidebarButton?: boolean;
  title: string;
  isOpen: boolean;
  onClose: any;
}

const Header = ({
  showSidebarButton = true,
  onShowSidebar,
  title,
  isOpen,
  onClose,
}: Props) => {
  return (
    <Flex bg="tomato" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {!isOpen && <GiHamburgerMenu size={25} onClick={() => onClose()} />}
      </Box>
      <Center flex="1" h="40px">
        <Text fontSize="xl">{title}</Text>
      </Center>
      <Box flex="1" />
    </Flex>
  );
};

export default Header;
