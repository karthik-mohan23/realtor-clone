import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-20 font-bold">Sign In</h1>
      <div className="w-[90%] max-w-md mx-auto mt-16">
        <form className="w-full ">
          <div className="w-full ">
            <input
              type="email"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={onChange}
              className="border border-gray-400 px-2  h-8 py-2 rounded-sm transition ease-in-out outline-blue-300 mb-8 w-full"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChange}
              id="password"
              placeholder="Enter password"
              className="border border-gray-400 px-2 h-8 py-2 rounded-sm transition ease-in-out outline-blue-300 mb-8 w-full"
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
              className="bg-blue-500 text-xl text-white py-2 hover:bg-blue-600 duration-300 w-full">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default SignIn;
