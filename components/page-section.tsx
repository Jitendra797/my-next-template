const PageSection = ({
  sectionName,
  children,
}: {
  sectionName: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold">{sectionName}</h2>
      {children}
    </div>
  );
};
export default PageSection;
