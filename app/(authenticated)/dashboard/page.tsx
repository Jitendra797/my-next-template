import { ExampleAreaChart } from "@/components/examples/area-chart";
import EmptyViewSection from "@/components/sections/empty-view-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="space-x-4">
          <Button variant="default">Create New Workflow</Button>
          <Button variant="outline">
            <Link href="/workflows">View All Workflows</Link>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <EmptyViewSection sectionName="Important Metric">
          <ExampleAreaChart />
        </EmptyViewSection>
      </div>
    </div>
  );
};
export default Page;
