export default function Container({children}: { children: React.ReactNode }) {
    return (
        <div className="mx-auto max-w-7xl py-28 min-h-screen px-6 sm:px-8 lg:px-24 bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
            {children}
        </div>
    );
}

