import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-12">
            <span className="text-4xl font-bold relative ml-3">
              Venue Amenities
            </span>
          </h4>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="chip">Lunch Provided</span>
            <span className="chip">Breakout Sessions</span>
            <span className="chip">Happy Hour w/ Free Drinks</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-12">
            <span className="text-4xl font-bold relative ml-3">Speakers</span>
          </h4>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="chip">John Smith</span>
            <span className="chip">Mary Smith</span>
            <span className="chip">Bob Smith</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
