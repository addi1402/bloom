"use client";

import { searchProduct } from "@/redux/slices/productSlice";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useDispatch } from "react-redux";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // Trigger search filter
  useEffect(() => {
    dispatch(searchProduct(input));
  }, [dispatch, input]);

  return (
    <div className="hidden sm:block">
      <InputGroup size="sm">
        <InputLeftElement pointerEvents="none">
          <LuSearch className="text-gray-500" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search Products..."
          borderRadius="5px"
          autoComplete="off"
          focusBorderColor="black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}
