import { ExampleAreaChart } from "@/components/examples/area-chart";
import { NewWorkflowForm } from "@/components/examples/new-workflow-form";
import PageSection from "@/components/page-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between my-4 py-4 border-b">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="space-x-4">
          <NewWorkflowForm />
          <Button variant="outline">
            <Link href="/workflows">View All Workflows</Link>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <PageSection sectionName="Important Metric">
          <ExampleAreaChart />
        </PageSection>
      </div>
    </div>
  );
};
export default Page;
