import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import StatCard from "../components/dashboard/StatCard";
import ThreatChart from "../components/dashboard/ThreatChart";
import ThreatScanner from "../components/dashboard/ThreatScanner";
import ThreatHistory from "../components/dashboard/ThreatHistory";

import AdvancedAnalytics from "../components/dashboard/AdvancedAnalytics";

import RecentThreats from "../components/dashboard/RecentThreats";

import API from "../services/api";
import Navbar from "@/components/dashboard/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const [stats, setStats] = useState({
    totalScans: 0,

    dangerousScans: 0,

    safeScans: 0,

    privacyScore: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await API.get(`/threat/stats/${email}`);

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");

    navigate("/");
  };

  // return (
  //   <div className="flex bg-[#f5f7fb] text-slate-900 min-h-screen">
  //     {/* Main Content */}
  //     <div className="flex-1">
  //       {/* Navbar */}
  //       <Navbar />

  //       {/* CONTENT SECTION */}

  //       <div
  //         className="
  //   px-4
  //   sm:px-6
  //   lg:px-10
  //   py-8
  // "
  //       >
  //         {/* HEADER */}

  //         <div
  //           className="
  //     flex
  //     flex-col
  //     xl:flex-row
  //     xl:items-center
  //     xl:justify-between
  //     gap-6
  //   "
  //         >
  //           {/* LEFT SIDE */}

  //           <div className="flex-1">
  //             <div
  //               className="
  //         flex
  //         flex-wrap
  //         items-center
  //         gap-3
  //       "
  //             >
  //               <h1
  //                 className="
  //           text-2xl
  //           sm:text-3xl
  //           lg:text-4xl
  //           font-bold
  //           text-slate-900
  //           leading-tight
  //         "
  //               >
  //                 System Audit Dashboard
  //               </h1>

  //               <span
  //                 className="
  //           bg-violet-100
  //           text-violet-700
  //           text-[10px]
  //           sm:text-xs
  //           font-bold
  //           px-3
  //           sm:px-4
  //           py-1.5
  //           rounded-full
  //           tracking-wide
  //           whitespace-nowrap
  //         "
  //               >
  //                 ACTIVE MONITORING
  //               </span>
  //             </div>

  //             <p
  //               className="
  //         text-slate-500
  //         mt-4
  //         max-w-2xl
  //         text-sm
  //         sm:text-base
  //         leading-relaxed
  //       "
  //             >
  //               Surakshit multi-layered endpoint security auditing framework.
  //               Real-time protection, passive threat scans, phishing detection,
  //               and local privacy monitoring designed for secure browsing.
  //             </p>
  //           </div>

  //           {/* RIGHT SIDE */}

  //           <div
  //             className="
  //       grid
  //       grid-cols-1
  //       sm:grid-cols-2
  //       gap-4
  //       w-full
  //       xl:w-auto
  //     "
  //           >
  //             {/* THREAT STATUS */}

  //             <div
  //               className="
  //         bg-white
  //         border
  //         border-slate-200
  //         rounded-2xl
  //         px-5
  //         py-4
  //         shadow-sm
  //         min-w-[160px]
  //       "
  //             >
  //               <p
  //                 className="
  //           text-slate-400
  //           text-xs
  //           uppercase
  //           tracking-widest
  //           font-semibold
  //         "
  //               >
  //                 Threat Status
  //               </p>

  //               <h2
  //                 className="
  //           text-green-500
  //           text-xl
  //           sm:text-2xl
  //           font-bold
  //           mt-2
  //         "
  //               >
  //                 Protected
  //               </h2>
  //             </div>

  //             {/* LIVE ENGINE */}

  //             <div
  //               className="
  //         bg-white
  //         border
  //         border-slate-200
  //         rounded-2xl
  //         px-5
  //         py-4
  //         shadow-sm
  //         min-w-[160px]
  //       "
  //             >
  //               <p
  //                 className="
  //           text-slate-400
  //           text-xs
  //           uppercase
  //           tracking-widest
  //           font-semibold
  //         "
  //               >
  //                 Live Engine
  //               </p>

  //               <div
  //                 className="
  //           flex
  //           items-center
  //           gap-2
  //           mt-3
  //         "
  //               >
  //                 <div
  //                   className="
  //             w-3
  //             h-3
  //             rounded-full
  //             bg-green-500
  //             animate-pulse
  //           "
  //                 />

  //                 <span
  //                   className="
  //             text-slate-800
  //             font-semibold
  //             text-sm
  //             sm:text-base
  //           "
  //                 >
  //                   Running
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Stats */}
  //       <div
  //         className="
  //   px-4
  //   sm:px-6
  //   lg:px-10

  //   grid
  //   grid-cols-1
  //   sm:grid-cols-2
  //   xl:grid-cols-5
  //   gap-6
  //   mt-12
  // "
  //       >
  //         {/* PRIVACY SCORE */}

  //         <StatCard
  //           title="Privacy Score"
  //           value={`${stats.privacyScore.toFixed(1)}%`}
  //           color="text-violet-500"
  //           progressColor="bg-violet-500"
  //           subtitle="Shield Protection Active"
  //         />

  //         {/* WEBSITE SCANNED */}

  //         <StatCard
  //           title="Websites Scanned"
  //           value={stats.totalScans}
  //           color="text-indigo-500"
  //           progressColor="bg-indigo-500"
  //           subtitle="Surakshit Engine Core"
  //         />

  //         {/* DANGEROUS SITES */}

  //         <StatCard
  //           title="Dangerous Sites"
  //           value={stats.dangerousScans}
  //           color="text-red-500"
  //           progressColor="bg-red-500"
  //           subtitle="Requires Mitigation"
  //         />

  //         {/* SAFE BROWSING */}

  //         <StatCard
  //           title="Safe Browsing"
  //           value={`${stats.privacyScore.toFixed(1)}%`}
  //           color="text-purple-500"
  //           progressColor="bg-purple-500"
  //           subtitle="Browsing Guard Active"
  //         />

  //         {/* RISK LEVEL */}

  //         <StatCard
  //           title="Risk Level"
  //           value={
  //             stats.privacyScore > 80
  //               ? "Low"
  //               : stats.privacyScore > 50
  //                 ? "Medium"
  //                 : "High"
  //           }
  //           color={
  //             stats.privacyScore > 80
  //               ? "text-green-500"
  //               : stats.privacyScore > 50
  //                 ? "text-yellow-500"
  //                 : "text-red-500"
  //           }
  //           progressColor={
  //             stats.privacyScore > 80
  //               ? "bg-green-500"
  //               : stats.privacyScore > 50
  //                 ? "bg-yellow-500"
  //                 : "bg-red-500"
  //           }
  //           subtitle="Dynamic Host Evaluation"
  //         />
  //       </div>

  //       <ThreatScanner />

  //       {/* Threat Section */}
  //       <div className="px-10">
  //         <div
  //           className="
  //   px-4
  //   sm:px-6
  //   lg:px-10
  // "
  //         >
  //           <RecentThreats />
  //         </div>
  //       </div>

  //       {/* <ThreatChart /> */}

  //       <AdvancedAnalytics />

  //       <ThreatHistory />
  //     </div>
  //   </div>
  // );

  return (
    <div
      className="
      min-h-screen
      bg-[#f6f7fb]
    "
    >
      {/* NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <div
        className="
        px-4
        sm:px-6
        lg:px-10

        py-8

        space-y-10
      "
      >
        {/* HERO SECTION */}

        <div
          className="
          flex
          flex-col
          xl:flex-row

          xl:items-center
          xl:justify-between

          gap-8
        "
        >
          {/* LEFT */}

          <div className="flex-1">
            <div
              className="
              flex
              flex-wrap
              items-center
              gap-3
            "
            >
              <h1
                className="
                text-3xl
                sm:text-4xl
                font-bold
                text-slate-900
              "
              >
                System Audit Dashboard
              </h1>

              <span
                className="
                bg-violet-100
                text-violet-700

                text-xs
                font-bold

                px-4
                py-2

                rounded-full
              "
              >
                ACTIVE MONITORING
              </span>
            </div>

            <p
              className="
              mt-4
              text-slate-500
              max-w-2xl

              leading-relaxed

              text-sm
              sm:text-base
            "
            >
              Surakshit multi-layered endpoint security framework with phishing
              detection, real-time monitoring, and threat analytics.
            </p>
          </div>

          {/* RIGHT */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            w-full
            xl:w-auto
          "
          >
            {/* STATUS */}

            <div
              className="
              bg-white
              border
              border-slate-200

              rounded-3xl

              px-6
              py-5

              shadow-sm
            "
            >
              <p
                className="
                text-xs
                uppercase
                tracking-widest
                text-slate-400
                font-semibold
              "
              >
                Threat Status
              </p>

              <h2
                className="
                mt-3
                text-2xl
                font-bold
                text-green-500
              "
              >
                Protected
              </h2>
            </div>

            {/* LIVE ENGINE */}

            <div
              className="
              bg-white
              border
              border-slate-200

              rounded-3xl

              px-6
              py-5

              shadow-sm
            "
            >
              <p
                className="
                text-xs
                uppercase
                tracking-widest
                text-slate-400
                font-semibold
              "
              >
                Live Engine
              </p>

              <div
                className="
                flex
                items-center
                gap-3
                mt-3
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

                <span
                  className="
                  text-lg
                  font-semibold
                  text-slate-800
                "
                >
                  Running
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* STAT CARDS */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-5

          gap-6
        "
        >
          <StatCard
            title="Privacy Score"
            value={`${stats.privacyScore.toFixed(1)}%`}
            color="text-violet-500"
            progressColor="bg-violet-500"
            subtitle="Shield Protection Active"
            progress={stats.privacyScore}
          />

          <StatCard
            title="Websites Scanned"
            value={stats.totalScans}
            color="text-indigo-500"
            progressColor="bg-indigo-500"
            subtitle="Surakshit Engine Core"
            progress={
              stats.totalScans > 0 ? Math.min(stats.totalScans * 10, 100) : 5
            }
          />

          <StatCard
            title="Dangerous Sites"
            value={stats.dangerousScans}
            color="text-red-500"
            progressColor="bg-red-500"
            subtitle="Requires Mitigation"
            progress={
              stats.dangerousScans > 0
                ? Math.min(stats.dangerousScans * 20, 100)
                : 2
            }
          />

          <StatCard
            title="Safe Browsing"
            value={`${stats.privacyScore.toFixed(1)}%`}
            color="text-purple-500"
            progressColor="bg-purple-500"
            subtitle="Browsing Guard Active"
            progress={stats.privacyScore}
          />

          <StatCard
            title="Risk Level"
            value={
              stats.privacyScore > 80
                ? "Low"
                : stats.privacyScore > 50
                  ? "Medium"
                  : "High"
            }
            color={
              stats.privacyScore > 80
                ? "text-green-500"
                : stats.privacyScore > 50
                  ? "text-yellow-500"
                  : "text-red-500"
            }
            progressColor={
              stats.privacyScore > 80
                ? "bg-green-500"
                : stats.privacyScore > 50
                  ? "bg-yellow-500"
                  : "bg-red-500"
            }
            subtitle="Dynamic Host Evaluation"
            progress={stats.privacyScore}
          />
        </div>

        {/* THREAT SCANNER */}

        <ThreatScanner />

        {/* RECENT THREATS */}

        <RecentThreats />

        {/* ANALYTICS */}

        <AdvancedAnalytics />

        {/* HISTORY */}

        <ThreatHistory />
      </div>
    </div>
  );
};

export default Dashboard;
