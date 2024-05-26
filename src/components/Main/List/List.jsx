"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ProductList({ sort, setSort }) {
  // Store Data
  const { data, loading, error } = useSelector((store) => store.product);
  // Filtered Data
  const [filteredData, setFilteredData] = useState([]);
  const { toast } = useToast();

  // Error Handling
  if (error) {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }

  // Function to clean createdAt Data
  function cleanDataItem(item) {
    let createdAtDate;
    if (item.createdAt.includes("/")) {
      const [month, day, year] = item.createdAt.split("/");
      createdAtDate = new Date(`${year}-${month}-${day}`);
    } else {
      createdAtDate = new Date(item.createdAt);
    }

    const productPrice = isNaN(parseFloat(item.productPrice))
      ? null
      : parseFloat(item.productPrice);

    return {
      ...item,
      createdAt: createdAtDate,
      productPrice,
    };
  }

  // Function to Sort Data
  function sortData(sort, data) {
    switch (sort) {
      case "featured":
        return data; // No sorting, return the original data
      case "newest":
        return [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "low-to-high":
        return [...data].sort((a, b) => a.productPrice - b.productPrice);
      case "high-to-low":
        return [...data].sort((a, b) => b.productPrice - a.productPrice);
      default:
        return data;
    }
  }

  // Function to Filter Data
  function filterData(sort, data) {
    const cleanedData = data.map(cleanDataItem);
    return sortData(sort, cleanedData);
  }

  useEffect(() => {
    const cleanedData = data.map(cleanDataItem);
    const sortedData = sortData(sort, cleanedData);
    setFilteredData(sortedData);
  }, [data, sort]);

  return (
    <main className="mt-6">
      <Toaster />
      {loading ? (
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (current, index) => (
            <div className="flex flex-col space-y-3" key={index}>
              <Skeleton className="h-64 rounded-sm" />
              <div className="space-y-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <p>
          Looks like our shopping cart is playing hide and seek with the
          products again. Give it another shot.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {filteredData.map((product) => (
            <p key={product.id}>{product.name ? product.name : "Undefined"}</p>
          ))}
        </div>
      )}
    </main>
  );
}
