import { ContentLayout } from "@/components/admin-panel/content-layout";

const Page = () => {
  return (
    <ContentLayout title={"Dashboard"}>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500">Welcome to the dashboard</p>
      </div>
    </ContentLayout>
  );
};
export default Page;
