import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("email");

    localStorage.removeItem("name");

    navigate("/");
  };

  return (
    <nav
      className="
    w-full
    bg-white
    border-b
    border-slate-200

    px-4
    sm:px-6
    lg:px-8

    py-4

    flex
    flex-col
    sm:flex-row

    sm:items-center
    sm:justify-between

    gap-5
  "
    >
      {/* LEFT SIDE */}

      <div
        className="
    flex

    flex-row

    items-center

    gap-4

    w-full
  "
      >
        {/* LOGO */}

        <div
          className="
            w-12
            h-12
            sm:w-14
            sm:h-14
            rounded-2xl
            bg-gradient-to-br
            from-violet-500
            to-indigo-600
            flex
            items-center
            justify-center
            text-white
            text-2xl
            font-bold
            shadow-lg
          "
        >
          S
        </div>

        {/* TEXT */}

        <div>
          <div
            className="
              flex
              items-center
              gap-2
              flex-wrap
            "
          >
            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-slate-900
              "
            >
              Surakshit
            </h1>

            <span
              className="
                bg-violet-100
                text-violet-700
                text-[10px]
                sm:text-xs
                font-bold
                px-3
                py-1
                rounded-full
                tracking-wide
              "
            >
              SHIELD ACTIVE
            </span>
          </div>

          <p
            className="
              text-slate-500
              text-sm
              mt-1
            "
          >
            Operator: {name}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <button
        onClick={handleLogout}
        className="
    w-full
    sm:w-auto

    bg-slate-100
    hover:bg-slate-200

    text-slate-700
    font-semibold

    px-4
    sm:px-6

    py-3

    rounded-2xl

    transition-all
    duration-300

    shadow-sm
  "
      >
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
