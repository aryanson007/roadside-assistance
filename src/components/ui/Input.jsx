const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        bg-white
        border
        border-gray-200
        rounded-2xl
        px-5
        py-3.5
        text-gray-700
        shadow-sm
        transition-all
        duration-300
        focus:outline-none
        focus:ring-4
        focus:ring-blue-100
        focus:border-blue-500
        hover:border-blue-300
      "
    />
  );
};

export default Input;