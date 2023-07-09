import { VStack, Image, Text } from "native-base";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

export function SignIn(){
  return (
    <VStack flex={1} backgroundColor="gray.700">
      <Image 
        source={BackgroundImg}
        alt="Pessoas treinando na academia."
        resizeMode="contain" //background-position
        position="absolute"
      />

      <LogoSvg />
      <Text>Treine sua mente e o seu corpo!</Text>
    </VStack>
  );
}