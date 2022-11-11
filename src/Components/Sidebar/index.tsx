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

export const SidebarContent = ({
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
        if (x?.slug === topic) {
          return (
            <Button
              onClick={() => setTopic(x?.slug)}
              w="100%"
              bg="teal"
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

export const Sidebar = ({ isOpen, onClose, setTopic, topic }: Props) => {
  return (
    <>
      {isOpen ? (
        <Box
          left={0}
          p={5}
          w="300px"
          top={0}
          h="100vh"
          bg="#dfdfdf"
          display={"flex"}
          flex={1}
          flexDirection="column"
          data-testid="sidebar"
        >
          <Flex flexDirection="row-reverse">
            <GrClose
              size={20}
              style={{ marginBottom: "10px" }}
              onClick={() => onClose()}
              data-testid="close"
            />
          </Flex>
          <SidebarContent setTopic={setTopic} topic={topic} />
        </Box>
      ) : (
        <div  data-testid="sidebar"></div>
      )}
    </>
  );
};
