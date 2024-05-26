"use client";

import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "@/redux/store";
import { Toaster } from "@/components/ui/toaster";

export default function Wrapper({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Provider store={store}>
        <Toaster/>
        <ChakraProvider>{children}</ChakraProvider>
      </Provider>
    </div>
  );
}
