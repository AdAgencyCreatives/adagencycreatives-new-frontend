import { useState, useEffect, useContext } from "react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";

const AnimatedAlert = ({
  type,
  title,
  message,
  autoDismiss = false,
  dismissTime = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const baseClasses = "flex items-start p-4 transition-opacity duration-300";
  const typeClasses = {
    error: "bg-red-100 border-l-4 border-red-500 text-red-700",
    success: "bg-green-100 border-l-4 border-green-500 text-green-700",
  };

  const icons = {
    error: (
      <ExclamationCircleIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
    ),
    success: <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />,
  };

  const { hideAnimatedAlert } = useContext(AnimatedAlertContext);

  const handleDismiss = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      hideAnimatedAlert();
    }, 300);
  };

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, dismissTime);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissTime]);

  if (!isVisible) return <></>;

  return (
    <div className="absolute flex flex-row justify-center items-center w-screen h-screen z-999999">
      <div
        className={`min-w-lg ${baseClasses} ${typeClasses[type]} ${
          isAnimatingOut ? "opacity-0" : "opacity-100"
        }`}
        role="alert"
      >
        {icons[type]}
        <div className="flex-grow">
          {title && <p className="text-[24px] font-bold mb-4">{title}</p>}
          {message && <p className="text-[18px]">{message}</p>}
        </div>
        <button
          onClick={handleDismiss}
          className="ml-2 text-current hover:text-opacity-75"
          aria-label="Close"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AnimatedAlert;
