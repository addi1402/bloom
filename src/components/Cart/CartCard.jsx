"use client";
import Image from "next/image";
import { CustomButton } from "../Button/Button";
import { LuTrash2 } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/slices/productSlice";
import { toast } from "../ui/use-toast";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between w-full mb-2">
      <div className="flex gap-4">
        <Image
          src={"/placeholder.svg"}
          height="100"
          width="100"
          className="w-100 h-100 object-cover rounded-md"
          alt="Product Placeholder Image"
        />
        <div className="flex-col flex justify-between">
          <div>
            <h3 className="font-bold capitalize">
              {item.productName ?? "Unknown Product"}
            </h3>
            <p className="capitalize text-sm text-slate-500">
              Sold By: {item.name ?? "Anonymous"}
            </p>
          </div>
          <p className="font-bold text-lg">${item.productPrice ?? "N/A"}</p>
        </div>
      </div>
      <div></div>
      <CustomButton
        text="Remove"
        icon={<LuTrash2 />}
        variant="outline"
        clickEvent={() => {
          dispatch(removeFromCart(item.id));
          toast({
            description: "Item has been removed.",
          });
        }}
      />
    </div>
  );
}
