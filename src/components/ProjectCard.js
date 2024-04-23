import React from "react";

function ProjectCard({
  project,
  currentUser,
  handleEnroll,
  approveEnrollment,
  rejectEnrollment,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={project.bannerImage}
        alt="Project Banner"
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="text-sm text-gray-600">
          Domain:{" "}
          <span className="text-gray-800 font-medium">{project.domain}</span>
        </p>
        <p className="text-sm text-gray-600">
          Teacher:{" "}
          <span className="text-gray-800 font-medium">
            {project.teacherName}
          </span>
        </p>

        {currentUser.role === "student" && (
          <button
            onClick={() => handleEnroll(project.id)}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enroll
          </button>
        )}
        {currentUser.role === "admin" && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => approveEnrollment(project.id)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              ✓ Approve
            </button>
            <button
              onClick={() => rejectEnrollment(project.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              ✗ Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProjectCard;
