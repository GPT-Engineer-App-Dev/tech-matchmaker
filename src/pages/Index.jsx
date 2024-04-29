import { Box, Flex, Heading, Input, Button, Text, VStack, HStack, Tag, IconButton } from '@chakra-ui/react';
import { FaSearch, FaEnvelope, FaPlus } from 'react-icons/fa';

const developers = [
  { name: "Alice Johnson", location: "New York, USA", technologies: ["React", "Node.js"] },
  { name: "Bob Smith", location: "Berlin, Germany", technologies: ["Vue", "Django"] },
  { name: "Carlos Ruiz", location: "Madrid, Spain", technologies: ["Angular", "Ruby on Rails"] },
  { name: "Diana Reed", location: "Paris, France", technologies: ["Svelte", "Flask"] }
];

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Welcome to Particles Marketplace</Heading>
        <Text fontSize="lg">Find and connect with top software talent specialized in web technologies.</Text>
        <Flex>
          <Input placeholder="Search developers..." size="md" mr={2} />
          <IconButton icon={<FaSearch />} colorScheme="blue" aria-label="Search" />
        </Flex>
        <VStack spacing={4} align="stretch">
          {developers.map(dev => (
            <Box p={5} shadow="md" borderWidth="1px" key={dev.name}>
              <Heading size="md">{dev.name}</Heading>
              <Text>{dev.location}</Text>
              <HStack spacing={2}>
                {dev.technologies.map(tech => <Tag key={tech}>{tech}</Tag>)}
              </HStack>
              <Button leftIcon={<FaEnvelope />} colorScheme="blue" mt={3}>
                Send Message
              </Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;