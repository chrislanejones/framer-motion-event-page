export const Heading = () => {
  return (
    <header
      className="h-[calc(45px+3.6rem)] 
px-[3.6rem]
flex items-center justify-between
sticky top-0 z-20
bg-[var(--bg-opaque)]
backdrop-filter blur-[12px]
text-[var(--text-md)] font-bold
@media (max-width: 768px) {
  px-[2.4rem]
}
"
    ></header>
  );
};
