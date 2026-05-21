import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
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

  const handleLogin = async () => {

    try {

      setLoading(true);

      const response =
        await API.post(
          "/auth/login",
          formData
        );

      const token =
        response.data;

      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "email",
        formData.email
      );

      alert(
        "Login Successful 🎉"
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        "Invalid Email or Password"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

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

              Welcome
              Back

            </h1>

            <p
              className="
                mt-6

                text-violet-100
                text-lg

                leading-relaxed
              "
            >

              Access your intelligent
              cybersecurity dashboard
              and monitor real-time
              threat protection activity.

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

              AI Security Engine

            </h2>

            <p
              className="
                mt-3

                text-violet-100
                leading-relaxed
              "
            >

              Phishing detection,
              tracker analysis,
              malicious domain scanning,
              and intelligent cyber
              threat monitoring.

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

              Login

            </h1>

            <p
              className="
                mt-4

                text-slate-500

                leading-relaxed
              "
            >

              Securely access your
              intelligent cybersecurity
              dashboard and monitoring
              platform.

            </p>

          </div>

          {/* FORM */}

          <div
            className="
              mt-10

              space-y-5
            "
          >

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
              onClick={handleLogin}

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
                  ? "Logging In..."
                  : "Login"
              }

            </button>

            {/* REGISTER */}

            <div
              className="
                text-center
                mt-6
              "
            >

              <p className="text-slate-500">

                Don't have an account?

                <button
                  onClick={() =>
                    navigate("/register")
                  }

                  className="
                    ml-2

                    text-violet-600
                    hover:text-violet-700

                    font-semibold
                  "
                >

                  Register

                </button>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;