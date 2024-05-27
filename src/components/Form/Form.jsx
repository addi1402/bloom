"use client";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";
import { CustomButton } from "../Button/Button";
import { toast } from "../ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "@/redux/slices/productSlice";
import Quill from "./Quill";
import Image from "next/image";

export default function Form() {
  // Params
  const params = useParams();
  const p = useSelector((store) => store.product.data)
    .filter((p) => p.id === params?.id)
    .at(0);

  // Routers
  const router = useRouter();
  const dispatch = useDispatch();

  // States
  const [prodName, setProdName] = useState(
    p ? p.productName : "Unknown Product Name"
  );
  const [prodDescription, setProdDescription] = useState(
    p ? p.description : ""
  );
  const [username, setUsername] = useState(p ? p.name : "Anonymous Seller");
  const [prodPrice, setProdPrice] = useState(p ? p.productPrice : "");

  // Avatars
  const [avatar, setAvatar] = useState(p ? p.avatar : "");
  const [avatarFile, setAvatarFile] = useState(null);

  // Handle product add/update
  function handleSubmit() {
    if (!prodName || !prodDescription || !username || !prodPrice) {
      toast({ description: "Please fill out all the details." });
      return;
    }
    const newProd = {
      productName: prodName,
      avatar: avatar,
      description: prodDescription,
      name: username,
      productPrice: prodPrice,
      id: prodName,
      createdAt: new Date().toLocaleDateString(),
    };

    if (p) {
      dispatch(editProduct({ ...newProd, id: p.id }));
      toast({ description: "Product edited successfully." });
    } else {
      dispatch(addProduct(newProd));
      toast({ description: "New product added successfully." });
    }

    router.push("/");
  }

  // Handle file input change
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        setAvatarFile(file);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <Box borderWidth="1px" borderRadius="md" className="px-6 py-6 max-w-2xl">
      <h3 className="font-bold text-lg mb-4">Product Details</h3>

      <FormControl isRequired className="flex flex-col gap-4">
        <div>
          <FormLabel fontSize="0.9rem">Product Name</FormLabel>
          <Input
            size="sm"
            placeholder="Enter Product Name"
            value={prodName}
            autoComplete="off"
            onChange={(e) => setProdName(e.target.value)}
            focusBorderColor="black"
          />
        </div>

        <div>
          <FormLabel fontSize="0.9rem">Product Description</FormLabel>
          <Quill
            prodDescription={prodDescription}
            setProdDescription={setProdDescription}
          />
        </div>

        <div>
          <FormLabel fontSize="0.9rem">Avatar</FormLabel>
          <Input
            type="file"
            size="sm"
            border="none"
            padding="0"
            accept="image/*"
            onChange={handleFileChange}
          />
          {avatar && (
            <Box mt={2}>
              <Image
                src={avatar}
                width="100"
                height="100"
                alt="Avatar Preview"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </Box>
          )}
        </div>

        <div>
          <FormLabel fontSize="0.9rem">User Name</FormLabel>
          <Input
            size="sm"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            focusBorderColor="black"
          />
        </div>

        <div>
          <FormLabel fontSize="0.9rem">Product Price</FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon>$</InputLeftAddon>
            <Input
              type="number"
              placeholder="Enter price"
              value={prodPrice}
              onChange={(e) => setProdPrice(e.target.value)}
              autoComplete="off"
              focusBorderColor="black"
            />
          </InputGroup>
        </div>

        <CustomButton
          text="Submit Product"
          variant="filled"
          className="self-end"
          clickEvent={handleSubmit}
        />
      </FormControl>
    </Box>
  );
}
