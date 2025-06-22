import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-PRIMARY-50 text-center px-4">
      <h1 className="text-5xl font-bold text-PRIMARY-700 mb-4">403</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Unauthorized Access
      </h2>
      <p className="text-gray-600 mb-6">
        You don’t have permission to view this page.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-PRIMARY text-white rounded-md hover:bg-PRIMARY-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Unauthorized;
