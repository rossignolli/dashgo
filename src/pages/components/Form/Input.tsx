import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";

interface InputsProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export default function Input({ name, label, ...rest }: InputsProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        type="email"
        bgColor={"gray.900"}
        variant="filled"
        _hover={{
          bg: "gray.900",
        }}
        size={"lg"}
        {...rest}
      />
    </FormControl>
  );
}
