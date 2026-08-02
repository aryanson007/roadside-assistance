const StatCard = ({
  icon,
  title,
  value,
}) => {

  return (

    <div
      className="
        bg-white
        rounded-3xl
        shadow-lg
        p-6
        border
        border-gray-100
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >


      <div className="
        flex
        justify-between
        items-start
      ">


        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-blue-100
            flex
            items-center
            justify-center
            text-3xl
          "
        >

          {icon}

        </div>



        <div
          className="
            w-8
            h-8
            rounded-full
            bg-blue-50
            flex
            items-center
            justify-center
            text-blue-600
          "
        >

          ↗

        </div>


      </div>





      <h3
        className="
          mt-6
          text-gray-500
          font-medium
          text-sm
          uppercase
          tracking-wide
        "
      >

        {title}

      </h3>




      <p
        className="
          text-4xl
          font-extrabold
          text-gray-800
          mt-2
        "
      >

        {value}

      </p>




    </div>

  );

};


export default StatCard;