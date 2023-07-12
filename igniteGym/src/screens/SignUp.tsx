import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp(){
  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }} //faz o container ocupar todo o espaco
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} backgroundColor="gray.700" px={10} pb={16}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando na academia."
          resizeMode="contain" //background-position
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo!
          </Text>
        </Center>
        <Center>
          <Heading
            color="gray.100"
            fontSize="xl"
            mb={6}
            fontWeight="bold"
          >
            Crie sua conta
          </Heading>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="E-mail"
            keyboardType="email-address" //tipo do teclado
            autoCapitalize="none" //mantem todo o texto em minusculo
          />
          <Input
            placeholder="Senha"
            secureTextEntry //indica que é um input de senha
          />
          <Button title="Criar e acessar" />
        </Center>
        <Button
          title="Criar conta"
          variant="outline"
          marginTop={24}
        />
      </VStack>
    </ScrollView>
  );
}