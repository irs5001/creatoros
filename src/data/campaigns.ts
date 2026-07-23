export const campaigns = [
  {
    id: 1,
    name: "Summer Recipe",
    platform: "Instagram",
    trigger: "recipe",
    status: "Active",
  },
  {
    id: 2,
    name: "Free Meal Plan",
    platform: "Facebook",
    trigger: "meal",
    status: "Active",
  },
  {
    id: 3,
    name: "Toddler Guide",
    platform: "TikTok",
    trigger: "guide",
    status: "Draft",
  },
];

export function getCampaign(id: number) {
  return campaigns.find((campaign) => campaign.id === id);
}