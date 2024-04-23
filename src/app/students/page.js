import React from "react";
import userData from "../../utils/db/users.json";
import StudentCard from "@/components/StudentCard";
import NavigationLinks from "@/components/NavigationLinks";

export default function Student() {
  const students = userData.users.filter((user) => user.role === "student");

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <NavigationLinks />
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        Student List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
