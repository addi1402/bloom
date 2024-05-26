"use client";

import { Button } from "@chakra-ui/react";

export function CustomButton({
  icon,
  text = "Click Here",
  size = "0.8rem",
  clickEvent,
  variant = "outline", // outline or filled
  className,
}) {
  const isOutline = variant === "outline";

  return (
    <Button
      leftIcon={icon}
      variant={isOutline ? "outline" : "solid"}
      width="fit-content"
      size="sm"
      _hover={
        isOutline
          ? { color: "black", bg: "#f3f4f6" }
          : { bg: "black", opacity: 0.8 }
      }
      _focus={{ boxShadow: "none" }}
      fontSize={size}
      fontWeight="500"
      bg={!isOutline && "black"}
      color={!isOutline && "white"}
      className={className}
      onClick={clickEvent}
    >
      {text}
    </Button>
  );
}
