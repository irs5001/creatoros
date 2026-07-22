export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-6">
      <h1 className="mb-10 text-2xl font-bold text-gray-900">
        SimpleDee
      </h1>

      <nav className="space-y-2">
        <a className="block rounded-lg bg-blue-50 px-3 py-2 font-medium text-blue-600">
          Dashboard
        </a>

        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Campaigns
        </a>

        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Messages
        </a>

        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Resources
        </a>

        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Products
        </a>

        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Contacts
        </a>

        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Creator Hubs
        </a>

        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Settings
        </a>
      </nav>
    </aside>
  );
}