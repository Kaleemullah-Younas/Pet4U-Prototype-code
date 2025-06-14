import { Skeleton } from "@/components/ui/skeleton"

export default function VetAppointmentsLoading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-8 w-[300px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-4">
          <div className="border rounded-lg p-6 space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-[100px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <Skeleton className="h-[300px] w-full" />
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-[150px]" />
              <Skeleton className="h-4 w-[180px]" />
            </div>
            <div className="space-y-4">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <Skeleton className="h-5 w-[100px]" />
                    <Skeleton className="h-5 w-[50px]" />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <Skeleton className="h-10 w-[300px] mb-4" />

          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-9 w-[200px]" />
          </div>

          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-4 mb-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-9 w-9 rounded-full" />
                    <div>
                      <Skeleton className="h-5 w-[100px]" />
                      <Skeleton className="h-4 w-[150px]" />
                    </div>
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-4 w-[120px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Skeleton className="h-9 w-[100px]" />
                  <Skeleton className="h-9 w-[120px]" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
