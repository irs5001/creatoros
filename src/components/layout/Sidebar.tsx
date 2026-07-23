import Link from "next/link";

const menuItems = [
  { label: "Dashboard", href: "/" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Messages", href: "/messages" },
  { label: "Resources", href: "/resources" },
  { label: "Products", href: "/products" },
  { label: "Contacts", href: "/contacts" },
  { label: "Creator Hubs", href: "/creator-hubs" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-80 border-r bg-white p-6">
      <h1 className="mb-10 text-5xl font-bold">
        SimpleDee
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-4 py-3 text-lg transition hover:bg-blue-50"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}