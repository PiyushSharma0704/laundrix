import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

interface TableSkeletonProps {
  columns: number;
  rows?: number;
}

export default function TableSkeleton({
  columns,
  rows = 5,
}: TableSkeletonProps) {
  return (
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            {Array.from({ length: columns }).map((_, index) => (
              <TableHead key={index}>
                <Skeleton className="h-4 w-20" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton className="h-4 w-full max-w-[150px]" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}