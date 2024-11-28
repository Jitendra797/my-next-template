const EmptyViewSection = ({
  sectionName,
  children,
}: {
  sectionName: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-2 w-full space-y-4 space-x-4">
      <h2 className="text-lg font-semibold">{sectionName}</h2>
      {children}
    </div>
  );
};
export default EmptyViewSection;
