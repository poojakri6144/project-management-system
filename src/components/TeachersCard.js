import React from "react";

function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2 text-indigo-700">
        {teacher.name}
      </h2>
      <p className="text-gray-800 mb-4">
        Email: <span className="text-indigo-500">{teacher.email}</span>
      </p>
      <div className="font-medium text-gray-800">
        Projects:
        <ul className="list-disc pl-5 mt-2 text-teal-600">
          {teacher.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TeacherCard;
