import React, { useState, useEffect } from "react";
import { Center, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { FooterNavigation } from "../FooterNavigation";
import { DisplayGrid } from "../DisplayGrid";

export const Gallery: React.FC<{ topic: string | null; isOpen: boolean }> = ({
  topic,
  isOpen,
}) => {
  const [selector, setSelector] = useState(0);
  const [images, setImages] = useState([]);
  const [currentImages, setCurrentImages] = useState([]);

  const { isLoading } = useQuery({
    enabled: topic !== "",
    queryKey: `${topic}/photos`,
    queryFn: () =>
      axios.get(`topics/${topic}/photos?per_page=100&page=0`, {
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_SECRET_KEY,
        },
      }),
    onSuccess: ({ data }) => {
      setCurrentImages([]);
      setImages(data);
      setSelector(0);
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setCurrentImages(images.slice(selector, 6 + selector));
  }, [selector, images, setCurrentImages]);

  if (topic === "")
    return (
      <Center height={"83vh"}>
        <Heading size="lg">Please choose a topic</Heading>
      </Center>
    );

  if (isLoading)
    return (
      <Center height={"83vh"}>
        <Heading size="lg">Loading images ...</Heading>
      </Center>
    );

  return (
    <Flex flexDirection={"column"}>
      <DisplayGrid currentImages={currentImages} isOpen={isOpen} />
      <FooterNavigation
        isOpen={isOpen}
        selector={selector}
        setSelector={setSelector}
        images={images}
      />
    </Flex>
  );
};
