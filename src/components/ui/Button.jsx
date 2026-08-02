const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const styles = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
    secondary: "bg-gray-700 text-white",
    success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
    danger: "bg-gradient-to-r from-red-500 to-orange-600 text-white",
    warning: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-2xl font-semibold
        shadow-lg transition-all duration-300
        hover:scale-105 hover:shadow-xl
        active:scale-95
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
