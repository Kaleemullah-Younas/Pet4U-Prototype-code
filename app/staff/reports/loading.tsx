import { Skeleton } from "@/components/ui/skeleton"

export default function StaffReportsLoading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      <Skeleton className="h-10 w-[600px]" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg p-6 space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-5 w-[120px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <Skeleton className="h-[200px] w-full" />
              <div className="flex flex-col items-center gap-1">
                <Skeleton className="h-6 w-[60px]" />
                <Skeleton className="h-3 w-[100px]" />
              </div>
            </div>
          ))}
      </div>

      <div className="border rounded-lg p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-5 w-[180px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <Skeleton className="h-[300px] w-full" />
      </div>
    </div>
  )
}
