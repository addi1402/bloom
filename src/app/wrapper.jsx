"use client";

import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "@/redux/store";

export default function Wrapper({ children }) {
  return (
    <Provider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </Provider>
  );
}
