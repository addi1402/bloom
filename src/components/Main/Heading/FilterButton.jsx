"use client";
import { LuListFilter } from "react-icons/lu";
import { Button } from "@chakra-ui/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Filter({ sort, setSort }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          leftIcon={<LuListFilter />}
          variant="outline"
          size="sm"
          fontWeight="600"
          _hover={{ color: "black", bg: "#f3f4f6" }}
          _focus={{ boxShadow: "none" }}
        >
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuRadioItem value="featured">
            Featured
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low-to-high">
            Price: Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high-to-low">
            Price: High to Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
