/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input";
import useAuthStore from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const signupSchema = z
  .object({
    fullname: z.string().min(2, "Full name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const { registerUser, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState();

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async (data) => {
    const { confirmPassword, ...payload } = data;
    const response = await registerUser(payload);
    if (response) {
      reset();
      navigate("/login");
    } else {
      console.log("Signup failed");
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Left Side */}
      <div className="hidden md:flex justify-center items-center bg-PRIMARY left-image">
        <div className="text-black space-y-2 bg-white/80 px-10 py-10 rounded-xl">
          <h2 className="leading-snug text-black flex flex-col">
            <span className="text-4xl font-bold">Welcome</span> <br />
            <span className="text-2xl font-medium">Join the journey</span>{" "}
            <br />
            <span className="text-2xl font-medium">Collaborate & Grow.</span>
            <br />
            <span className="text-3xl font-semibold">Let’s Begin!</span>
          </h2>
          <p className="text-sm mt-2 text-black">
            Create an account to unlock all features.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col  justify-center items-center p-6 md:p-12 h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm space-y-6"
        >
          <div>
            <h1 className="text-2xl font-bold">Create an Account ✨</h1>
            <p className="text-sm text-gray-600">
              Let's get started with your team productivity.
            </p>
          </div>

          <div className="relative">
            <label className="text-sm text-gray-600">Full Name</label>
            <Input placeholder="Your full name" {...register("fullname")} />
            {errors.fullname && (
              <p className="absolute top-15 text-xs text-red-600 mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="text-sm text-gray-600">Username</label>
            <Input placeholder="Choose a username" {...register("username")} />
            {errors.username && (
              <p className="absolute top-15 text-xs text-red-600 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="text-sm text-gray-600">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="absolute top-15 text-xs text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="text-sm text-gray-600">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
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
              <p className="absolute top-15 text-xs text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative mb-7">
            <label className="text-sm text-gray-600">Confirm Password</label>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              {...register("confirmPassword")}
              icon={
                showConfirmPassword ? (
                  <AiFillEyeInvisible onClick={toggleConfirmPassword} />
                ) : (
                  <AiFillEye onClick={toggleConfirmPassword} />
                )
              }
            />
            {errors.confirmPassword && (
              <p className="absolute top-15 text-xs text-red-600 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="sm"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-PRIMARY hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
