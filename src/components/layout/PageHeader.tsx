type PageHeaderProps = {
  title: string;
  subtitle: string;
  buttonText?: string;
};

export default function PageHeader({
  title,
  subtitle,
  buttonText,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="text-gray-500">
          {subtitle}
        </p>
      </div>

      {buttonText && (
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          {buttonText}
        </button>
      )}
    </div>
  );
}