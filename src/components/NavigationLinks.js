import React from "react";

export default function NavigationLinks() {
  return (
    <>
      <p className="text-center mt-4">
        <a
          href="/teachers"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          View Teachers List
        </a>
      </p>
      <p className="text-center mt-4 mb-4">
        <a
          href="/project"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          View All Projects
        </a>
      </p>
    </>
  );
}
