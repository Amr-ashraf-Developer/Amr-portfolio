import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="my-4">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;