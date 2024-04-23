import React from "react";
import { useRouter } from "next/navigation";
import NavigationLinks from "./NavigationLinks";

function NavBar({ currentUser }) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("currentUser"); // Clear user session
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="text-center mb-6  flex justify-between">
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
      <button
        onClick={() => {
          if (currentUser.role === "teacher") {
            router.push("/project/create-project");
          } else if (currentUser.role === "student") {
            router.push("/students/enrolled-project");
          } else {
            router.push("/login");
          }
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {currentUser.role === "teacher" || currentUser.role === "admin"
          ? `Add More Projects`
          : currentUser.role === "student"
          ? `Enrolled Projects`
          : `Login to Enroll/Create Project`}
      </button>
    </div>
  );
}
export default NavBar;
