export default function CommunityLayout({ children }) {
  return (
    <div className=" w-[100%] h-screen dark:bg-[#000] bg-white flex pn:max-md:justify-center">
      {/* Header */}
      <div className="w-[100%] z-0 flex">{children}</div>

      {/*Posts*/}
    </div>
  );
}
