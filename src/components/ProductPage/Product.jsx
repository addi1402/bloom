"use client";
import Image from "next/image";
import { CustomButton } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { addToCart } from "@/redux/slices/productSlice";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useRouter } from "next/navigation";
import DOMPurify from "dompurify";
import { ListItem, UnorderedList } from "@chakra-ui/react";

export default function Product() {
  const params = useParams();
  const id = decodeURIComponent(params.id);
  const dispatch = useDispatch();
  const router = useRouter();

  // Get data
  const item = useSelector((s) => s.product.data)
    .filter((i) => i.id === id)
    .at(0);

  // Sanitize Data
  const sanitizedDescription = DOMPurify.sanitize(item?.description);

  // Handle Add to Cart
  function handleAddToCart() {
    dispatch(addToCart(item));
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
  }

  return (
    <div className="px-4 py-8 md:px-8 lg:px-20 lg:py-10 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/3">
        <Image
          src={item?.image ?? "/placeholder.svg"}
          width="400"
          height="400"
          alt="Placeholder Image"
          className="rounded-md w-full "
        />
      </div>
      <div className="flex flex-col justify-between lg:w-2/3">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-3xl">
            {item?.productName ?? "Unknown Product"}
          </h3>
          <div className="flex flex-col gap-1 mb-2">
            <p className="font-bold text-md">Item Description :</p>
            {sanitizedDescription ? (
              <p
                className="capitalize text-sm text-ellipsis overflow-hidden w-full lg:w-3/5 text-neutral-500"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              ></p>
            ) : (
              <p className="text-neutral-500 capitalize text-sm">
                No description available
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-md">Product Specifications:</p>
            <UnorderedList className=" text-sm">
              <ListItem>
                <span className="font-semibold text-black">Created At: </span>
                <span className="text-neutral-500">{item?.createdAt}</span>
              </ListItem>
              <ListItem>
                <span className="font-semibold text-black">Seller: </span>
                <span className="text-neutral-500">
                  {item?.name ?? "Anonymous Seller"}
                </span>
              </ListItem>
              <ListItem>
                <span className="font-semibold text-black">ID: </span>
                <span className="text-neutral-500">{id}</span>
              </ListItem>
            </UnorderedList>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-md">Price:</p>
            <h3 className="text-3xl font-extrabold">
              {isNaN(Number(item?.productPrice)) || item?.productPrice === ""
                ? "N/A"
                : `$${Number(item.productPrice)}`}
            </h3>
          </div>
          <div className="flex gap-2">
            <CustomButton
              text="Add To Cart"
              variant="outline"
              clickEvent={handleAddToCart}
            />
            <CustomButton text="Buy Now" variant="filled" />
          </div>
        </div>
      </div>
    </div>
  );
}
