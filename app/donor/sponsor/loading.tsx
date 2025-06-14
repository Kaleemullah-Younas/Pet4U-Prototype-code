import { MainLayout } from "@/components/main-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function SponsorLoadingPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-9 w-40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-b space-y-1">
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>

              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="rounded-lg border shadow-sm overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <Skeleton className="w-full md:w-40 h-40" />
                      <div className="flex-1 p-4 space-y-4">
                        <div className="flex justify-between">
                          <Skeleton className="h-6 w-32" />
                          <Skeleton className="h-5 w-24 rounded-full" />
                        </div>
                        <Skeleton className="h-4 w-full" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                        <Skeleton className="h-4 w-full" />
                        <div className="flex justify-between items-center">
                          <Skeleton className="h-4 w-24" />
                          <div className="flex gap-2">
                            <Skeleton className="h-9 w-24" />
                            <Skeleton className="h-9 w-24" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-32 mb-4" />
                {Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-8" />
                      </div>
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                  ))}
                <Skeleton className="h-40 w-full rounded-lg mt-6" />
              </div>
            </div>

            <div className="rounded-lg border shadow-sm">
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-32 mb-2" />
                <div className="space-y-2">
                  {Array(4)
                    .fill(null)
                    .map((_, index) => (
                      <Skeleton key={index} className="h-10 w-full rounded-md" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
