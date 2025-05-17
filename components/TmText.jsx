import Link from "next/link";

const TmText = ({ text = "", className = "" }) => {

    return (
        <span className="tm-text-container">
            <span className="leading-none">{text}</span>
            <span className={`font-inter inline-flex items-start leading-none tm-text ${className}`}>TM</span>
        </span>
    );
};

export default TmText;