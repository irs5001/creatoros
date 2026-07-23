import { campaigns } from "@/data/campaigns";
import Link from "next/link";

export default function CampaignTable() {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="text-left">
            <th className="px-6 py-4">Campaign</th>
            <th className="px-6 py-4">Platform</th>
            <th className="px-6 py-4">Trigger</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((campaign) => (
            <tr
              key={campaign.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-6 py-4 font-medium">
                <Link
                    href={`/campaigns/${campaign.id}`}
                    className="text-blue-600 hover:underline"
            >
                {campaign.name}
                </Link>
                </td>

              <td className="px-6 py-4">
                {campaign.platform}
              </td>

              <td className="px-6 py-4">
                {campaign.trigger}
              </td>

              <td className="px-6 py-4">
                {campaign.status === "Active" ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                    Draft
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}