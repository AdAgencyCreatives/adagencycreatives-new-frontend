import PaginationLeftArrowIcon from "icons/PaginationLeftArrowIcon";
import PaginationRightArrowIcon from "icons/PaginationRightArrowIcon";
import PaginateWithEllipsis from "./PaginateWithEllipsis";
import PaginateNormal from "./PaginateNormal";

const Paginate = ({ meta, paginate, title }) => {

    const pagination_style = "ellipsis"; // default: normal

    return pagination_style == "ellipsis" ? (
        <PaginateWithEllipsis meta={meta} paginate={paginate} title={title} />
    ) : (
        <PaginateNormal meta={meta} paginate={paginate} title={title} />
    );
};
export default Paginate;