import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16 lg:py-32">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-lg mb-6 md:mb-0 md:w-1/6">
          Join our mailing list for insider deals and product updates.
        </h3>
        <FormControl w={{ base: "full", md: "25%" }}>
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
      </div>
    </footer>
  );
}