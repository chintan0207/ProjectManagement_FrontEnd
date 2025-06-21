import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/Input";
import useAuthStore from "../stores/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.coerce.boolean().optional(), // ✅ fix here
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { login, isBtnLoading } = useAuthStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const response = await login(data);
    if (response) {
      reset();
      navigate("/dashboard");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Left Side */}
      <div className="hidden md:flex justify-center items-center bg-PRIMARY left-image">
        <div className="text-black space-y-2 bg-white/80 px-10 py-10 rounded-xl">
          <h2 className="leading-snug text-black flex flex-col">
            <span className="text-4xl font-bold">Focus</span> <br />
            <span className="text-2xl font-medium">Manage Tasks</span> <br />
            <span className="text-2xl font-medium">Empower your team.</span>
            <br />
            <span className="text-3xl font-semibold">Deliver Results.</span>
          </h2>
          <p className="text-sm mt-2 text-black">
            From planning to execution — all in one place.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-10 justify-center items-center p-6 md:p-12 h-full overflow-y-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm space-y-5"
        >
          <div>
            <h1 className="text-2xl font-bold">Hey, Hello 👋</h1>
            <p className="text-sm text-gray-600">
              Enter the information you entered while registering.
            </p>
          </div>

          <div className="relative mb-6">
            <label className="text-sm text-gray-600">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className=" absolute top-16 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative mb-7">
            <label className="text-sm text-gray-600">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              icon={
                showPassword ? (
                  <AiFillEyeInvisible onClick={togglePassword} />
                ) : (
                  <AiFillEye onClick={togglePassword} />
                )
              }
            />
            {errors.password && (
              <p className="absolute top-16 text-xs  text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" {...register("remember")} />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <button type="button" className="text-PRIMARY hover:underline">
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            size="sm"
            className="w-full"
            disabled={isBtnLoading}
          >
            {isBtnLoading ? "Signing In..." : "Sign In"}
          </Button>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-PRIMARY hover:underline cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
