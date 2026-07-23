export default function SystemStatus() {
  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">
        System Status
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Your connected platforms and recent automation activity.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-8">
        <div>
          <h3 className="mb-3 font-medium text-gray-900">
            Connections
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Instagram</span>
              <span className="font-medium text-green-600">● Connected</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Facebook</span>
              <span className="font-medium text-green-600">● Connected</span>
            </div>

            <div className="flex items-center justify-between">
              <span>TikTok</span>
              <span className="font-medium text-amber-500">● Not Connected</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-medium text-gray-900">
            Recent Activity
          </h3>

          <div className="space-y-3 text-sm">
            <div>
              <div className="font-medium">
                John commented "recipe"
              </div>
              <div className="text-gray-500">
                DM sent successfully • 2 minutes ago
              </div>
            </div>

            <div>
              <div className="font-medium">
                Sarah commented "guide"
              </div>
              <div className="text-gray-500">
                DM sent successfully • 8 minutes ago
              </div>
            </div>

            <div>
              <div className="font-medium">
                Mike commented "link"
              </div>
              <div className="text-gray-500">
                DM sent successfully • 14 minutes ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}