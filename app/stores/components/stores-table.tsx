"use client";

import { MoreHorizontal } from "lucide-react";

import { Store } from "@/lib/types";

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

import StoreSheet from "./store-sheet";

interface StoresTableProps {
  stores: Store[];
  onRefresh?: () => void;
  loading?: boolean;
}

export default function StoresTable({
  stores,
  onRefresh,
  loading,
}: StoresTableProps) {
  if (loading) {
    return <TableSkeleton columns={7} rows={5} />;
  }

  return (
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>

            <TableHead>Code</TableHead>

            <TableHead>Phone</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Created At</TableHead>

            <TableHead className="w-[80px]">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {stores.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="h-24 text-center text-muted-foreground"
              >
                No stores found
              </TableCell>
            </TableRow>
          ) : (
            stores.map((store) => (
              <TableRow key={store.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">
                      {store.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {store.slug}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  {store.code}
                </TableCell>

                <TableCell>
                  {store.phone ?? "-"}
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      store.isActive
                        ? "default"
                        : "secondary"
                    }
                  >
                    {store.isActive
                      ? "Active"
                      : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell>
                  {new Date(
                    store.createdAt,
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
                      <StoreSheet
                        mode="view"
                        store={store}
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

                      <StoreSheet
                        mode="edit"
                        store={store}
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