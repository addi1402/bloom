"use client";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { CustomButton } from "../Button/Button";
import { LuPartyPopper } from "react-icons/lu";
import Link from "next/link";

export default function Cart() {
  const cartData = useSelector((store) => store.product.cart);
  return (
    <main className="mt-4 flex">
      <div className=" flex flex-col gap-2 mb-10 w-full max-w-2xl p-6 border border-slate-200 rounded-md">
        <h3 className="font-bold text-lg mb-6">Your Basket</h3>

        {cartData.map((item) => (
          <CartCard key={item.id} item={{ ...item }} />
        ))}

        {cartData.length > 0 ? (
          <CustomButton
            text="Proceed to Checkout"
            variant="filled"
            className="mt-4"
          />
        ) : (
          <>
            <p className="mb-4">
              It looks like your basket is on a diet. Time to feed it some
              products!
            </p>
            <Link href="/">
              <CustomButton
                icon={<LuPartyPopper />}
                text="Go shopping!"
                variant="filled"
              />
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
