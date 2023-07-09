import { theme } from "./src/theme";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import { SignIn } from "@screens/SignIn";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </NativeBaseProvider>
  );
}