type MetricCardProps = {
  title: string;
  value: string;
};

export default function MetricCard({
  title,
  value,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="mt-2 text-3xl font-bold text-gray-900">
        {value}
      </h3>
    </div>
  );
}