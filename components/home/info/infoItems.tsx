import { Reveal } from "@/components/utils/Reveal";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

export const InfoItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  return (
    <div className="mb-9 pb-9 border-b border-background-light">
      <div className="flex items-center justify-between mb-5">
        <Reveal>
          <span className="text-md font-black">{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between mb-5">
        <Reveal>
          <span className="primary-color font-black">{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="mb-7 font-thin">{description}</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-5">
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
