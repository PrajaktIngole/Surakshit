import { useEffect, useState } from "react";

import API from "../../services/api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

// const data = [

//   {
//     day: "Mon",
//     scans: 8,
//     threats: 3,
//     dangerous: 1
//   },

//   {
//     day: "Tue",
//     scans: 12,
//     threats: 4,
//     dangerous: 2
//   },

//   {
//     day: "Wed",
//     scans: 6,
//     threats: 1,
//     dangerous: 0
//   },

//   {
//     day: "Thu",
//     scans: 16,
//     threats: 5,
//     dangerous: 2
//   },

//   {
//     day: "Fri",
//     scans: 9,
//     threats: 2,
//     dangerous: 1
//   },

//   {
//     day: "Sat",
//     scans: 20,
//     threats: 7,
//     dangerous: 3
//   },

//   {
//     day: "Sun",
//     scans: 11,
//     threats: 3,
//     dangerous: 0
//   }
// ]

const AdvancedAnalytics = () => {
  const [data, setData] = useState([]);

  const email = localStorage.getItem("email");

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await API.get(`/threat/weekly/${email}`);

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalScans = data.reduce((sum, item) => sum + item.scans, 0);

  const totalThreats = data.reduce((sum, item) => sum + item.threats, 0);

  const dangerousSites = data.reduce((sum, item) => sum + item.dangerous, 0);

  const averageScans = totalScans > 0 ? (totalScans / 7).toFixed(1) : 0;

  return (

  <div
    className="
      bg-white/90
      backdrop-blur-sm
      rounded-[32px]
      border
      border-slate-200
      shadow-sm
      p-4
      sm:p-6
      lg:p-8
      mt-10
    "
  >

    {/* HEADER */}

    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
      "
    >

      {/* LEFT */}

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

            📈

          </div>

          <div>

            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-violet-700
              "
            >

              Weekly Threat Analytics

            </h1>

            <p
              className="
                text-slate-500
                mt-1
                text-sm
                sm:text-base
              "
            >

              Overview of security scans
              and detected threats mapped
              over a 7-day window.

            </p>

          </div>

        </div>

      </div>

      {/* LEGEND */}

      <div
        className="
          flex
          items-center
          gap-5
          flex-wrap
          text-sm
          font-semibold
        "
      >

        <div className="flex items-center gap-2">

          <div
            className="
              w-4
              h-4
              rounded-full
              bg-violet-500
            "
          />

          <span className="text-slate-700">
            Scans
          </span>

        </div>

        <div className="flex items-center gap-2">

          <div
            className="
              w-4
              h-4
              rounded-full
              bg-indigo-500
            "
          />

          <span className="text-slate-700">
            Threats
          </span>

        </div>

        <div className="flex items-center gap-2">

          <div
            className="
              w-4
              h-4
              rounded-full
              bg-fuchsia-500
            "
          />

          <span className="text-slate-700">
            Dangerous
          </span>

        </div>

      </div>

    </div>

    {/* CHART */}

    <div
      className="
        mt-8
        rounded-3xl
        border
        border-violet-100
        p-4
        sm:p-6
      "
    >

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >

          <CartesianGrid
            strokeDasharray="4 4"
            stroke="#e9d5ff"
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#9333ea",
              fontSize: 12,
              fontWeight: 700,
            }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#c084fc",
              fontSize: 12,
            }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e9d5ff",
              borderRadius: "18px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)",
            }}
          />

          <Line
            type="monotone"
            dataKey="scans"
            stroke="#9333ea"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#000",
              stroke: "#9333ea",
              strokeWidth: 3,
            }}
            activeDot={{
              r: 8,
            }}
          />

          <Line
            type="monotone"
            dataKey="threats"
            stroke="#4f46e5"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#000",
              stroke: "#4f46e5",
              strokeWidth: 3,
            }}
          />

          <Line
            type="monotone"
            dataKey="dangerous"
            stroke="#c026d3"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#000",
              stroke: "#c026d3",
              strokeWidth: 3,
            }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

    {/* BOTTOM STATS */}

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
        mt-8
      "
    >

      <div
        className="
          bg-white
          border
          border-violet-100
          rounded-3xl
          p-6
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-widest
            font-bold
            text-violet-600
          "
        >

          Total Scans

        </p>

        <h1
          className="
            text-4xl
            font-bold
            text-slate-900
            mt-4
          "
        >

          {totalScans}

        </h1>

      </div>

      <div
        className="
          bg-white
          border
          border-violet-100
          rounded-3xl
          p-6
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-widest
            font-bold
            text-indigo-600
          "
        >

          Threats Detected

        </p>

        <h1
          className="
            text-4xl
            font-bold
            text-slate-900
            mt-4
          "
        >

          {totalThreats}

        </h1>

      </div>

      <div
        className="
          bg-white
          border
          border-violet-100
          rounded-3xl
          p-6
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-widest
            font-bold
            text-fuchsia-600
          "
        >

          Dangerous Sites

        </p>

        <h1
          className="
            text-4xl
            font-bold
            text-slate-900
            mt-4
          "
        >

          {dangerousSites}

        </h1>

      </div>

      <div
        className="
          bg-white
          border
          border-violet-100
          rounded-3xl
          p-6
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-widest
            font-bold
            text-purple-600
          "
        >

          Avg Daily Scans

        </p>

        <h1
          className="
            text-4xl
            font-bold
            text-slate-900
            mt-4
          "
        >

          {averageScans}

        </h1>

      </div>

    </div>

  </div>
);
};

export default AdvancedAnalytics;
