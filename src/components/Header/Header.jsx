"use client";

import { Avatar } from "@chakra-ui/react";
import CartButton from "./HComponents/CartButton";
import Logo from "./HComponents/Logo";
import Search from "./HComponents/SearchBar";

export default function Header() {
  return (
    <div className="px-20 py-3 flex justify-between shadow-sm">
      <Logo />
      <div className="flex gap-2">
        <Search />
        <CartButton />
        <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      </div>
    </div>
  );
}
