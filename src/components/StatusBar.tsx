// src/components/StatusBar.tsx

const StatusBar = () => {
  return (
    <div className="my-16 md:my-24">
      <div className="max-w-md mx-auto bg-gray-900/50 border border-gray-700 rounded-md p-3 flex items-center gap-4">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <p className="text-gray-300 font-mono text-sm tracking-wider">
          Currently working on <span className="text-white">NEW PROJECT!!</span>
        </p>
      </div>
    </div>
  );
};

export default StatusBar;
