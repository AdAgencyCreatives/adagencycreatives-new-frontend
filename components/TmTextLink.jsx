import Link from "next/link";
import TmText from "./TmText";

const TmTextLink = ({text="", href="/", className="", tmClassName=""}) => {
    return (
        <Link href={href} className={className}>
            <TmText text={text} className={tmClassName} />
        </Link>
    );
};

export default TmTextLink;