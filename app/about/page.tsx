import ExperienceSection from "@/components/sections/experience-section";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <header>
                <h2 className="text-5xl font-bold">Hi. I&apos;am Troy  <span className="text-primary">@iranzithierry</span> </h2>
            </header>
            <section className="space-y-8 mt-8">
                <Image className="max-h-[60dvh] rounded-sm shadow-md object-cover object-bottom" width={720} height={720} src={"/images/iranzithierry.jpg"} alt="@iranzithierry" />
                <div>
                    <h3 className="text-fg text-2xl font-semibold">Short Bio</h3>
                    <p className="text-muted-fg font-medium">
                        I&apos;m a product maker (... and full stack developer) currently based in Kigali, Rwanda.
                        I&apos;m passionate about building products that help people and make a difference in the world.
                        I&apos;m also a big fan of open source software - which is why almost everything I build is open source! I also love educating others about technology and programming mainly write code in the <a className="text-primary" href="https://create.t3.gg/?ref=https://iranzi.vercel.app/">T3 Stack</a>
                    </p>
                </div>
                <div>
                    <h3 className="text-fg text-2xl font-semibold">Career</h3>
                    <p className="text-muted-fg font-medium">
                        I landed my first professional job, Blockchain Tech Solutions, at an age of 18. And due to education i have not a lot of time to work full time and job conditions then went on to build startups and fail a lot of times and contributing on opensource in my freetime.
                        I also worked as a freelancer, creating and selling web apps to my local clients and landing pages.
                        Then, I went on to work fulltime on my startup Cognova.
                    </p>
                </div>
                <div>
                    <h3 className="text-fg text-2xl font-semibold">Work Experience</h3>
                    <div className="py-5">
                        <ExperienceSection />
                    </div>
                </div>
                <div>
                    <h3 className="text-fg text-2xl font-semibold">Let&apos;s Connect</h3>
                    <div className="py-5">
                    <p className="text-muted-fg font-medium">
                            I&apos;m excited to connect with others via&nbsp;
                            <a href="mailto:iranzithierry12@gmail.com" className="text-primary font-semibold">email (iranzithierry12@gmail.com)</a> and&nbsp;
                            <a href="https://x.com/iranzithierry12" className="text-primary font-semibold">Twitter</a> to chat about projects and ideas. Currently,&nbsp;
                            I&apos;m not taking on freelance projects,
                            but I am open to hearing about potential opportunities,
                            discussing them with you and then potentially collaborating if it&apos;s a good fit.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}