"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import projectsData from "../../utils/db/projects.json";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/Navbar";

export default function ViewProjects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const initialProjects =
      JSON.parse(localStorage.getItem("projects")) || projectsData.projects;
    setProjects(initialProjects);
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const filteredProjects =
    currentUser.role === "teacher"
      ? projects.filter((p) => p.teacherName === currentUser.name)
      : projects;

  const handleEnroll = (projectId) => {
    if (!currentUser) {
      alert("Please log in to enroll in projects");
      return;
    }
    alert("Enrolled in project successfully!");
  };

  const approveEnrollment = (projectId) => {
    alert(`Enrollment approved for project ID: ${projectId}`);
  };

  const rejectEnrollment = (projectId) => {
    alert(`Enrollment rejected for project ID: ${projectId}`);
  };

  return (
    <div className="max-w-7xl mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-10">
        {currentUser.role === "teacher" ? `Your` : `All`} Projects
      </h1>
      <NavBar currentUser={currentUser} />
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              currentUser={currentUser}
              handleEnroll={handleEnroll}
              approveEnrollment={approveEnrollment}
              rejectEnrollment={rejectEnrollment}
            />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-800">
            There are no projects listed yet. Would you like to add one?
          </p>
        </div>
      )}
    </div>
  );
}
