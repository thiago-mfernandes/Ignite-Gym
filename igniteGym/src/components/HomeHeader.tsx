import { Heading, Text, HStack, VStack, Icon } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

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
      <VStack flex={1}/**esse flex 1 empurra o icone para a esquerda */>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Thiago Fernandes
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name="logout" 
          size={7}  
          color="gray.200"
          style={{ marginRight:20}} 
        />
      </TouchableOpacity>
    </HStack>
  );
}