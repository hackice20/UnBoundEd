import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, GraduationCap } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-[#FFFBF5]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-slate-800">
                UnBoundEd
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="#"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
            <SignedOut>
              <Link to={"/auth"}>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/home" />
            </SignedIn>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
