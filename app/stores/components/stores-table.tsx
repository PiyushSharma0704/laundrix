// stores-table.tsx
"use client";

import { Store } from "@/lib/types";
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
import StoreSheet from "./store-sheet";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import TableSkeleton from "@/components/common/table-skeleton";

interface StoresTableProps {
  stores: Store[];
  onRefresh?: () => void;
  loading?: boolean;
}

export default function StoresTable({ stores, onRefresh, loading }: StoresTableProps) {
   if (loading) {
      return <TableSkeleton columns={5} rows={5} />;
    }
  return (
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Store Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {stores?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-24 text-center text-muted-foreground"
              >
                No stores found
              </TableCell>
            </TableRow>
          ) : (
            stores?.map((store) => (
              <TableRow key={store.id}>
                <TableCell className="font-medium">{store.name}</TableCell>

                <TableCell className="text-muted-foreground">
                  {store.slug}
                </TableCell>

                <TableCell>
                  {new Date(store.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <StoreSheet
                        mode="view"
                        store={store}
                        trigger={
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View
                          </DropdownMenuItem>
                        }
                      />

                      <StoreSheet
                        mode="edit"
                        store={store}
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
