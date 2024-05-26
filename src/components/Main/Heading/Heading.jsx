import AddButton from "./AddButton";
import FilterButton from "./FilterButton";

export default function Heading() {
  return (
    <header className="flex justify-between">
      <h3 className="font-bold text-lg">Product Inventory</h3>
      <div className="flex gap-2">
        <FilterButton />
        <AddButton />
      </div>
    </header>
  );
}
