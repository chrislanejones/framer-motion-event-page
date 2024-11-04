import { Reveal } from "@/components/utils/Reveal";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SectionHeader } from "@/components/utils/SectionHeader";

export const Contact = () => {
  return (
    <section className="section-wrapper section" id="contact">
      <SectionHeader title="Contact" dir="l" />
      <div className="container mx-auto pt-10">
        <Reveal>
          <p>
            Have an idea to discuss? Shoot me an email if you want to connect!
            You can also find me on{" "}
            <Link href="" target="_blank" rel="nofollow">
              Linkedin
            </Link>{" "}
            or{" "}
            <Link href="" target="_blank" rel="nofollow">
              Skype
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal>
          <div className="mx-auto pt-10">
            <Link href="mailto:events@email.com">
              <div className="flex items-center space-x-4 justify-center gap-3.2 w-fit mx-auto transition duration-500 px-8 py-3 rounded-lg contactEmail">
                <MdEmail />
                <span>Send Email</span>
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
