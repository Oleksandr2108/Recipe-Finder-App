const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 h-64 rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
