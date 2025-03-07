import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Register = ({ setTab }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          password: user.password,
        }),
        mode: "cors",
      });

      if (!response.ok) throw new Error("Failed to register");

      const data = await response.json();
      console.log(data);
      setTab("login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <form className="flex flex-col gap-3 mt-5" onSubmit={handleSubmit}>
          {/* Username Input Field */}
          <div className="flex flex-col">
            <label className="font-semibold text-[16px] text-left">
              Username
            </label>
            <Input
              type="text"
              className="w-full"
              placeholder="Enter your username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          {/* Email Input Field */}
          <div className="flex flex-col">
            <label className="font-semibold text-[16px] text-left">
              Email Address
            </label>
            <Input
              type="email"
              className="w-full"
              placeholder="you@example.com"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input Field */}
          <div className="flex flex-col">
            <label className="font-semibold text-[16px] text-left">
              Password
            </label>
            <Input
              type="password"
              className="w-full"
              placeholder="••••••••"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="w-full mt-5">
            <Button
              className="w-full text-sm tracking-wider uppercase px-12 py-6 bg-primary hover:bg-purple-700 bg-purple-600"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </form>

        {/* Login Link */}
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