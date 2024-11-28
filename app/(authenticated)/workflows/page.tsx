import { NewWorkflowForm } from "@/components/examples/new-workflow-form";
import CardsViewSection from "@/components/sections/cards-view-section";

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between my-4 py-4 border-b">
        <h1 className="text-xl font-semibold">Workflows</h1>
        <div className="space-x-4">
          <NewWorkflowForm />
        </div>
      </div>

      <div className="space-y-4">
        <CardsViewSection sectionName="All Workflows"></CardsViewSection>
      </div>
    </div>
  );
};
export default Page;
