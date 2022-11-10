import { useState } from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { Gallery } from "./Components/Gallery";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [topic, setTopic] = useState("");
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        setTopic={setTopic}
        onClose={toggleSidebar}
        topic={topic}
      />
      <Box>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
          title={topic.toUpperCase()}
          onClose={toggleSidebar}
          isOpen={isSidebarOpen}
        />
        <Gallery topic={topic.toLocaleLowerCase()} isOpen={isSidebarOpen} />
      </Box>
    </>
  );
}
