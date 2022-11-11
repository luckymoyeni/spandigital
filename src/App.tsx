import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import {Sidebar} from "./Components/Sidebar";
import {Header} from "./Components/Header";
import { Gallery } from "./Components/Gallery";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [topic, setTopic] = useState("");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Flex>
      <Sidebar
        isOpen={isSidebarOpen}
        setTopic={setTopic}
        onClose={toggleSidebar}
        topic={topic}
      />
      <Flex flexDirection={'column'} flex={6}>
        <Header
          title={topic.toUpperCase()}
          onClose={toggleSidebar}
          isOpen={isSidebarOpen}
        />
        <Gallery topic={topic.toLocaleLowerCase()} isOpen={isSidebarOpen} />
      </Flex>
    </Flex>
  );
}
