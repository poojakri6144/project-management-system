"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProject() {
  const [project, setProject] = useState({
    id: Date.now(), // Unique ID for each project
    name: "",
    description: "",
    domain: "",
    teacherName: "",
    bannerImage: "",
  });

  const router = useRouter(); // Initialize useRouter for navigation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve existing projects from local storage
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
    // Add the new project
    existingProjects.push(project);
    // Save back to local storage
    localStorage.setItem("projects", JSON.stringify(existingProjects));
    alert("Project created successfully.");
    // Redirect to projects page or a specific page that shows all projects
    router.push("/projects"); // Modify '/projects' to your actual route
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Create New Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={project.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={project.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="domain"
            className="block text-sm font-medium text-gray-700"
          >
            Domain
          </label>
          <input
            type="text"
            id="domain"
            name="domain"
            value={project.domain}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="teacherName"
            className="block text-sm font-medium text-gray-700"
          >
            Teacher Name
          </label>
          <input
            type="text"
            id="teacherName"
            name="teacherName"
            value={project.teacherName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="bannerImage"
            className="block text-sm font-medium text-gray-700"
          >
            Banner Image URL
          </label>
          <input
            type="text"
            id="bannerImage"
            name="bannerImage"
            value={project.bannerImage}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}
