export default function AboutSection() {
    return (
        <div className="mt-8 max-w-xl">
            <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-neutral-100">About me</h2>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
                Hey! I&apos;m <b>Thierry</b>, a {new Date().getFullYear() - 2006} y/o software engineer who’s been writing code since I was 14. Over the past 5+ years, I’ve been building cool things for the web and mobile, turning ideas into real, working products that people love to use.
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                I care about clean code, thoughtful design, and creating apps that not only work well but feel good to use. Whether it&apos;s launching startups or improving existing tools, I’m all about shipping fast, learning constantly, and solving real problems with tech.
            </p>
        </div>

    )
}