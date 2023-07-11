"use client";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { github, google } from "@/src/utils/oAuth";
import { Logo } from "@/public";
import { encodeToken } from "@/src/utils/jwt";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
<<<<<<< HEAD
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Signup | ByteChat",
	description: "",
};
=======
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import {
  setUser,
  startLoading,
  setError,
} from "@/src/store/features/userSlice";
import { userType } from "@/src/utils/types";
>>>>>>> c428c1f7d0651a6ca5d3e72b9e41ebcc62d3cdb3

const isEmailValid = (email: string) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.toLowerCase().match(emailRegex)) {
    return true;
  } else {
    return false;
  }
};

const isPasswordValid = (password: string) => {
  return password.length >= 8;
};

const SignIn = () => {
<<<<<<< HEAD
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	console.log(Email, Password);
=======
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.userReducer.status);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
>>>>>>> c428c1f7d0651a6ca5d3e72b9e41ebcc62d3cdb3

  const isReadyToSignIn = () => {
    if (isEmailValid(Email) && isPasswordValid(Password)) {
      return false;
    } else {
      return true;
    }
  };

  const login = async () => {
    if (!Email || !Password) return alert("Please enter both the fields");

<<<<<<< HEAD
		const res = await fetch("http://localhost:8000/api/auth/login", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ Email, Password }),
		});
		const data = await res.json();
		if (data.status === 402)
			return toast.error(data.message, {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		if (data.success) {
			const clientToken = encodeToken(data.token);
			localStorage.setItem("jwt", clientToken);
			console.log(data);
		}
	};
	return (
		<div className="min-h-screen flex flex-col justify-center items-center p-10">
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<div className="flex flex-col justify-center gap-10">
				<div className="flex items-center justify-center flex-col gap-5">
					<Image src={Logo} alt="loading..." width={70} height={30} />
					<div className="text-4xl font-semibold">Sign In</div>
					<div className="flex gap-2 hover:brightness-150 duration-300 text-accent-dark ">
						{`Don't`} have an account? <Link href="/signup">Sign up</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="relative w-full formInput">
						<input
							type="text"
							required={true}
							onChange={(e: any) => setEmail(e.target.value)}
							name="email"
							className={`border-2 duration-300 ${
								isEmailValid(Email) ? "border-green-500" : "border-red-500"
							}`}
						/>
						<span
							className={`border-2 ${
								isEmailValid(Email) ? "text-green-500" : "text-red-500"
							}`}
						>
							Email address
						</span>
					</div>
					<div className="relative w-full formInput">
						<input
							type="password"
							required={true}
							onChange={(e: any) => setPassword(e.target.value)}
							name="password"
							className={`border-2 duration-300 ${
								isPasswordValid(Password)
									? "border-green-500"
									: "border-red-500"
							}`}
						/>
						<span
							className={`border-2 ${
								isPasswordValid(Password) ? "text-green-500" : "text-red-500"
							}`}
						>
							Password
						</span>
					</div>
					<div className="flex justify-end">
						<Link
							href="/signin"
							className="text-accent-dark hover:brightness-150 duration-300"
						>
							Forgot password?
						</Link>
					</div>
					<button
						className={`w-full h-12 bg-primary-btn text-xl flex items-center justify-center rounded-lg duration-300  ${
							isReadyToSignIn() === false
								? "hover:brightness-95"
								: "brightness-75 cursor-not-allowed"
						}`}
						onClick={() => login()}
						disabled={isReadyToSignIn()}
					>
						Sign In
					</button>
					<div className="flex justify-center items-center text-accent-dark gap-2"></div>
				</div>
				<div className="flex gap-3 justify-center items-center">
					<div className="w-32 h-1 bg-slate-600" />
					Or
					<div className="w-32 h-1 bg-slate-600" />
				</div>
				<div className="flex justify-center items-center gap-12 md:gap-20">
					<div
						className="flex items-center justify-center gap-4 border-slate-600 hover:bg-slate-600 cursor-pointer rounded-lg border-2 p-3 duration-300"
						onClick={google}
					>
						<FcGoogle className="text-3xl" />
						Google
					</div>
					<div
						className="flex items-center justify-center gap-4 border-slate-600 hover:bg-slate-600 cursor-pointer rounded-lg border-2 p-3 duration-300"
						onClick={github}
					>
						<AiFillGithub className="text-3xl" />
						Github
					</div>
				</div>
			</div>
		</div>
	);
=======
    try {
      dispatch(startLoading());
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: Email, password: Password }),
      });
      const data = await res.json();
      console.log(data)
      if (data.status === 402) return alert(data.message);
      if (data.success) {
        dispatch(setUser(data.user as userType));
      } else {
        dispatch(setError(data.message as string));
      }
    } catch (err) {
      dispatch(setError(String(err)));
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-10">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex flex-col justify-center gap-10">
        <div className="flex items-center justify-center flex-col gap-5">
          <Image src={Logo} alt="loading..." width={70} height={30} />
          <div className="text-4xl font-semibold">Sign In</div>
          <div className="flex gap-2 hover:brightness-150 duration-300 text-accent-dark ">
            {`Don't`} have an account? <Link href="/signup">Sign up</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative w-full formInput">
            <input
              type="text"
              required={true}
              onChange={(e: any) => setEmail(e.target.value)}
              name="email"
              className={`border-2 duration-300 ${
                isEmailValid(Email) ? "border-green-500" : "border-red-500"
              }`}
            />
            <span
              className={`border-2 ${
                isEmailValid(Email) ? "text-green-500" : "text-red-500"
              }`}
            >
              Email address
            </span>
          </div>
          <div className="relative w-full formInput">
            <input
              type="password"
              required={true}
              onChange={(e: any) => setPassword(e.target.value)}
              name="password"
              className={`border-2 duration-300 ${
                isPasswordValid(Password)
                  ? "border-green-500"
                  : "border-red-500"
              }`}
            />
            <span
              className={`border-2 ${
                isPasswordValid(Password) ? "text-green-500" : "text-red-500"
              }`}
            >
              Password
            </span>
          </div>
          <div className="flex justify-end">
            <Link
              href="/signin"
              className="text-accent-dark hover:brightness-150 duration-300"
            >
              Forgot password?
            </Link>
          </div>
          <button
            className={`w-full h-12 bg-primary-btn text-xl flex items-center justify-center rounded-lg duration-300  ${
              isReadyToSignIn() === false
                ? "hover:brightness-95"
                : "brightness-75"
            }`}
            onClick={() => login()}
            disabled={isReadyToSignIn()}
          >
            {status === "loading" ? "Signing in..." : "Sign In"}
          </button>
          <div className="flex justify-center items-center text-accent-dark gap-2"></div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div className="w-32 h-1 bg-slate-600" />
          Or
          <div className="w-32 h-1 bg-slate-600" />
        </div>
        <div className="flex justify-center items-center gap-12 md:gap-20">
          <div
            className="flex items-center justify-center gap-4 border-slate-600 hover:bg-slate-600 cursor-pointer rounded-lg border-2 p-3 duration-300"
            onClick={google}
          >
            <FcGoogle className="text-3xl" />
            Google
          </div>
          <div
            className="flex items-center justify-center gap-4 border-slate-600 hover:bg-slate-600 cursor-pointer rounded-lg border-2 p-3 duration-300"
            onClick={github}
          >
            <AiFillGithub className="text-3xl" />
            Github
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> c428c1f7d0651a6ca5d3e72b9e41ebcc62d3cdb3
};

export default SignIn;
