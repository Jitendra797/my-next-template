import ExampleCard from "../examples/example-card";

const CardsViewSection = ({ title }: { title: string }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
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
