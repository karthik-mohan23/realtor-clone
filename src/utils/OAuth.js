import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-red-500 hover:bg-red-700 text-white py-3 uppercase text-sm font-medium rounded-md duration-300">
      <FcGoogle className="bg-white rounded-md text-sm me-2" /> continue with
      google
    </button>
  );
};
export default OAuth;
