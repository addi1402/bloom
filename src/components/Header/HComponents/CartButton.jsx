import { CustomButton } from "@/components/Button/Button";
import Link from "next/link";
import { LuShoppingBasket } from "react-icons/lu";

export default function CartButton() {
  return (
    <Link href="/cart/">
      <CustomButton
        text="Basket"
        icon={<LuShoppingBasket />}
        variant="filled"
        size="0.85rem"
      />
    </Link>
  );
}
