"use client";

import { Avatar } from "@chakra-ui/react";
import CartButton from "./HComponents/CartButton";
import Logo from "./HComponents/Logo";
import Search from "./HComponents/SearchBar";

export default function Header() {
  return (
    <header className="flex justify-between shadow-sm py-3 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <Logo />
      <div className="flex gap-2">
        <Search />
        <CartButton />
        <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      </div>
    </header>
  );
}
