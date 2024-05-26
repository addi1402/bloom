import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-20 py-20 flex justify-between">
      <h3 className="text-xl w-1/6">
        Stay in touch and subscribe to our newsletter.
      </h3>
      <FormControl w="25%">
        <FormLabel fontSize="0.9rem">Subscribe</FormLabel>
        <Input
          size="sm"
          placeholder="Enter your email"
          autoComplete="off"
          borderColor="#404040"
          _hover={{ color: "white" }}
          borderRadius="5px"
          focusBorderColor="#404040"
          _placeholder={{ color: "#737373" }}
          color="white"
        />
      </FormControl>
    </footer>
  );
}
