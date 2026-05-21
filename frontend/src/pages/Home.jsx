import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen
        bg-[#f6f7fb]
        text-slate-900
      "
    >
      {/* NAVBAR */}

      <nav
        className="
    w-full
    bg-white/90
    backdrop-blur-sm
    border-b
    border-slate-200

    px-4
    sm:px-6
    lg:px-10

    py-4

    flex
    flex-col
    sm:flex-row

    sm:items-center
    sm:justify-between

    gap-4
  "
      >
        {/* LOGO */}

        <div
          className="
    flex
    items-center
    gap-3

    w-full
    sm:w-auto
  "
        >
          <div
            className="
              w-14
              h-14
              rounded-2xl

              bg-gradient-to-br
              from-violet-500
              to-indigo-600

              flex
              items-center
              justify-center

              text-white
              text-3xl
              font-bold

              shadow-lg
            "
          >
            S
          </div>

          <div>
            <h1
              className="
                text-3xl
                font-bold
                text-slate-900
              "
            >
              Surakshit
            </h1>

            <p
              className="
                text-sm
                text-violet-600
                font-semibold
              "
            >
              AI Cyber Defense Platform
            </p>
          </div>
        </div>

        {/* NAV LINKS */}

        <div
          className="
    flex
    items-center
    justify-between

    w-full
    sm:w-auto

    gap-3
  "
        >
          {/* <button
            className="
              text-slate-600
              hover:text-violet-600
              transition-all
              font-medium
            "
          >
            Features
          </button> */}

          {/* <button
            className="
              text-slate-600
              hover:text-violet-600
              transition-all
              font-medium
            "
          >
            About
          </button> */}

          <button
            onClick={() => navigate("/login")}
            className="
  w-full
  sm:w-auto

  bg-violet-600
  hover:bg-violet-700

  text-white
  font-semibold

  px-5
  py-3

  rounded-2xl

  transition-all
  duration-300

  shadow-sm
"
          >
            Login
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section
        className="
          px-4
          sm:px-6
          lg:px-10

          py-16
          sm:py-24
        "
      >
        <div
          className="
            grid
            xl:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2

                bg-violet-100
                text-violet-700

                px-4
                py-2

                rounded-full

                text-sm
                font-semibold
              "
            >
              🛡️ Real-Time AI Protection
            </div>

            <h1
              className="
                mt-8

                text-4xl
                sm:text-5xl
                lg:text-6xl

                font-bold
                leading-tight

                text-slate-900
              "
            >
              AI Powered Browser Privacy &
              <span className="text-violet-600"> Threat Detection</span>
            </h1>

            <p
              className="
                mt-8

                text-slate-500

                text-lg
                sm:text-xl

                leading-relaxed

                max-w-2xl
              "
            >
              Protect your browsing activity from phishing, trackers, malicious
              scripts, and cyber threats using intelligent real-time AI
              analysis.
            </p>

            {/* BUTTONS */}

            <div
              className="
                flex
                flex-col
                sm:flex-row

                gap-4

                mt-10
              "
            >
              <button
                onClick={() => navigate("/register")}
                className="
                  bg-violet-600
                  hover:bg-violet-700

                  text-white
                  font-semibold

                  px-8
                  py-4

                  rounded-2xl

                  text-lg

                  transition-all
                  duration-300

                  shadow-lg
                "
              >
                Get Started
              </button>

              <button
                className="
                  bg-white

                  border
                  border-slate-200

                  hover:border-violet-300

                  text-slate-700
                  font-semibold

                  px-8
                  py-4

                  rounded-2xl

                  text-lg

                  transition-all
                "
              >
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              bg-white/90
              backdrop-blur-sm

              border
              border-slate-200

              rounded-[36px]

              p-6
              sm:p-8

              shadow-xl
            "
          >
            {/* MOCK DASHBOARD */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                "
              >
                Live Security Status
              </h2>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-green-500
                  font-semibold
                "
              >
                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-green-500
                    animate-pulse
                  "
                />
                Active
              </div>
            </div>

            {/* STATS */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2

                gap-5

                mt-8
              "
            >
              <div
                className="
                  bg-violet-50
                  rounded-3xl
                  p-6
                "
              >
                <p
                  className="
                    text-slate-500
                    text-sm
                    font-semibold
                  "
                >
                  Privacy Score
                </p>

                <h1
                  className="
                    text-5xl
                    font-bold
                    text-violet-600
                    mt-4
                  "
                >
                  92%
                </h1>
              </div>

              <div
                className="
                  bg-red-50
                  rounded-3xl
                  p-6
                "
              >
                <p
                  className="
                    text-slate-500
                    text-sm
                    font-semibold
                  "
                >
                  Threats Blocked
                </p>

                <h1
                  className="
                    text-5xl
                    font-bold
                    text-red-500
                    mt-4
                  "
                >
                  18
                </h1>
              </div>
            </div>

            {/* ACTIVITY */}

            <div className="mt-8 space-y-4">
              <div
                className="
                  bg-slate-50
                  border
                  border-slate-200

                  rounded-2xl

                  p-4

                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <h2
                    className="
                      font-semibold
                      text-slate-900
                    "
                  >
                    Phishing Attempt Blocked
                  </h2>

                  <p
                    className="
                      text-sm
                      text-slate-500
                      mt-1
                    "
                  >
                    Suspicious domain detected
                  </p>
                </div>

                <span
                  className="
                    text-red-500
                    font-bold
                  "
                >
                  High
                </span>
              </div>

              <div
                className="
                  bg-slate-50
                  border
                  border-slate-200

                  rounded-2xl

                  p-4

                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <h2
                    className="
                      font-semibold
                      text-slate-900
                    "
                  >
                    Safe Browsing Enabled
                  </h2>

                  <p
                    className="
                      text-sm
                      text-slate-500
                      mt-1
                    "
                  >
                    Real-time protection active
                  </p>
                </div>

                <span
                  className="
                    text-green-500
                    font-bold
                  "
                >
                  Safe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        className="
          px-4
          sm:px-6
          lg:px-10

          pb-20
        "
      >
        <div
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >
          <h1
            className="
              text-4xl
              font-bold
              text-slate-900
            "
          >
            Advanced Security Features
          </h1>

          <p
            className="
              mt-5
              text-slate-500
              text-lg
            "
          >
            Enterprise-grade cybersecurity powered by intelligent AI analysis
            and real-time protection systems.
          </p>
        </div>

        {/* FEATURE CARDS */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-8

            mt-16
          "
        >
          {/* CARD 1 */}

          <div
            className="
              bg-white/90
              backdrop-blur-sm

              border
              border-slate-200

              rounded-[32px]

              p-8

              shadow-sm

              hover:shadow-xl
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            <div
              className="
                w-16
                h-16

                rounded-3xl

                bg-violet-100

                flex
                items-center
                justify-center

                text-3xl
              "
            >
              🛡️
            </div>

            <h2
              className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
              "
            >
              Threat Detection
            </h2>

            <p
              className="
                mt-4
                text-slate-500
                leading-relaxed
              "
            >
              Detect phishing websites, malicious trackers, suspicious scripts,
              and harmful domains instantly.
            </p>
          </div>

          {/* CARD 2 */}

          <div
            className="
              bg-white/90
              backdrop-blur-sm

              border
              border-slate-200

              rounded-[32px]

              p-8

              shadow-sm

              hover:shadow-xl
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            <div
              className="
                w-16
                h-16

                rounded-3xl

                bg-indigo-100

                flex
                items-center
                justify-center

                text-3xl
              "
            >
              📊
            </div>

            <h2
              className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
              "
            >
              Privacy Score
            </h2>

            <p
              className="
                mt-4
                text-slate-500
                leading-relaxed
              "
            >
              Analyze your browser activity and generate intelligent AI-powered
              security ratings.
            </p>
          </div>

          {/* CARD 3 */}

          <div
            className="
              bg-white/90
              backdrop-blur-sm

              border
              border-slate-200

              rounded-[32px]

              p-8

              shadow-sm

              hover:shadow-xl
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            <div
              className="
                w-16
                h-16

                rounded-3xl

                bg-red-100

                flex
                items-center
                justify-center

                text-3xl
              "
            >
              ⚡
            </div>

            <h2
              className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
              "
            >
              Real-Time Protection
            </h2>

            <p
              className="
                mt-4
                text-slate-500
                leading-relaxed
              "
            >
              Get instant warnings before visiting dangerous websites and risky
              online platforms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
