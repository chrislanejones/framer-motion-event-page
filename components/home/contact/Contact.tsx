import { Reveal } from "@/components/utils/Reveal";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper section" id="contact">
      <div className="max-w-[700px] mx-auto rounded-[1.2rem]">
        <Reveal width="100%">
          <h4>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
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
        <Reveal width="100%">
          <Link href="mailto:events@email.com">
            <div className="flex items-center justify-center gap-3.2 w-fit mx-auto transition duration-500 px-8 py-3 rounded-lg contactEmail">
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
