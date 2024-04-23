"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Corrected import statement

export default function Login() {
  function setupAdminUser() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = users.some((user) => user.role === "admin");

    if (!adminExists) {
      const adminUser = {
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin",
      };
      users.push(adminUser); // Add the new admin user to the array of users

      // Save the updated array of users back to local storage
      localStorage.setItem("users", JSON.stringify(users));

      console.log("Admin user set up successfully!");
    } else {
      console.log("Admin user already exists.");
    }
  }

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "student", // Default role set to student
  });

  const router = useRouter();

  useEffect(() => {
    setupAdminUser(); // Ensure admin user is setup on component load
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.email === credentials.email &&
        u.password === credentials.password &&
        u.role === credentials.role // Ensuring the role is also checked
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user)); // Storing current user information
      // Redirect based on user's role
      if (user.role === "admin") {
        router.push("/teachers");
      } else if (user.role === "teacher") {
        router.push("/project");
      } else {
        router.push("/project");
      }
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Login
        </h2>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>
          <select
            name="role"
            id="role"
            value={credentials.role}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Sign In
        </button>
        <p className="text-center mt-4">
          No Account?{" "}
          <a
            href="/signup"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Create one
          </a>
        </p>
      </form>
    </div>
  );
}
