import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-20 pb-32 pt-10 flex justify-between">
      <h3 className="text-lg w-1/6">
        Join our mailing list for insider deals and product updates.
      </h3>
      <FormControl w="25%">
        <FormLabel fontSize="0.9rem">Subscribe</FormLabel>
        <Input
          type="email"
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
