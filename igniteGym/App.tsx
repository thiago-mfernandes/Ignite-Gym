import { StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View 
      style={{ 
        alignItems: 'center', 
        justifyContent: "center", 
        flex: 1,
        backgroundColor: "#202024", 
      }}
    >
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>Ignite Gym!</Text>
    </View>
  );
}