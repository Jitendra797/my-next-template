import ExampleCard from "../examples/example-card";

const CardsViewSection = ({ sectionName }: { sectionName: string }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{sectionName}</h2>
      <div className="flex gap-4 flex-wrap">
        {/* Cards code goes here. */}
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </div>
    </div>
  );
};
export default CardsViewSection;
