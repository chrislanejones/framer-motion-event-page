import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className="flex items-center gap-2 mb-2"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-full h-px bg-opacity-30 bg-[var(--text)] " />
      <h3>
        <Reveal>
          <span className="text-6xl font-black text-end">
            {title}
            <span className="text-fuchsia-500">.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
