import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Dashboard
              </h2>

              <p className="text-gray-500">
                Welcome to SimpleDee.
              </p>
            </div>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              + New Campaign
            </button>
          </div>

          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <h3 className="text-xl font-semibold">
              Your dashboard is coming soon.
            </h3>

            <p className="mt-2 text-gray-500">
              This is where we'll build your creator dashboard.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}