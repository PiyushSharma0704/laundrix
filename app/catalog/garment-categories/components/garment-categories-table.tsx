"use client";

import { GarmentCategory } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import TableSkeleton from "@/components/common/table-skeleton";
import GarmentCategorySheet from "./garment-category-sheet";

interface GarmentCategoriesTableProps {
  categories: GarmentCategory[];
  loading?: boolean;
  onRefresh?: () => void;
}

export default function GarmentCategoriesTable({
  categories,
  loading,
  onRefresh,
}: GarmentCategoriesTableProps) {

  // Need to fix
  //    const handleStatusToggle = async (
  //     category: GarmentCategory
  //   ) => {
  //     try {
  //       await garmentCategoryService.updateStatus(
  //         category.id,
  //         !category.isActive
  //       );

  //       toast.success("Status updated");

  //       onRefresh?.();
  //     } catch (error) {
  //       toast.error("Failed to update status");
  //     }
  //   };

  //   const handleDelete = async (
  //   category: GarmentCategory
  // ) => {
  //   try {
  //     await garmentCategoryService.updateStatus(
  //       category.id
  //     );

  //     toast.success("Category deleted");

  //     onRefresh?.();
  //   } catch (error) {
  //     toast.error("Failed to delete category");
  //   }
  // };

  if (loading) {
    return <TableSkeleton columns={5} rows={5} />;
  }

  return (
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>

            <TableHead>Description</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Created At</TableHead>

            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {categories?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="h-24 text-center text-muted-foreground"
              >
                No garment categories found
              </TableCell>
            </TableRow>
          ) : (
            categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.name}</TableCell>

                <TableCell className="text-muted-foreground max-w-xs truncate">
                  {category.description || "-"}
                </TableCell>

                <TableCell>
                  <Badge variant={category.isActive ? "default" : "secondary"}>
                    {category.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell>
                  {new Date(category.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <GarmentCategorySheet
                        mode="view"
                        category={category}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View
                          </DropdownMenuItem>
                        }
                      />

                      <GarmentCategorySheet
                        mode="edit"
                        category={category}
                        onSuccess={onRefresh}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownMenuItem>
                        }
                      />

                      <DropdownMenuItem>
                        {category.isActive ? "Deactivate" : "Activate"}
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-red-500">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
