import { useEffect, useState } from "react";

import API from "../../services/api";

const RecentThreats = () => {

  const [threats, setThreats] =
    useState([]);

  const email =
    localStorage.getItem("email");

  useEffect(() => {

    fetchThreats();

  }, []);

  const fetchThreats = async () => {

    try {

      const response =
        await API.get(
          `/threat/history/${email}`
        );

      setThreats(
        response.data.slice(0, 5)
      );

    } catch (error) {

      console.log(error);
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

          ⚠️

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

            Recent Threat Activity

          </h2>

          <p
            className="
              text-slate-500
              mt-1
              text-sm
              sm:text-base
            "
          >

            Latest scanned websites
            and detected threats.

          </p>

        </div>

      </div>

      {/* EMPTY STATE */}

      {threats.length === 0 ? (

        <div
          className="
            mt-8
            bg-slate-50
            border
            border-slate-200
            rounded-3xl
            p-10
            text-center
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              text-slate-700
            "
          >

            No Recent Activity

          </h2>

          <p
            className="
              text-slate-500
              mt-3
            "
          >

            Your latest scanned URLs
            will appear here.

          </p>

        </div>

      ) : (

        <div
          className="
            mt-8
            space-y-4
          "
        >

          {threats.map((item) => (

            <div
              key={item.id}

              className="
                bg-slate-50
                border
                border-slate-200
                rounded-3xl
                p-5
                hover:bg-slate-100
                transition-all
                duration-300

                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-5
              "
            >

              {/* LEFT */}

              <div className="flex-1">

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    flex-wrap
                  "
                >

                  <div
                    className={`
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-semibold

                      ${
                        item.status ===
                        "Dangerous"

                          ? `
                            bg-red-100
                            text-red-600
                          `

                          : `
                            bg-green-100
                            text-green-600
                          `
                      }
                    `}
                  >

                    {
                      item.status ===
                      "Dangerous"

                        ? "⚠ Dangerous"

                        : "✅ Safe"
                    }

                  </div>

                </div>

                <p
                  className="
                    text-slate-700
                    mt-4
                    break-all
                    leading-relaxed
                  "
                >

                  {item.url}

                </p>

              </div>

              {/* RIGHT */}

              <div
                className="
                  text-slate-500
                  text-sm
                  whitespace-nowrap
                "
              >

                {
                  new Date(
                    item.scannedAt
                  ).toLocaleString()
                }

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default RecentThreats;