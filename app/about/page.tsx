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
                        I am a product maker and full-stack developer based in Kigali, Rwanda.
                        I am passionate about creating impactful products that help people and drive change.
                        A strong advocate of open-source software, I ensure most of my projects are openly accessible.
                        I also enjoy sharing knowledge about technology and programming, often writing code using the <a className="text-primary" href="/articles/understanding-the-t3-stack?ref=current">T3 Stack</a>.
                    </p>

                </div>
                <div>
                    <h3 className="text-fg text-2xl font-semibold">Career</h3>
                    <p className="text-muted-fg font-medium">
                        I started my professional career at 18,
                        working at Blockchain Tech Solutions. While managing my education,
                        I gained experience despite not having much time for a full-time role.
                        I then explored building startups, learning a lot from both successes and failures.
                        In my free time, I contributed to open-source projects.
                        I also worked as a freelancer, creating web apps and landing pages for local clients.
                        Recently, I have been working full-time on my startup, Cognova, focusing on its growth and success.
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