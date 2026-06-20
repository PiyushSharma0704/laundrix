"use client";

import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

import { ServiceCatalogItem } from "@/lib/types";

import { serviceCatalogService } from "@/lib/api/service-catalog.service";

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

import ServiceCatalogSheet from "./service-catalog-sheet";

interface ServiceCatalogTableProps {
  items: ServiceCatalogItem[];
  loading?: boolean;
  onRefresh?: () => void;
}

export default function ServiceCatalogTable({
  items,
  loading,
  onRefresh,
}: ServiceCatalogTableProps) {
  const handleStatusToggle = async (item: ServiceCatalogItem) => {
    try {
      await serviceCatalogService.updateStatus(item.id, {
        isActive: !item.isActive,
      });

      toast.success("Status updated");

      onRefresh?.();
    } catch {
      toast.error("Failed to update status");
    }
  };

  if (loading) {
    return <TableSkeleton columns={8} rows={5} />;
  }

  return (
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Garment Type</TableHead>

            <TableHead>Category</TableHead>

            <TableHead>Service Type</TableHead>

            <TableHead>Unit</TableHead>

            <TableHead>Base Price</TableHead>

            <TableHead>GST %</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {items?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={8}
                className="h-24 text-center text-muted-foreground"
              >
                No catalog items found
              </TableCell>
            </TableRow>
          ) : (
            items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {item.garmentType?.name ?? "-"}
                </TableCell>

                <TableCell>{item.garmentType?.category?.name ?? "-"}</TableCell>

                <TableCell>{item.serviceType?.name ?? "-"}</TableCell>

                <TableCell>{item.pricingUnit}</TableCell>

                <TableCell>₹{Number(item.basePrice).toFixed(2)}</TableCell>

                <TableCell>
                  {item.gstRate ? `${Number(item.gstRate)}%` : "-"}
                </TableCell>

                <TableCell>
                  <Badge variant={item.isActive ? "default" : "secondary"}>
                    {item.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <ServiceCatalogSheet
                        mode="view"
                        item={item}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View
                          </DropdownMenuItem>
                        }
                      />

                      <ServiceCatalogSheet
                        mode="edit"
                        item={item}
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
                        onClick={() => handleStatusToggle(item)}
                      >
                        {item.isActive ? "Deactivate" : "Activate"}
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
