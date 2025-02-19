import { GraduationCap } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const Register = ({ setTab }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center">
        <GraduationCap className="w-16 h-16" />
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-center text-gray-600">
          Join Now – Empower Your Learning Journey!
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <form className="flex flex-col gap-3 mt-5">
          <div className="flex flex-col">
            <label className="font-semibold text-[16px] text-left">
              Email Address
            </label>
            <Input
              type="email"
              className="w-full"
              placeholder="you@example.com"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-[16px] text-left">
              Password
            </label>
            <Input
              type="password"
              className="w-full"
              placeholder="••••••••"
              name="password"
            />
          </div>

          <div className="w-full mt-5">
            <Button
              className="w-full text-sm tracking-wider uppercase px-12 py-6 bg-primary hover:bg-purple-700 bg-purple-600"
              type="submit"
            >
              Sign In
            </Button>
          </div>
        </form>
        <div className="mt-1">
          <p className="text-center">
            Already have an account?{" "}
            <span
              className="text-purple-600 font-semibold cursor-pointer"
              onClick={() => {
                setTab("login");
              }}
            >
              Login Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
