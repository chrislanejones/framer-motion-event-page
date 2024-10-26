import { Reveal } from "@/components/utils/Reveal";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SectionHeader } from "@/components/utils/SectionHeader";

const validate = () => {
  let valid = true;
  const newErrors = { name: "", email: "", message: "" };

  if (!formData.name) {
    newErrors.name = "Name is required";
    valid = false;
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is invalid";
    valid = false;
  }

  if (!formData.message) {
    newErrors.message = "Message is required";
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (validate()) {
    console.log("Form submitted:", formData);
    // Here you can handle the form submission, e.g., send the data to a server
  }
};

export const Contact = () => {
  return (
    <section className="section-wrapper section" id="contact">
      <SectionHeader title="Contact" dir="l" />
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
            <div className="flex items-center space-x-4 justify-center gap-3.2 w-fit mx-auto transition duration-500 px-8 py-3 rounded-lg contactEmail">
              <MdEmail />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
