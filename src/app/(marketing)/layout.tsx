import NavBar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar />
      <main className="h-full pt-40 dark:bg-[#2D2424]">{children}</main>
    </div>
  );
};

export default MarketingLayout;
