import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/Input";
import heroImage from "../assets/line.webp";

const Login = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2 ">
      <div className="flex justify-center items-center bg-violet-600">
        <img className="w-screen h-screen" src={heroImage} alt="hero image" />
      </div>
      <div className="flex flex-col gap-5 justify-start w-full py-20 px-20">
        <div className="mb-2">
          <h1 className="text-xl font-bold ">Hey, Hello 👋</h1>
          <p className="text-xs text-gray-600">
            Enter the information you entered while registering.
          </p>
        </div>
        <div className="">
          <label className="text-xs text-gray-600">Email</label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <div className="">
          <label className="text-xs text-gray-600">Password</label>
          <Input type="email" placeholder="Enter your password" />
        </div>
        <div className="flex justify-between mb-2">
          <div className="flex items-center space-x-2.5 text-xs">
            <Checkbox defaultChecked color="default" id="color_1" />
            <label htmlFor="color_1" className="text-xs">
              Remember me
            </label>
          </div>
          <div className="text-xs">Forgot Password?</div>
        </div>
        <Button size="sm">Sign In</Button>
        <div className="flex justify-center mt-2">
          <p className="text-sm">
            Don't have an account?{" "}
            <span className="text-violet-600">Sign Up</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
