import PageHeader from "@/components/layout/PageHeader";
import CampaignTable from "@/components/campaigns/CampaignTable";

export default function CampaignsPage() {
  return (
    <>
      <PageHeader
        title="Campaigns"
        subtitle="Create and manage your automation campaigns."
        buttonText="+ New Campaign"
      />

      <div className="space-y-6">
  <div className="flex items-center justify-between rounded-xl border bg-white p-5 shadow-sm">
    <div>
      <h2 className="text-lg font-semibold">Your Campaigns</h2>
      <p className="text-sm text-gray-500">
        Campaigns automatically respond to comments and messages.
      </p>
    </div>

    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
      + New Campaign
    </button>
  </div>

    <CampaignTable />
</div>
    </>
  );
}