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
import { CustomButton } from "@/components/Button/Button";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteProduct,
  removeFromCart,
} from "@/redux/slices/productSlice";
import { useState } from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  // Purify the markup description
  const sanitizedDescription = DOMPurify.sanitize(product.description);
  const router = useRouter();
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  // Handle Add to Cart Click
  function handleAddToCart(e) {
    e.stopPropagation();
    toast({
      title: "Item added to basket.",
      description: "You're one step closer to completing your purchase.",
      action: (
        <ToastAction
          altText="Check Basket"
          onClick={() => {
            router.push("/cart/");
          }}
        >
          Check Basket
        </ToastAction>
      ),
    });
    dispatch(addToCart({ ...product, description: sanitizedDescription }));
  }

  function handleDelete(e) {
    e.stopPropagation();
    toast({ description: "Product deleted." });
    dispatch(deleteProduct(product.id));
  }

  function navigateToProduct(id) {
    router.push(`/product/${id}/`);
  }

  return (
    <Card
      variant="outline"
      size="sm"
      position="relative"
      borderRadius="8px"
      overflow="hidden"
      onClick={() => navigateToProduct(product.id)}
      cursor='pointer'
    >
      <Image
        src={product.image ?? "/placeholder.svg"}
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
            <span className="font-bold text-md">
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
      <CardFooter className="flex gap-2 justify-between">
        <CustomButton
          text="Add To Cart"
          variant="filled"
          clickEvent={(e) => handleAddToCart(e)}
        />
        <div className="flex gap-2">
          <Link
            href={`/form/edit/${product.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <CustomButton text="Edit" variant="outline" />
          </Link>
          <CustomButton
            text="Delete"
            variant="outline"
            clickEvent={(e) => handleDelete(e)}
          />
        </div>
      </CardFooter>

      <IconButton
        variant="filled"
        color="#FF6961"
        size="sm"
        bg="white"
        aria-label="Like"
        fontSize="18px"
        icon={like ? <AiFillHeart /> : <AiOutlineHeart />}
        onClick={(e) => {
          e.stopPropagation();
          setLike((like) => !like);
        }}
        position="absolute"
        top="2"
        right="2"
        zIndex="1"
      />
    </Card>
  );
}
