import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div className="flex items-center">
          <h4>
            <span className="text-md font-bold relative ml-3">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">Vuejs</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Postgres</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Firebase</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex items-center">
          <h4>
            <span className="text-md font-bold relative ml-3">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="chip">React Native</span>
            <span className="chip">Gatsby</span>
            <span className="chip">Chakra Ui</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Figma</span>
            <span className="chip">Planetscale</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Firebase</span>
            <span className="chip">Supabase</span>
            <span className="chip">Vercel</span>
            <span className="chip">Laravel</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
