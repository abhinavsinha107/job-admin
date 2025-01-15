"use client";
import Link from "next/link";

import logo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import axios from "axios";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useGlobalContext from "@/hooks/use-context";
import Preloader from "@/sheardComponent/Preloader/Preloader";

interface FormData {
  email: string;
  password: string;
}
const LoginMain = () => {
  const { loading, setLoading } = useGlobalContext();
  const [loginError, setloginError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(false);
    const email = data.email;
    const password = data.password;
    const userInfo = {
      email,
      password,
    };

    axios
      .post(`${process.env.BASE_URL}auth`, userInfo)
      .then((res) => {
        const token = res.data.data.accessToken;
        console.log("token", token);
        localStorage.setItem("accessToken", token);
        setLoading(false);
        router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        setloginError(error.response.data.message);
      });
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center w-full h-full cashier-login-area"
      >
        <div className="cashier-login-wrapper">
          <div className="mb-12 text-center cashier-login-logo">
            <Image src={logo} alt="logo not found" />
          </div>

          <div className="mb-5 cashier-select-field">
            <div className="cashier-input-field-style">
              <div className="w-full single-input-field">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </div>
              <span className="input-icon">
                <i className="fa-light fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="mb-5 cashier-select-field">
            <div className="cashier-input-field-style">
              <div className="w-full single-input-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <span className="error-message">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <span className="input-icon">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle-btn"
                >
                  <i
                    className={
                      showPassword
                        ? "fa-solid fa-eye"
                        : "fa-regular fa-eye-slash"
                    }
                  ></i>
                </button>
              </span>
            </div>
          </div>
          <span className="error-message">{loginError && loginError}</span>
          <div className="cashier-login-btn mb-7">
            <div className="cashier-login-btn-full default-light-theme">
              <button className="btn-primary" type="submit">
                Login{" "}
              </button>
            </div>
          </div>
          <div className="cashier-login-footer">
            <div className="text-center cashier-login-footer-account">
              <span className="text-[16px] inline-block text-bodyText">
                New account?{" "}
                <Link href="/register" className="text-[16px] text-themeBlue">
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginMain;
