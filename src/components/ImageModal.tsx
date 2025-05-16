import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  image: string;
  alt?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  image,
  alt,
  children,
  className,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-3 py-8 bg-black/70 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className={`relative bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-200 w-[80%] h-[70%] max-w-[90vw] max-h-[90vh] ${className || ""}`}
        style={{
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          margin: "auto",
          position: "relative",
        }}
      >
        {/* Image Section with blurred background */}
        <div
          className="md:w-2/5 relative flex-shrink-0 flex items-center justify-center h-56 md:h-auto p-4 overflow-hidden"
        >
          {/* Blurred background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(20px)",
              zIndex: 0,
            }}
          />
          {/* Main image */}
          <img
            src={image}
            alt={alt || title}
            className="relative z-10 object-contain max-h-full max-w-full rounded-lg shadow"
          />
        </div>

        {/* Content Section */}
        <div
          className="relative flex-1 flex flex-col justify-start px-6 py-7 md:p-8 overflow-y-auto"
          style={{ scrollBehavior: "smooth" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:bg-gray-100 transition rounded-full p-2"
            aria-label="Close"
            type="button"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold text-advizo-blue mb-4">{title}</h3>
          <div
            ref={contentRef}
            className="prose max-w-none text-gray-700 mb-4 transition-all duration-400 overflow-y-auto pr-2"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
