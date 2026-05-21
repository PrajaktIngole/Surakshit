const StatCard = ({
  title,
  value,
  color,
  progressColor,
  subtitle,
  progress,
}) => {

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-lg hover:-translate-y-1
        transition-all
        duration-300
        min-h-[150px]
        flex
        flex-col
        justify-between
      "
    >

      {/* TITLE */}

      <p
        className="
          text-slate-500
          uppercase
          tracking-wide
          text-xs
          font-bold
        "
      >

        {title}

      </p>

      {/* VALUE */}

      <div className="mt-4">

        <h1
          className={`
            text-3xl
            sm:text-3xl
            font-bold
            ${color}
          `}
        >

          {value}

        </h1>

      </div>

      {/* FOOTER */}

      <div className="mt-6">

        {/* PROGRESS BAR */}

        <div
          className="
            w-full
            h-1.5
            bg-slate-100
            rounded-full
            overflow-hidden
          "
        >

          <div
            className={`
              h-full
              rounded-full
              ${progressColor}
            `}
            style={{
              width: `${progress}%`
            }}
          />

        </div>

        {/* SUBTITLE */}

        <p
          className="
            mt-4
            text-[11px]
            uppercase
            tracking-wide
            font-semibold
            text-slate-400
          "
        >

          {subtitle}

        </p>

      </div>

    </div>
  );
};

export default StatCard;