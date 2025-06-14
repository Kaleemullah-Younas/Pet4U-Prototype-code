import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <Skeleton className="h-8 w-64 mb-2" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-10 w-full max-w-md" />
        <div className="mt-6">
          <Skeleton className="h-[600px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
