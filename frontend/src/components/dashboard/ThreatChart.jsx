import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

const data = [
  {
    day: "Mon",
    threats: 4
  },
  {
    day: "Tue",
    threats: 7
  },
  {
    day: "Wed",
    threats: 3
  },
  {
    day: "Thu",
    threats: 9
  },
  {
    day: "Fri",
    threats: 5
  },
  {
    day: "Sat",
    threats: 11
  },
  {
    day: "Sun",
    threats: 6
  }
]

const ThreatChart = () => {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-10">

      <h2 className="text-3xl font-bold text-cyan-400">
        Weekly Threat Analytics
      </h2>

      <div className="mt-10 h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis dataKey="day" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="threats"
              stroke="#06b6d4"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default ThreatChart