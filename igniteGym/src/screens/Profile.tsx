import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack, ScrollView, Center, Skeleton, Text, Heading } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export function Profile(){

  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader  title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {
            photoIsLoading 
            ? //case true
              <Skeleton 
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500" //cor inicial do skeleton
                endColor="gray.400" //cor final do skeleton
              />
            : //case false
              <UserPhoto
                source={{ uri: "https://avatars.githubusercontent.com/u/91342038?v=4" }}
                size={PHOTO_SIZE}
                alt="Foto do usuário"
              />
          }
          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input 
            backgroundColor="gray.600"
            placeholder="Nome"
          />

          <Input 
            backgroundColor="gray.600"
            placeholder="E-mail"
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar Senha
          </Heading>

          <Input 
            backgroundColor="gray.600"
            placeholder="Senha antiga"
            secureTextEntry
          />

          <Input 
            backgroundColor="gray.600"
            placeholder="Nova senha"
            secureTextEntry
          />

          <Input 
            backgroundColor="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button 
            title="Atualizar"
            mt={4}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
}