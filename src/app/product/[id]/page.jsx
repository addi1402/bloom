import Product from "@/components/ProductPage/Product";

export const metadata = {
    title: "Bloom",
    description: "Front-End Task Project",
  };

export default function ProductPage({params}){

    return <div>
        <Product/>
    </div>;
}