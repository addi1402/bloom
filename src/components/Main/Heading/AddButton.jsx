import { CustomButton } from "@/components/Button/Button";
import { LuPlus } from "react-icons/lu";

export default function AddButton() {
  return <CustomButton text="New" icon={<LuPlus />} variant="filled" />;
}
