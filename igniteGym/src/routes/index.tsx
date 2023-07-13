import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes(){

  //cores do native-base
  const { colors } = useTheme();
  //objeto de tema do NavigationContainer
  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  return (
    //esse box garante que de uma tela pra outra nao apareçao um fundo branco
    <Box flex={1} backgroundColor="gray.700">
      <NavigationContainer theme={theme} >
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
}