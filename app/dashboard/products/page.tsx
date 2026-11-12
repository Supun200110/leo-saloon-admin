
"use client";
import toast from "react-hot-toast";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  
  const parameters = useSearchParams();
  const[pagination,setPagination]=useState({
    pageNumber:parameters.get("pageNumber")||1,
    pageSize:parameters.get("pageSize")||1,
    totalCount:0,
    totalPages:0
  })

  useEffect(() => {
    api
      .get("/api/products", {
        params: {
          pageNumber: parameters.get("pageNumber") || 1,
          pageSize: parameters.get("pageSize") || 10,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
        setPagination((prev) => ({
          ...prev,
          totalCount: res.data.totalCount ?? res.data.products?.length ?? 0,
          totalPages: res.data.totalPages ?? 1,
        }));
      });
  }, []);

  return (
    <div className="w-full h-full space-y-6">
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-5 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Products</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your salon product inventory</p>
        </div>

        {/* Stats + Action */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Total Products */}
          <div className="flex flex-col items-center justify-center px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 min-w-[100px]">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">Total Products</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{pagination.totalCount}</span>
          </div>

          {/* Current Page */}
          <div className="flex flex-col items-center justify-center px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 min-w-[100px]">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">Current Page</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
              {Number(parameters.get("pageNumber") || 1)}/{pagination.totalPages || 1}
            </span>
          </div>

          <Link href="/dashboard/products/add-product">
            <Button className="cursor-pointer whitespace-nowrap">+ Add Product</Button>
          </Link>
        </div>
      </div>

      {/* Products Table */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <Table className="min-w-[1100px]">

          <TableCaption className="py-4 text-sm text-gray-500 ">
            A list of your salon products. 
          </TableCaption>

          <TableHeader>
            <TableRow className="border-b bg-gray-50 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-900">

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                SKU
              </TableHead>

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                Name
              </TableHead>

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                Stock
              </TableHead>

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                Status
              </TableHead>

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                Price
              </TableHead>

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                Compare At
              </TableHead>

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                Brand
              </TableHead>

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                Model
              </TableHead>

              <TableHead className="h-12 px-5 font-semibold text-gray-700 dark:text-gray-200">
                Actions
              </TableHead>

            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((item) => {
              return (
                <TableRow
                  key={item.sku}
                  className="border-b transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
                >
                  <TableCell className="px-5 py-4 font-medium text-gray-700 dark:text-gray-200">
                    {item.sku}
                  </TableCell>

                  <TableCell className="px-5 py-4 font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </TableCell>

                  <TableCell className="px-5 py-4 text-gray-600 dark:text-gray-300">
                    {item.stock}
                  </TableCell>

                  <TableCell className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {item.status}
                    </span>
                  </TableCell>

                  <TableCell className="px-5 py-4 font-medium text-gray-700 dark:text-gray-200">
                    {item.price}
                  </TableCell>

                  <TableCell className="px-5 py-4 text-gray-600 dark:text-gray-300">
                    {item.compareAt}
                  </TableCell>

                  <TableCell className="px-5 py-4 text-gray-600 dark:text-gray-300">
                    {item.brand}
                  </TableCell>

                  <TableCell className="px-5 py-4 text-gray-600 dark:text-gray-300">
                    {item.model}
                  </TableCell>

                  <TableCell className="px-5 py-4">
                  </TableCell>

                </TableRow>
              );
            })}
          </TableBody>

        </Table>
      </div>

      {/* Bottom Pagination */}
      <Pagination>
  <PaginationContent className="flex-wrap gap-1">

    {pagination.totalPages <= 1 ? (
      <PaginationItem>
        <PaginationLink href="?pageNumber=1&pageSize=10" isActive>
          1
        </PaginationLink>
      </PaginationItem>
    ) : (
      <>
        <PaginationItem>
          <PaginationPrevious
            href={`?pageNumber=${Math.max(1, Number(parameters.get("pageNumber") || 1) - 1)}&pageSize=${parameters.get("pageSize") || 10}`}
            aria-disabled={Number(parameters.get("pageNumber") || 1) <= 1}
            className={
              Number(parameters.get("pageNumber") || 1) <= 1
                ? "pointer-events-none opacity-40"
                : "cursor-pointer"
            }
          />
        </PaginationItem>

        {Array.from(
          { length: pagination.totalPages },
          (_, index) => index + 1
        ).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?pageNumber=${page}&pageSize=${parameters.get("pageSize") || 10}`}
              isActive={
                Number(parameters.get("pageNumber") || 1) === page
              }
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={`?pageNumber=${Math.min(
              pagination.totalPages,
              Number(parameters.get("pageNumber") || 1) + 1
            )}&pageSize=${parameters.get("pageSize") || 10}`}
            className="cursor-pointer"
          />
        </PaginationItem>
      </>
    )}

  </PaginationContent>
</Pagination>

    </div>
  );
}
