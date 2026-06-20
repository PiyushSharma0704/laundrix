"use client";

import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

import { GarmentType } from "@/lib/types";

import { garmentTypeService } from "@/lib/api/garment-type.service";

import TableSkeleton from "@/components/common/table-skeleton";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import GarmentTypeSheet from "./garment-type-sheet";

interface GarmentTypesTableProps {
  garmentTypes: GarmentType[];
  loading?: boolean;
  onRefresh?: () => void;
}

export default function GarmentTypesTable({
  garmentTypes,
  loading,
  onRefresh,
}: GarmentTypesTableProps) {
  const handleStatusToggle = async (garmentType: GarmentType) => {
    try {
      await garmentTypeService.updateStatus(
        garmentType.id,
        !garmentType.isActive,
      );

      toast.success("Status updated");

      onRefresh?.();
    } catch {
      toast.error("Failed to update status");
    }
  };

  if (loading) {
    return <TableSkeleton columns={7} rows={5} />;
  }

  return (
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>

            <TableHead>Category</TableHead>

            <TableHead>Code</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Sort Order</TableHead>

            <TableHead>Created At</TableHead>

            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {garmentTypes?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-24 text-center text-muted-foreground"
              >
                No garment types found
              </TableCell>
            </TableRow>
          ) : (
            garmentTypes?.map((garmentType) => (
              <TableRow key={garmentType.id}>
                <TableCell className="font-medium">
                  {garmentType.name}
                </TableCell>

                <TableCell>{garmentType.category?.name || "-"}</TableCell>

                <TableCell>{garmentType.code || "-"}</TableCell>

                <TableCell>
                  <Badge
                    variant={garmentType.isActive ? "default" : "secondary"}
                  >
                    {garmentType.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell>{garmentType.sortOrder ?? "-"}</TableCell>

                <TableCell>
                  {new Date(garmentType.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <GarmentTypeSheet
                        mode="view"
                        garmentType={garmentType}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View
                          </DropdownMenuItem>
                        }
                      />

                      <GarmentTypeSheet
                        mode="edit"
                        garmentType={garmentType}
                        onSuccess={onRefresh}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownMenuItem>
                        }
                      />

                      <DropdownMenuItem
                        onClick={() => handleStatusToggle(garmentType)}
                      >
                        {garmentType.isActive ? "Deactivate" : "Activate"}
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
