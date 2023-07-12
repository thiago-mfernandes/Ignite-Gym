import { Button as NativeBaseButton, IButtonProps, Text } from  "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
  /**
   * Na documentacao do native base, existem mais alguma opcoes de variants
   * Nesta tipagem, meu type estende do nativebase
   * e posso pegar essa variant, e "restringir" quais serao as opcoes
   */
}

export function Button({ title, variant = "solid", ...rest }: Props){
  return (
    <NativeBaseButton
      width="full"
      height={14}
      backgroundColor={ variant === "outline" ? "transparent" : "green.700" }
      borderWidth={ variant === "outline" ? 1 : 0 }
      borderColor="green.500"
      rounded="sm"

      //estilizar o botao pressionado
      _pressed={{
        backgroundColor: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text
        color={ variant === "outline" ? "green.500" : "white" }
        fontWeight="bold"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}