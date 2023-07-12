import { theme } from "./src/theme";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import { SignUp } from "@screens/SignUp";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignUp />
    </NativeBaseProvider>
  );
}