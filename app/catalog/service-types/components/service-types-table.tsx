"use client";

import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

import { ServiceType } from "@/lib/types";

import { serviceTypeService } from "@/lib/api/service-type.service";

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

import ServiceTypeSheet from "./service-type-sheet";

interface ServiceTypesTableProps {
  serviceTypes: ServiceType[];
  loading?: boolean;
  onRefresh?: () => void;
}

export default function ServiceTypesTable({
  serviceTypes,
  loading,
  onRefresh,
}: ServiceTypesTableProps) {
  const handleStatusToggle = async (serviceType: ServiceType) => {
    try {
      await serviceTypeService.updateStatus(serviceType.id, {
        isActive: !serviceType.isActive,
      });

      toast.success("Status updated");

      onRefresh?.();
    } catch {
      toast.error("Failed to update status");
    }
  };

  if (loading) {
    return <TableSkeleton columns={6} rows={5} />;
  }

  return (
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>

            <TableHead>Code</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Sort Order</TableHead>

            <TableHead>Created At</TableHead>

            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {serviceTypes?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="h-24 text-center text-muted-foreground"
              >
                No service types found
              </TableCell>
            </TableRow>
          ) : (
            serviceTypes?.map((serviceType) => (
              <TableRow key={serviceType.id}>
                <TableCell className="font-medium">
                  {serviceType.name}
                </TableCell>

                <TableCell>{serviceType.code || "-"}</TableCell>

                <TableCell>
                  <Badge
                    variant={serviceType.isActive ? "default" : "secondary"}
                  >
                    {serviceType.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell>{serviceType.sortOrder ?? "-"}</TableCell>

                <TableCell>
                  {new Date(serviceType.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <ServiceTypeSheet
                        mode="view"
                        serviceType={serviceType}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View
                          </DropdownMenuItem>
                        }
                      />

                      <ServiceTypeSheet
                        mode="edit"
                        serviceType={serviceType}
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
                        onClick={() => handleStatusToggle(serviceType)}
                      >
                        {serviceType.isActive ? "Deactivate" : "Activate"}
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
