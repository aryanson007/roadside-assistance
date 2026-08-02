const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;


  return (

    <div
      className="
        fixed
        inset-0
        bg-black/50
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
        p-4
      "
      onClick={onClose}
    >


      <div
        className="
          bg-white
          rounded-3xl
          shadow-2xl
          w-full
          max-w-xl
          p-8
          relative
          animate-in
          fade-in
          zoom-in
          duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >



        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-5
            w-10
            h-10
            rounded-full
            bg-gray-100
            text-gray-500
            text-2xl
            hover:bg-red-100
            hover:text-red-600
            transition
          "
        >
          ×
        </button>



        {children}



      </div>


    </div>

  );

};


export default Modal;