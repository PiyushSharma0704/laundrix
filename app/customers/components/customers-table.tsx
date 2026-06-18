"use client";

import { Customer } from "@/lib/types";

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
import { MoreHorizontal } from "lucide-react";

import TableSkeleton from "@/components/common/table-skeleton";
import CustomerSheet from "./customer-sheet";

interface CustomersTableProps {
  customers: Customer[];
  onRefresh?: () => void;
  loading?: boolean;
}

export default function CustomersTable({
  customers,
  onRefresh,
  loading,
}: CustomersTableProps) {
  if (loading) {
    return <TableSkeleton columns={6} rows={5} />;
  }

  return (
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customers?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="h-24 text-center text-muted-foreground"
              >
                No customers found
              </TableCell>
            </TableRow>
          ) : (
            customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">
                  {customer.firstName} {customer.lastName}
                </TableCell>

                <TableCell>{customer.phone}</TableCell>

                <TableCell>{customer.email || "-"}</TableCell>

                <TableCell>
                  {customer.isActive ? "Active" : "Inactive"}
                </TableCell>

                <TableCell>
                  {new Date(customer.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <CustomerSheet
                        mode="view"
                        customer={customer}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View
                          </DropdownMenuItem>
                        }
                      />

                      <CustomerSheet
                        mode="edit"
                        customer={customer}
                        onSuccess={onRefresh}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownMenuItem>
                        }
                      />

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
