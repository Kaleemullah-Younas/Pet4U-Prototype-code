import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <Skeleton className="h-8 w-64 mb-2" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 w-40" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-10 w-full max-w-md" />
        <div className="mt-6">
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
