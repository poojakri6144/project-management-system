import React from "react";

function StudentCard({ student }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2 text-indigo-700">
        Enrollment No: {student.id}
      </h2>
      <p className="text-gray-800 mb-4">
        Name: <span className="text-indigo-500">{student.name}</span>
      </p>
      <p className="text-gray-800">
        Email: <span className="text-indigo-500">{student.email}</span>
      </p>
      <div className="font-medium text-gray-800 mt-4">
        Enrolled Projects:
        <ul className="list-disc pl-5 mt-2 text-teal-600">
          {student.enrolledProjects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default StudentCard;
