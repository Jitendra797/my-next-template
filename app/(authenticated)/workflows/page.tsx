import CardSectionExample from "@/components/examples/card-section-example";
import { NewWorkflowForm } from "@/components/examples/new-workflow-form";
import PageSection from "@/components/page-section";

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
        <PageSection sectionName="All Workflows" sectionType="cards">
          <CardSectionExample />
        </PageSection>
      </div>
    </div>
  );
};
export default Page;
