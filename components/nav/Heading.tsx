export const Heading = () => {
  return (
    <header className="h-[calc(6px+2.5rem)] px-[1rem] sticky top-0 z-20 bg-[var(--bg-opaque)] backdrop-filter backdrop-blur-[12px] text-[var(--text-md)] md:px-[2.4rem]">
      <div className="grid grid-cols-2 items-center gap-4 p-2">
        <div className="justify-items-start self-center">
          <p className="font-thin text-xl">
            March 18, 2025 - 8:00 A.M. @ The National Conference Center
          </p>
        </div>
        <div className="justify-self-end self-center">
          <button className="bg-amber-600 text-white font-thin text-lg px-6 py-1 rounded-lg hover:bg-amber-700 ">
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
};
