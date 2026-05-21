import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const Register = () => {

  const navigate = useNavigate();

  const [open, setOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleRegister = async () => {

    try {

      setLoading(true);

      const response =
        await API.post(
          "/auth/register",
          formData
        );

      console.log(response.data);

      localStorage.setItem(
        "name",
        formData.name
      );

      localStorage.setItem(
        "email",
        formData.email
      );

      setOpen(true);

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <>
      <div
        className="
          min-h-screen

          bg-[#f6f7fb]

          flex
          items-center
          justify-center

          px-4
          py-10
        "
      >

        {/* CONTAINER */}

        <div
          className="
            w-full
            max-w-6xl

            grid
            lg:grid-cols-2

            bg-white/90
            backdrop-blur-sm

            border
            border-slate-200

            rounded-[36px]

            overflow-hidden

            shadow-2xl
          "
        >

          {/* LEFT SIDE */}

          <div
            className="
              hidden
              lg:flex

              flex-col
              justify-between

              bg-gradient-to-br
              from-violet-600
              to-indigo-700

              p-12

              text-white
            "
          >

            {/* TOP */}

            <div>

              <div
                className="
                  w-16
                  h-16

                  rounded-3xl

                  bg-white/20

                  flex
                  items-center
                  justify-center

                  text-4xl
                  font-bold
                "
              >

                S

              </div>

              <h1
                className="
                  mt-10

                  text-5xl
                  font-bold
                  leading-tight
                "
              >

                Join
                Surakshit

              </h1>

              <p
                className="
                  mt-6

                  text-violet-100
                  text-lg

                  leading-relaxed
                "
              >

                Protect your digital
                identity using AI-powered
                threat detection and
                intelligent browser
                security analytics.

              </p>

            </div>

            {/* BOTTOM */}

            <div
              className="
                bg-white/10

                border
                border-white/20

                rounded-3xl

                p-6
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                "
              >

                Real-Time Protection

              </h2>

              <p
                className="
                  mt-3

                  text-violet-100
                  leading-relaxed
                "
              >

                Phishing detection,
                tracker blocking,
                malicious website analysis,
                and live cyber monitoring.

              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              p-6
              sm:p-10
              lg:p-14
            "
          >

            {/* MOBILE LOGO */}

            <div
              className="
                lg:hidden

                flex
                flex-col
                items-center

                text-center
              "
            >

              <div
                className="
                  w-16
                  h-16

                  rounded-3xl

                  bg-gradient-to-br
                  from-violet-500
                  to-indigo-600

                  flex
                  items-center
                  justify-center

                  text-white
                  text-4xl
                  font-bold

                  shadow-lg
                "
              >

                S

              </div>

              <h1
                className="
                  mt-5

                  text-4xl
                  font-bold

                  text-slate-900
                "
              >

                Surakshit

              </h1>

              <p
                className="
                  mt-2

                  text-violet-600
                  font-semibold
                "
              >

                AI Cyber Defense Platform

              </p>

            </div>

            {/* HEADER */}

            <div
              className="
                mt-10
                lg:mt-0
              "
            >

              <h1
                className="
                  text-4xl
                  sm:text-5xl

                  font-bold

                  text-slate-900
                "
              >

                Create Account

              </h1>

              <p
                className="
                  mt-4

                  text-slate-500

                  leading-relaxed
                "
              >

                Start your secure browsing
                experience with intelligent
                AI-powered cyber protection.

              </p>

            </div>

            {/* FORM */}

            <div
              className="
                mt-10

                space-y-5
              "
            >

              {/* NAME */}

              <div>

                <label
                  className="
                    text-sm
                    font-semibold
                    text-slate-600
                  "
                >

                  Full Name

                </label>

                <input
                  type="text"

                  name="name"

                  placeholder="Enter your name"

                  onChange={handleChange}

                  className="
                    w-full

                    mt-2

                    p-4

                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    outline-none

                    text-slate-800

                    placeholder:text-slate-400

                    focus:ring-4
                    focus:ring-violet-100

                    transition-all
                  "
                />

              </div>

              {/* EMAIL */}

              <div>

                <label
                  className="
                    text-sm
                    font-semibold
                    text-slate-600
                  "
                >

                  Email Address

                </label>

                <input
                  type="email"

                  name="email"

                  placeholder="Enter your email"

                  onChange={handleChange}

                  className="
                    w-full

                    mt-2

                    p-4

                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    outline-none

                    text-slate-800

                    placeholder:text-slate-400

                    focus:ring-4
                    focus:ring-violet-100

                    transition-all
                  "
                />

              </div>

              {/* PASSWORD */}

              <div>

                <label
                  className="
                    text-sm
                    font-semibold
                    text-slate-600
                  "
                >

                  Password

                </label>

                <input
                  type="password"

                  name="password"

                  placeholder="Enter your password"

                  onChange={handleChange}

                  className="
                    w-full

                    mt-2

                    p-4

                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    outline-none

                    text-slate-800

                    placeholder:text-slate-400

                    focus:ring-4
                    focus:ring-violet-100

                    transition-all
                  "
                />

              </div>

              {/* BUTTON */}

              <button
                onClick={handleRegister}

                disabled={loading}

                className="
                  w-full

                  mt-4

                  bg-violet-600
                  hover:bg-violet-700

                  disabled:bg-slate-300

                  text-white
                  font-semibold

                  py-4

                  rounded-2xl

                  text-lg

                  transition-all
                  duration-300

                  shadow-lg
                "
              >

                {
                  loading
                    ? "Creating Account..."
                    : "Register"
                }

              </button>

              {/* LOGIN */}

              <div
                className="
                  text-center
                  mt-6
                "
              >

                <p className="text-slate-500">

                  Already have an account?

                  <button
                    onClick={() =>
                      navigate("/login")
                    }

                    className="
                      ml-2

                      text-violet-600
                      hover:text-violet-700

                      font-semibold
                    "
                  >

                    Login

                  </button>

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SUCCESS POPUP */}

      <AlertDialog
        open={open}
        onOpenChange={setOpen}
      >

        <AlertDialogContent
          className="
            bg-white

            border
            border-slate-200

            rounded-3xl

            text-slate-900
          "
        >

          <AlertDialogHeader>

            <AlertDialogTitle
              className="
                text-3xl
                font-bold
                text-violet-700
              "
            >

              Registration Successful 🎉

            </AlertDialogTitle>

            <AlertDialogDescription
              className="
                text-slate-500
                text-base
                leading-relaxed
              "
            >

              Your account has been
              created successfully.
              Please login to continue.

            </AlertDialogDescription>

          </AlertDialogHeader>

          <AlertDialogFooter>

            <AlertDialogAction
              onClick={() =>
                navigate("/login")
              }

              className="
                bg-violet-600
                hover:bg-violet-700

                text-white

                rounded-2xl
              "
            >

              Go To Login

            </AlertDialogAction>

          </AlertDialogFooter>

        </AlertDialogContent>

      </AlertDialog>
    </>
  );
};

export default Register;