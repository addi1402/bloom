"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  IconButton,
} from "@chakra-ui/react";
import DOMPurify from "dompurify";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/productSlice";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/Button/Button";

export default function ProductCard({ product }) {
  // Purify the markup description
  const sanitizedDescription = DOMPurify.sanitize(product.description);

  return (
    <Card variant="outline" size="sm" position="relative">
      <Image
        src={"/placeholder.svg"}
        height="50"
        width="50"
        className="w-full h-64 object-cover"
        alt="Product Placeholder Image"
      />

      <CardBody>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Avatar
              src={product.avatar ?? "https://bit.ly/broken-link"}
              icon={<LuUser2 />}
              bg="#0ea5e9"
              size="sm"
            />

            <div>
              <h3 className="font-semibold">
                {product.productName ?? "Unknown Product"}
              </h3>
              <p className="text-slate-500 text-sm lowercase">
                @{product.name ?? "anonymous"}
              </p>
            </div>
          </div>

          <div>
            <span className="font-bold text-lg">
              ${product.productPrice ?? "N/A"}
            </span>
          </div>
        </div>

        {sanitizedDescription ? (
          <p
            className="text-slate-500 capitalize mt-4 text-sm text-ellipsis overflow-hidden description"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          ></p>
        ) : (
          <p className="text-slate-500 capitalize mt-4 text-sm">
            No description available
          </p>
        )}
      </CardBody>
      <CardFooter className="flex gap-2">
        <CustomButton text="Add To Cart" variant="filled" />
        <CustomButton text="Buy Now" variant="outline"/>
      </CardFooter>
    </Card>
  );
}
