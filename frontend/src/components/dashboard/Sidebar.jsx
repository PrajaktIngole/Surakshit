const Sidebar = () => {

  return (

    <div className="w-[260px] bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-cyan-400">
        Surakshit
      </h1>

      <div className="mt-12 flex flex-col gap-5">

        <button className="text-left bg-cyan-500 p-4 rounded-xl font-semibold">
          Dashboard
        </button>

        <button className="text-left hover:bg-slate-800 p-4 rounded-xl">
          Threat Analysis
        </button>

        <button className="text-left hover:bg-slate-800 p-4 rounded-xl">
          Privacy Score
        </button>

        <button className="text-left hover:bg-slate-800 p-4 rounded-xl">
          Reports
        </button>

        <button className="text-left hover:bg-slate-800 p-4 rounded-xl">
          Settings
        </button>

      </div>

    </div>
  )
}

export default Sidebar