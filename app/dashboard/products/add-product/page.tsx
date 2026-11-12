"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProduct() {
 
  const[isLoading,setIsLoading]=useState(false);
  const router = useRouter();
  const [sku, setSKU] = useState("");
  const [name, setName] = useState("");
  const [altNames, setAltNames] = useState([]);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("0");
  const [status, setStatus] = useState("ACTIVE");
  const [price, setPrice] = useState("0");
  const [compareAtPrice, setCompareAtPrice] = useState("0");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const [media, setMedia] = useState([
    {
      url: "https://example.com/images/s26-ultra-front.jpg",
      type: "IMAGE",
    },
    {
      url: "https://example.com/video/s26-ultra-review.mp4",
      type: "VIDEO",
    },
  ]);

  async function addProduct() {

    setIsLoading(true);
    try {
      const stockInNumber = parseInt(stock);
      const priceInNumber = parseFloat(price);
      const compareAtPriceInNumber = parseFloat(compareAtPrice);

      const productData = {
        sku: sku,
        name: name,
        altNames: altNames,
        description: description,
        stock: stockInNumber,
        status: status,
        price: priceInNumber,
        compareAt: compareAtPriceInNumber > 0 ? compareAtPriceInNumber : undefined,
        brand: brand || undefined,
        model: model || undefined,
        media: media,
      };
      await api.post("/api/products", productData);
      toast.success("Product Added Successfully");
      router.push("/dashboard/products")
    } catch (error) {
      toast.error("Cant Add product");
    }
    setIsLoading(false);
  }

  return (
    <div className="w-full h-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 bg-white dark:bg-gray-950 rounded-xl border shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Add Product
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Add a new product to your store
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="destructive" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700"
            onClick={addProduct}
            disabled={isLoading}
          >
          {
            isLoading&&<Spinner/>
          }
          {
            isLoading?"Saving Product":"Save Product"
          }
          </Button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-6 bg-white dark:bg-gray-950 rounded-xl border shadow-sm space-y-5">
        <h2 className="text-lg font-semibold">Product Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="sku">SKU</Label>
            <Input
              id="sku"
              placeholder="Enter SKU"
              value={sku}
              onChange={(e) => setSKU(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="altNames">Alternative Names</Label>
            <Input
              id="altNames"
              placeholder="Hair dryer, Hair blower"
              
             
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              rows={4}
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>
      </div>

      {/* Inventory & Pricing */}
      <div className="p-6 bg-white dark:bg-gray-950 rounded-xl border shadow-sm space-y-5">
        <h2 className="text-lg font-semibold">Inventory & Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              type="number"
              placeholder="Enter stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full h-10 rounded-md border bg-background px-3 text-sm"
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
              <option value="DELETED">DELETED</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price (LKR)</Label>
            <Input
              id="price"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="compareAt">Compare At Price (LKR)</Label>
            <Input
              id="compareAt"
              type="number"
              placeholder="Enter compare price"
              value={compareAtPrice}
              onChange={(e) => setCompareAtPrice(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Brand Details */}
      <div className="p-6 bg-white dark:bg-gray-950 rounded-xl border shadow-sm space-y-5">
        <h2 className="text-lg font-semibold">Brand Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Input
              id="brand"
              placeholder="Enter brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              placeholder="Enter model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
