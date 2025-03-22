import React from "react";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="h1 font-bold">404</h1>
      <h2 className="h2 text-red-600 font-bold mt-2">
        Oops! Page Not Found
      </h2>
      <p className="bodyText mt-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="secondaryButton mt-4"
      >
        Go Back Home
      </a>
    </div>
  );
}
