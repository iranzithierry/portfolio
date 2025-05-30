import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Not Found",
}
export default function NotFound() {
    return (
        <>
            <main className="grid min-h-full h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-primary">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="/">
                            <Button>
                                Go back home
                            </Button>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}
