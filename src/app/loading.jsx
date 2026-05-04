import React from "react";

const Loading = ({
  fullScreen = true,
  message = "Loading content...",
  size = "md",
}) => {
  const sizeMap = {
    sm: "w-8 h-8 sm:w-10 sm:h-10",
    md: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
    lg: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20",
  };
  const spinnerSize = sizeMap[size] || sizeMap.md;

  const wrapperClass = fullScreen
    ? "min-h-screen w-full flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
    : "w-full flex items-center justify-center py-6 sm:py-8";

  return (
    <div
      className={wrapperClass}
      role="status"
      aria-live="polite"
      data-testid="loading-spinner"
    >
      <div className="flex flex-col items-center gap-4 sm:gap-5">
        <div className={`relative ${spinnerSize} select-none`}>
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-indigo-500 border-l-purple-500 animate-spin shadow-md shadow-indigo-500/20"></div>
        </div>

        <span className="sr-only">{message}</span>

        {message && (
          <p className="text-sm sm:text-base font-medium text-gray-600 animate-pulse tracking-wide text-center max-w-xs sm:max-w-sm px-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Loading;
