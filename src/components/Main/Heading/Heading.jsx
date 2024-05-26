import AddButton from "./AddButton";
import FilterButton from "./FilterButton";

export default function Heading({ sort, setSort }) {
  return (
    <header className="flex justify-between items-center">
      <h3 className="font-bold text-lg">Product Inventory</h3>
      <div className="flex gap-2">
        <FilterButton sort={sort} setSort={setSort} />
        <AddButton />
      </div>
    </header>
  );
}
