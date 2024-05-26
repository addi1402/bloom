import Link from "next/link";
import { LuRainbow } from "react-icons/lu";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0.5">
      <LuRainbow size="1.8rem" />
      <p className="font-bold text-xl">bloom</p>
    </Link>
  );
}
