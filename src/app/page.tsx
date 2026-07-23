import Sidebar from "@/components/layout/Sidebar";
import PageHeader from "@/components/layout/PageHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import SystemStatus from "@/components/dashboard/SystemStatus";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <PageHeader
              title="Dashboard"
              subtitle="Welcome to SimpleDee."
              buttonText="+ New Campaign"
          />

          <div className="grid grid-cols-4 gap-6">
  <MetricCard
    title="Campaigns"
    value="0"
  />

  <MetricCard
    title="Audience"
    value="0"
  />

  <MetricCard
    title="Messages Sent"
    value="0"
  />

  <MetricCard
    title="Products"
    value="0"
  />
</div>

<SystemStatus />

        </section>
      </div>
    </main>
  );
}