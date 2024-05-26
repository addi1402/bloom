"use client";
import { CustomButton } from "@/components/Button/Button";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";

export default function AddButton() {
  return (
    <Link href='/form/add'>
      <CustomButton text="New" icon={<LuPlus />} variant="filled" />
    </Link>
  );
}
