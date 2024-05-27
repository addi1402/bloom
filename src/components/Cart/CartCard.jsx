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
    <div className="flex flex-col md:flex-row justify-between w-full mb-4 p-4 border rounded-md">
      <div className="flex gap-4 w-full md:w-3/4">
        <Image
          src={"/placeholder.svg"}
          height="100"
          width="100"
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
          alt="Product Placeholder Image"
        />
        <div className="flex flex-col justify-between w-full">
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
      <div className="flex items-center justify-end mt-4 md:mt-0 md:w-1/4">
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
    </div>
  );
}
