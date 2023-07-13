import { HomeHeader } from "@components/HomeHeader";
import { VStack } from "native-base";

export function Home(){
  return (
    //esse elemento VStack vai colocar os itens um abaixo do outro
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  );
}