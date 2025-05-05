export default function Container({children}: { children: React.ReactNode }) {
    return (
        <div className="mx-auto max-w-6xl py-28 min-h-screen px-4 sm:px-8 lg:px-24 bg-background dark:bg-background">
            {children}
        </div>
    );
}

