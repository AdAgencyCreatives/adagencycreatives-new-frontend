import { useState, useEffect, useContext, use } from "react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { Context as SiteContext } from "contexts/SiteContext";
import { IoClose, IoInformationCircle, IoCheckmarkCircle } from "react-icons/io5";

const AnimatedAlert = ({
  type,
  title,
  message,
  autoDismiss = false,
  dismissTime = 5000,
  onClose = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const baseClasses = [
    "max-sm:w-[75%] md:min-w-[500px] md:max-w-[40%] flex items-start p-4 transition-opacity duration-300 outline outline-[#6E6E6E] rounded-[36px]",
    "max-sm:rounded-[0.5rem] rounded-[0.8rem] md:rounded-[0.976rem] xl:rounded-[1.067rem] 2xl:rounded-[1.125rem] 3xl:rounded-[1.5rem] 4xl:rounded-[2rem]",
    "max-sm:p-[0.25rem] p-[0.45rem] md:p-[0.549rem] xl:p-[0.6rem] 2xl:p-[0.633rem] 3xl:p-[0.844rem] 4xl:p-[1.125rem]"
  ].join(' ');
  const typeClasses = {
    error: "bg-black text-white",
    success: "bg-black text-white",
  };

  const icons = {
    error: <IoInformationCircle />,
    success: <IoCheckmarkCircle />
  };

  const { setBodyOverflowHidden } = useContext(SiteContext);

  const { hideAnimatedAlert } = useContext(AnimatedAlertContext);

  const handleDismiss = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setBodyOverflowHidden(false);
      setIsVisible(false);
      hideAnimatedAlert();
      onClose();
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

  useEffect(() => {
    setBodyOverflowHidden(true);
  }, []);

  if (!isVisible) return <></>;

  return (
    <div className="fixed flex flex-row justify-center items-center w-screen h-screen z-999999">
      <div className="absolute flex flex-row justify-center items-center w-screen h-screen z-0 bg-gray/30 backdrop-blur-[5px]"></div>
      <div className="flex flex-row justify-center items-center w-screen h-screen z-1">
        <div
          className={`${baseClasses} ${typeClasses[type]} ${isAnimatingOut ? "opacity-0" : "opacity-100"
            }`}
          role="alert"
        >
          <span className="max-sm:text-[1.25rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem]">
          {icons[type]}
          </span>
          <div className="flex-grow max-sm:mt-[1.067rem] mt-[1.067rem] md:mt-[1.301rem] xl:mt-[1.423rem] 2xl:mt-[1.5rem] 3xl:mt-[2rem] 4xl:mt-[2.667rem] max-sm:mb-[1.067rem] mb-[1.067rem] md:mb-[1.301rem] xl:mb-[1.423rem] 2xl:mb-[1.5rem] 3xl:mb-[2rem] 4xl:mb-[2.667rem]">
            {title && <div className="text-center text-primary font-bold max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem] max-sm:mb-[1.25rem] mb-[1.422rem] md:mb-[1.735rem] xl:mb-[1.897rem] 2xl:mb-[2rem] 3xl:mb-[2.667rem] 4xl:mb-[3.556rem]">{title}</div>}
            {message && <div className="font-bold max-sm:text-[0.759rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem]">{message}</div>}
          </div>
          <button
            onClick={handleDismiss}
            className="ml-2 text-current hover:text-primary max-sm:text-[1.25rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem]"
            aria-label="Close"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAlert;
