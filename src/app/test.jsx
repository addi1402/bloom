"use client";
import { fetchProducts } from "@/redux/slices/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return;
};
