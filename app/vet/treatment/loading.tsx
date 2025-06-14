import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VetTreatmentRecordsLoading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-9 w-64" />
        <Skeleton className="h-5 w-96" />
      </div>

      <Tabs defaultValue="new">
        <TabsList>
          <TabsTrigger value="new">New Record</TabsTrigger>
          <TabsTrigger value="recent">Recent Submissions</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-72" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-10 w-full" />
                      {i === 0 && <Skeleton className="h-4 w-64" />}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-24 w-full" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-9 w-32" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                  <Skeleton className="h-4 w-72" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-40" />
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-9 w-32" />
          </div>

          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                  <div className="text-right space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
                <div className="mt-2">
                  <Skeleton className="h-4 w-64" />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-16" />
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="templates" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-9 w-36" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(5)].map((_, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <Skeleton className="h-5 w-36" />
                  <Skeleton className="h-4 w-48" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-32" />
                </CardContent>
                <CardFooter className="pt-0">
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
