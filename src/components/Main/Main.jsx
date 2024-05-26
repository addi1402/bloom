'use client'
import { useState } from "react";
import Heading from "./Heading/Heading";
import ProductList from "./List/List";

export default function Main() {
  const [sort, setSort] = useState("featured");
  return (
    <div className="mt-6">
      <Heading sort={sort} setSort={setSort} />
      <ProductList sort={sort} setSort={setSort}/>
    </div>
  );
}
