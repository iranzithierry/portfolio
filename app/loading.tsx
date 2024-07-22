import Container from "@/components/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <Container>
            <div className="animate-pulse p-4 space-y-2">
                {/* <div className="h-4 absolute top-0 right-0 left-0 mx-auto p-6 w-2/4">
            <div className="h-10 bg-gray-300 rounded-xl w-full"/>
            </div> */}
                <div className="flex space-x-4">
                    <div className="rounded-full bg-gray-300 h-12 w-12" />
                    <div className="flex-1 space-y-2 py-1">
                        <div className="h-4 bg-gray-300 rounded w-1/4" />
                        <div className="h-4 bg-gray-300 rounded w-2/4" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-4/6 mt-12" />
                    <div className="h-3 bg-gray-300 rounded w-4/6" />
                    <div className="h-3 bg-gray-300 rounded w-4/6" />
                    <div className="h-3 bg-gray-300 rounded w-4/6" />
                </div>

                <div className="flex space-x-4">
                    <div className="h-6 w-6 bg-gray-300 rounded-full" />
                    <div className="h-6 w-6 bg-gray-300 rounded-full" />
                    <div className="h-6 w-6 bg-gray-300 rounded-full" />
                    <div className="h-6 w-6 bg-gray-300 rounded-full" />
                </div>
                <div className="grid lg:grid-cols-5 gap-6 w-full">
                    <div className="flex col-span-3 flex-col w-full">
                        <div className="space-y-2  w-full">
                            <div className="h-16 bg-gray-300 rounded mt-6" />
                            <div className="h-3 bg-gray-300 rounded w-4/6" />
                            <div className="h-3 bg-gray-300 rounded w-4/6" />
                        </div>
                        <div className="space-y-2  w-full">
                            <div className="h-16 bg-gray-300 rounded mt-6" />
                            <div className="h-3 bg-gray-300 rounded w-4/6" />
                            <div className="h-3 bg-gray-300 rounded w-4/6" />
                        </div>
                        <div className="space-y-2  w-full">
                            <div className="h-16 bg-gray-300 rounded mt-6" />
                            <div className="h-3 bg-gray-300 rounded w-4/6" />
                            <div className="h-3 bg-gray-300 rounded w-4/6" />
                        </div>

                    </div>
                    <div className="flex col-span-2 flex-col w-full">
                        <div className="space-y-2  w-full">
                            <div className="h-32 bg-gray-300 rounded mt-6" />
                        </div>
                        <div className="space-y-2 w-full">
                            <div className="h-48 bg-gray-300 rounded mt-4" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}