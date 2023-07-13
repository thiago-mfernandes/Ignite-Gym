import { Heading, Text, HStack, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack
      backgroundColor="gray.600"
      paddingTop={16}
      paddingBottom={5}
      px={8}
      alignItems="center"
    >
      <UserPhoto 
        size={16}
        source={{ uri: "https://avatars.githubusercontent.com/u/91342038?v=4" }}
        alt="Imagem do Usuário"
        marginRight={4}
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Thiago
        </Heading>
      </VStack>
    </HStack>
  );
}