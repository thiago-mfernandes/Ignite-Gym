import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({...rest}: IInputProps){
  return (
    <NativeBaseInput
      backgroundColor="gray.700"
      height={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontWeight="400"
      mb={4}
      placeholderTextColor="gray.300"

      //estiliza o foco do input
      _focus={{
        backgroundColor: "gray.700",
        borderWidth: 1,
        borderColor: "green.500"
      }}

      {...rest}
    />
  );
}