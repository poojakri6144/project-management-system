"use client";
import React, { useState, useEffect } from "react";

export default function EnrolledProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Assume projects are stored with JSON format in local storage
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedProjects) {
      const enrolledProjects = storedProjects.filter(
        (project) => project.enrollmentStatus === "enrolled"
      );
      setProjects(enrolledProjects);
    }
  }, []);

  return (
    <div>
      <h1>Enrolled Projects</h1>
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))
      ) : (
        <p>No projects enrolled yet.</p>
      )}
    </div>
  );
}
