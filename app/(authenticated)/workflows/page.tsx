import CardsViewSection from "@/components/sections/cards-view-section";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Workflows</h1>
        <div className="space-x-4">
          <Button variant="default">Create New Workflow</Button>
        </div>
      </div>

      <div className="space-y-4">
        <CardsViewSection sectionName="All Workflows"></CardsViewSection>
      </div>
    </div>
  );
};
export default Page;
