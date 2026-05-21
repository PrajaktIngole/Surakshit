import { useEffect, useState } from "react";

import API from "../../services/api";

const ThreatHistory = () => {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const email =
        localStorage.getItem("email");

      const response = await API.get(
        `/threat/history/${email}`
      );

      setHistory(response.data);

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

            Threat Scan History

          </h2>

          <p
            className="
              text-slate-500
              mt-1
              text-sm
              sm:text-base
            "
          >

            Recent security scans and
            detected threat activity.

          </p>

        </div>

      </div>

      {/* EMPTY STATE */}

      {history.length === 0 && (

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

            No Scan History

          </h2>

          <p
            className="
              text-slate-500
              mt-3
            "
          >

            Your scanned websites will
            appear here.

          </p>

        </div>
      )}

      {/* TABLE */}

      {history.length > 0 && (

        <div
          className="
            mt-8
            overflow-x-auto
            rounded-3xl
            border
            border-slate-200
          "
        >

          <table
            className="
              w-full
              min-w-[700px]
            "
          >

            <thead
              className="
                bg-slate-50
                border-b
                border-slate-200
              "
            >

              <tr>

                <th
                  className="
                    text-left
                    p-5
                    text-xs
                    uppercase
                    tracking-widest
                    text-slate-500
                    font-bold
                  "
                >

                  URL

                </th>

                <th
                  className="
                    text-left
                    p-5
                    text-xs
                    uppercase
                    tracking-widest
                    text-slate-500
                    font-bold
                  "
                >

                  Status

                </th>

                <th
                  className="
                    text-left
                    p-5
                    text-xs
                    uppercase
                    tracking-widest
                    text-slate-500
                    font-bold
                  "
                >

                  Time

                </th>

              </tr>

            </thead>

            <tbody>

              {history.map((item) => (

                <tr
                  key={item.id}

                  className="
                    border-b
                    border-slate-100
                    hover:bg-slate-50
                    transition-all
                  "
                >

                  {/* URL */}

                  <td
                    className="
                      p-5
                    "
                  >

                    <div
                      className="
                        max-w-[300px]
                        truncate
                        text-slate-800
                        font-medium
                      "
                    >

                      {item.url}

                    </div>

                  </td>

                  {/* STATUS */}

                  <td
                    className="
                      p-5
                    "
                  >

                    <span
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold

                        ${
                          item.status === "Dangerous"

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

                      {item.status}

                    </span>

                  </td>

                  {/* TIME */}

                  <td
                    className="
                      p-5
                      text-slate-500
                      text-sm
                    "
                  >

                    {
                      new Date(
                        item.scannedAt
                      ).toLocaleString()
                    }

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
};

export default ThreatHistory;