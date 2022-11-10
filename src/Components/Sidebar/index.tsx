import { Box, Button, VStack, Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";
import { GrClose } from "react-icons/gr";

interface Props {
  onClose: any;
  isOpen: boolean;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  topic: string;
}

const SidebarContent = ({
  setTopic,
  topic,
}: {
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  topic: string;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: "topics",
    queryFn: () =>
      axios.get("topics", {
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_SECRET_KEY,
        },
      }),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <VStack>
      {data?.data?.map((x: any) => {
        if (x.title === topic) {
          return (
            <Button
              onClick={() => setTopic(x?.slug)}
              w="100%"
              bg="tomato"
              color="white"
            >
              {x?.title}
            </Button>
          );
        }
        return (
          <Button onClick={() => setTopic(x?.slug)} w="100%">
            {x?.title}
          </Button>
        );
      })}
    </VStack>
  );
};

const Sidebar = ({ isOpen, onClose, setTopic, topic }: Props) => {
  return (
    <>
      {isOpen ? (
        <Box
          position="fixed"
          left={0}
          p={5}
          w="300px"
          top={0}
          h="100%"
          bg="#dfdfdf"
        >
          <Flex flexDirection="row-reverse">
            <GrClose
              size={20}
              style={{ marginBottom: "10px" }}
              onClick={() => onClose()}
            />
          </Flex>
          <SidebarContent setTopic={setTopic} topic={topic} />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
