const MechanicSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mt-6">


      <div className="
      bg-white
      rounded-2xl
      shadow-md
      px-5
      py-3
      flex
      items-center
      gap-3
      focus-within:ring-2
      focus-within:ring-blue-500
      ">


        <span className="text-2xl">
          🔍
        </span>



        <input

          type="text"

          placeholder="Search mechanics, services..."

          value={searchTerm}

          onChange={(e) => setSearchTerm(e.target.value)}

          className="
          w-full
          outline-none
          bg-transparent
          text-gray-700
          "

        />


      </div>


    </div>
  );
};


export default MechanicSearch;