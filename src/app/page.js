import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-700">
          School Project Management System
        </h1>
        <p className="text-gray-800 mt-4 text-xl">
          Engage and manage school projects with ease.
        </p>
      </header>
      <div className="w-full max-w-md space-y-4">
        <Link
          href="/login"
          className="block w-full text-center text-lg bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="block w-full text-center text-lg bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Sign Up
        </Link>
        <p className="text-center text-gray-700 text-lg">or</p>
        <Link
          href="/project"
          className="block w-full text-center text-lg bg-gray-400 hover:bg-gray-600 text-black font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Continue without logging in
        </Link>
      </div>
    </div>
  );
}
