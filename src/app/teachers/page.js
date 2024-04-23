import React from "react";
import userData from "../../utils/db/users.json";
import TeacherCard from "@/components/TeachersCard";
import NavigationLinks from "@/components/NavigationLinks";

export default function Teachers() {
  const teachers = userData.users.filter((user) => user.role === "teacher");

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <p className="text-center mt-4">
        <a
          href="/students"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          View Student List
        </a>
      </p>
      <p className="text-center mt-4 mb-4">
        <a
          href="/project"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          View All Projects
        </a>
      </p>{" "}
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Teacher List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
