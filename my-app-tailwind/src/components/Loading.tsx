import React from "react";

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-opacity-20">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
      />
      <p className="ml-2">loading...</p>
    </div>
  );
}
