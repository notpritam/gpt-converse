"use client";
import { Link } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function page() {
  const [currentPage, setCurrentPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div className="w-full  flex gap-4 flex-col items-center justify-center text-center mt-[8rem]">
      <Avatar className="h-[4rem] w-[4rem]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>IN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">
          {currentPage === "login" ? "Welcome Back" : "Register"}
        </h1>
        <div className="flex gap-2">
          <span>
            {currentPage === "login"
              ? "Don't have an account?"
              : "Already have an account"}
          </span>{" "}
          <span
            className="text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(currentPage === "login" ? "register" : "login");
            }}
            href="/auth"
          >
            {currentPage === "login" ? "Sign Up" : "Sign In"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[90%] ">
        {currentPage === "register" && (
          <>
            <Input id="picture" className="text-white" type="file" />
            <Input type="text" placeholder="Name" />
          </>
        )}
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        {currentPage === "register" && (
          <>
            <Input type="text" placeholder="Image Url" />
            <Input type="password" placeholder="Confirm Password" />
          </>
        )}

        <Button>{currentPage === "login" ? "Login" : "Register"}</Button>
      </div>
    </div>
  );
}

export default page;
