const PageSection = ({
  sectionName,
  children,
  sectionType,
}: {
  sectionName: string;
  children: React.ReactNode;
  sectionType?: string;
}) => {

  if (sectionType === 'cards') {
    return (
      <div className="w-full space-y-4">
        <h2 className="text-lg font-semibold">{sectionName}</h2>
        <div className="flex gap-4 flex-wrap mt-0">
          {children}
        </div>
      </div>
    );
  }

  // More sections go here:
  // - Table
  // - List

  return (
    <div className="w-full space-y-4">
      <h2 className="text-lg font-semibold">{sectionName}</h2>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};
export default PageSection;
