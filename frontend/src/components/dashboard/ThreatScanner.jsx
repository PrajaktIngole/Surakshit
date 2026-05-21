import { useState } from "react";
import API from "../../services/api";

const ThreatScanner = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeUrl = async () => {
    setLoading(true);

    try {
      const response = await API.post("/threat/scan", {
        url: url,
        email: localStorage.getItem("email"),
      });

      const data = response.data;

      setResult({
        status: data.status,
        message: data.message,

        malicious: data.malicious,
        suspicious: data.suspicious,
        harmless: data.harmless,

        threatScore: data.threatScore,

        color: data.status === "Dangerous" ? "text-red-400" : "text-green-400",
      });

      setLoading(false);
    } catch (error) {
      console.log(error);

      setResult({
        status: "Error",
        message: "Threat analysis failed.",
        color: "text-yellow-400",
      });
      setLoading(false);
    }
  };

  return (

  <div
    className="
      bg-white/90
      backdrop-blur-sm
      border
      border-slate-200
      rounded-[32px]
      p-4
      sm:p-6
      lg:p-8
      mt-10
      shadow-sm
    "
  >

    {/* HEADER */}

    <div>

      <div
        className="
          flex
          items-center
          gap-3
          flex-wrap
        "
      >

        <div
          className="
            w-10
            h-10
            rounded-2xl
            bg-violet-100
            flex
            items-center
            justify-center
            text-violet-600
            text-xl
          "
        >

          🛡️

        </div>

        <div>

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-violet-700
            "
          >

            AI Threat Scanner

          </h2>

          <p
            className="
              text-slate-500
              mt-1
              text-sm
              sm:text-base
            "
          >

            Analyze suspicious URLs
            for phishing, malware,
            and cyber threats.

          </p>

        </div>

      </div>

    </div>

    {/* INPUT */}

    <div
      className="
        flex
        flex-col
        lg:flex-row
        gap-4
        mt-8
      "
    >

      <input
        type="text"

        placeholder="Enter website URL..."

        value={url}

        onChange={(e) =>
          setUrl(e.target.value)
        }

        className="
          flex-1
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
        "
      />

      <button
        onClick={analyzeUrl}

        disabled={loading}

        className="
          bg-violet-600
          hover:bg-violet-700
          disabled:bg-slate-300
          text-white
          font-semibold
          px-8
          py-4
          rounded-2xl
          transition-all
          duration-300
          shadow-sm
        "
      >

        {loading
          ? "Analyzing..."
          : "Scan"}

      </button>

    </div>

    {/* LOADING */}

    {loading && (

      <div
        className="
          mt-8
          bg-violet-50
          border
          border-violet-100
          rounded-3xl
          p-6
        "
      >

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              w-10
              h-10
              border-4
              border-violet-500
              border-t-transparent
              rounded-full
              animate-spin
            "
          />

          <div>

            <h2
              className="
                text-violet-700
                text-xl
                font-bold
              "
            >

              Analyzing Threat...

            </h2>

            <p
              className="
                text-slate-500
                mt-1
              "
            >

              Surakshit AI engine
              is scanning the URL.

            </p>

          </div>

        </div>

      </div>
    )}

    {/* RESULT */}

    {result && (

      <div
        className="
          mt-8
          bg-slate-50
          border
          border-slate-200
          rounded-3xl
          p-6
        "
      >

        {/* STATUS */}

        <h1
          className={`
            text-3xl
            sm:text-4xl
            font-bold
            ${result.color}
          `}
        >

          {result.status}

        </h1>

        <p
          className="
            text-slate-500
            mt-3
            leading-relaxed
          "
        >

          {result.message}

        </p>

        {/* STATS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            mt-8
          "
        >

          <div
            className="
              bg-white
              border
              border-red-100
              rounded-2xl
              p-5
            "
          >

            <h2
              className="
                text-red-500
                text-3xl
                font-bold
              "
            >

              {result.malicious}

            </h2>

            <p
              className="
                text-slate-500
                mt-2
                text-sm
              "
            >

              Malicious

            </p>

          </div>

          <div
            className="
              bg-white
              border
              border-yellow-100
              rounded-2xl
              p-5
            "
          >

            <h2
              className="
                text-yellow-500
                text-3xl
                font-bold
              "
            >

              {result.suspicious}

            </h2>

            <p
              className="
                text-slate-500
                mt-2
                text-sm
              "
            >

              Suspicious

            </p>

          </div>

          <div
            className="
              bg-white
              border
              border-green-100
              rounded-2xl
              p-5
            "
          >

            <h2
              className="
                text-green-500
                text-3xl
                font-bold
              "
            >

              {result.harmless}

            </h2>

            <p
              className="
                text-slate-500
                mt-2
                text-sm
              "
            >

              Harmless

            </p>

          </div>

        </div>

        {/* THREAT SCORE */}

        <div className="mt-8">

          <div
            className="
              flex
              justify-between
              items-center
              mb-3
            "
          >

            <h2
              className="
                text-lg
                font-semibold
                text-slate-800
              "
            >

              Threat Severity

            </h2>

            <span
              className={`
                font-bold

                ${
                  result.threatScore > 50
                    ? "text-red-500"

                    : result.threatScore > 20
                    ? "text-yellow-500"

                    : "text-green-500"
                }
              `}
            >

              {
                result.threatScore > 50
                  ? "Critical"

                  : result.threatScore > 20
                  ? "Medium"

                  : "Low"
              }

            </span>

          </div>

          <div
            className="
              w-full
              bg-slate-200
              rounded-full
              h-3
              overflow-hidden
            "
          >

            <div
              style={{
                width:
                  `${result.threatScore}%`
              }}

              className={`
                h-full
                rounded-full

                ${
                  result.threatScore > 50
                    ? "bg-red-500"

                    : result.threatScore > 20
                    ? "bg-yellow-400"

                    : "bg-green-500"
                }
              `}
            />

          </div>

          <p
            className="
              text-slate-500
              mt-3
              text-sm
            "
          >

            Threat Score:
            {" "}
            {result.threatScore}%

          </p>

        </div>

      </div>
    )}

  </div>
);
};

export default ThreatScanner;
