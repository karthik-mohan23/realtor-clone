import { useState } from "react";
import OAuth from "../utils/OAuth";

import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-20 font-bold">Forgot Password</h1>
      <div className="w-[90%] max-w-md mx-auto mt-16">
        <form className="w-full ">
          <div className="w-full ">
            <input
              type="email"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={onChange}
              className="border border-gray-400 px-2  h-8 py-2 rounded-md transition ease-in-out outline-blue-300 mb-8 w-full"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-xl text-white py-2 hover:bg-blue-600 duration-300 w-full rounded-md">
              Reset password
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center mt-6">
          <p>
            Don't have a account ?{" "}
            <Link
              to="/sign-up"
              className="text-red-600 hover:text-red-700 duration-300">
              Register
            </Link>
          </p>
          <p>
            <Link
              to="/sign-in"
              className="text-blue-500 hover:text-blue-800 duration-300">
              Sign in instead
            </Link>
          </p>
        </div>
        <div className="my-4 flex items-center before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300">
          <p className="text-center font-semibold mx-4">OR</p>
        </div>
        <OAuth />
      </div>
    </section>
  );
};
export default ForgotPassword;
