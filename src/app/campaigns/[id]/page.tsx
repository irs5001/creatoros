import { getCampaign } from "@/data/campaigns";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CampaignDetailsPage({ params }: Props) {
  const { id } = await params;

  const campaign = getCampaign(Number(id));

  if (!campaign) {
    return (
      <h1 className="text-2xl font-bold">
        Campaign not found
      </h1>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {campaign.name}
        </h1>

        <p className="text-gray-500">
          Campaign ID: {campaign.id}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-gray-500">
              Platform
            </p>

            <p className="font-medium">
              {campaign.platform}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Trigger
            </p>

            <p className="font-medium">
              {campaign.trigger}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="font-medium">
              {campaign.status}
            </p>
          </div>

        </div>
      </div>

      <div className="flex gap-4">
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Edit Campaign
        </button>

        <button className="rounded-lg border px-5 py-2 hover:bg-gray-100">
          Duplicate
        </button>

        <button className="rounded-lg border border-red-300 px-5 py-2 text-red-600 hover:bg-red-50">
          Delete
        </button>
      </div>
    </div>
  );
}