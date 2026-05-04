'use client'
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative select-none">
          <h1 className="text-[10rem] leading-none font-black text-gray-200 tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
              Page Missing
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Oops! You&apos;ve wandered off the map.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The page you’re looking for doesn’t exist, has been moved, or is
            temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            aria-label="Go back to homepage"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            aria-label="Go to previous page"
            className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
          >
            Go Back
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Error code: 404 • {new Date().getFullYear()} • Still lost?{" "}
          <a href="/contact" className="text-indigo-500 hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
