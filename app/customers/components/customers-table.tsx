
"use client";


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


interface CustomersTableProps {
customers: Customer[];
storeId: string;
onRefresh?: () => void;
}

export default function CustomersTable({
customers,
storeId,
onRefresh,
}: CustomersTableProps) {
return ( <div className="rounded-md border bg-background"> <Table> <TableHeader> <TableRow> <TableHead>Name</TableHead> <TableHead>Phone</TableHead> <TableHead>Email</TableHead> <TableHead>Created At</TableHead> <TableHead className="w-[80px]">
Actions </TableHead> </TableRow> </TableHeader>

    <TableBody>
      {customers.length === 0 ? (
        <TableRow>
          <TableCell
            colSpan={5}
            className="h-24 text-center"
          >
            No customers found
          </TableCell>
        </TableRow>
      ) : (
        customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>
              {customer.firstName}{" "}
              {customer.lastName}
            </TableCell>

            <TableCell>
              {customer.dialCode}
              {customer.phone}
            </TableCell>

            <TableCell>
              {customer.email || "-"}
            </TableCell>

            <TableCell>
              {new Date(
                customer.createdAt,
              ).toLocaleDateString()}
            </TableCell>

            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <CustomerSheet
                    mode="view"
                    storeId={storeId}
                    customer={customer}
                    trigger={
                      <DropdownMenuItem
                        onSelect={(e) =>
                          e.preventDefault()
                        }
                      >
                        View
                      </DropdownMenuItem>
                    }
                  />

                  <CustomerSheet
                    mode="edit"
                    storeId={storeId}
                    customer={customer}
                    onSuccess={onRefresh}
                    trigger={
                      <DropdownMenuItem
                        onSelect={(e) =>
                          e.preventDefault()
                        }
                      >
                        Edit
                      </DropdownMenuItem>
                    }
                  />
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