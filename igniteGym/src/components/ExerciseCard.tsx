import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack 
        backgroundColor="gray.500" 
        alignItems="center" 
        padding={2} 
        paddingRight={4} 
        rounded="md"
        marginBottom={3}
      >
        <Image 
          source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg" }}
          alt="Imagem do exercício"
          width={16}
          height={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada Unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
        />
      </HStack>
    </TouchableOpacity>
  );
}