import { useState } from "react";
import OAuth from "../utils/OAuth";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-20 font-bold">Sign </h1>
      <div className="w-[90%] max-w-md mx-auto mt-16">
        <form className="w-full ">
          <div className="w-full ">
            <input
              type="text"
              placeholder="Full name"
              id="name"
              value={name}
              onChange={onChange}
              className="border border-gray-400 px-2  h-8 py-2 rounded-md transition ease-in-out outline-blue-300 mb-8 w-full"
            />
          </div>
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

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChange}
              id="password"
              placeholder="Enter password"
              className="border border-gray-400 px-2 h-8 py-2 rounded-md transition ease-in-out outline-blue-300 mb-8 w-full"
            />
            {showPassword ? (
              <AiFillEye
                className="absolute cursor-pointer right-0 top-2 me-2"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEyeInvisible
                className="absolute cursor-pointer right-0 top-2 me-2"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-xl text-white py-2 hover:bg-blue-600 duration-300 w-full rounded-md">
              Sign up
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center mt-6">
          <p>
            Have a account ?{" "}
            <Link
              to="/sign-in"
              className="text-blue-400 hover:text-blue-700 duration-300">
              Sign in
            </Link>
          </p>
          <p>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:text-blue-800 duration-300">
              Forgot password ?
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
export default SignUp;
