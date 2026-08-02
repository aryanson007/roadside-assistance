const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        shadow-lg
        p-6
        border border-gray-100
        transition-all duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
