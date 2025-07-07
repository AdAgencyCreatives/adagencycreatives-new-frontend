'use client';

const useJobStatusHelper = () => {

    const getStatusName = (jobStatus) => {
        let result = "N/A";
        if (jobStatus == "pending") {
            result = "Pending";
        } else if (jobStatus == "approved") {
            result = "Approved";
        } else if (jobStatus == "rejected") {
            result = "Rejected";
        } else if (jobStatus == "expired") {
            result = "Expired";
        } else if (jobStatus == "filled") {
            result = "Closed";
        } else if (jobStatus == "draft") {
            result = "Draft";
        } else if (jobStatus == "published") {
            result = "Published";
        }
        return result;
    };

    const getStatusBadge = (jobStatus) => {
        let result = "badge bg-";
        if (jobStatus == "pending") {
            result += "pending";
        } else if (jobStatus == "accepted") {
            result += "interested";
        } else if (jobStatus == "rejected") {
            result += "not-aligned";
        } else if (jobStatus == "archived") {
            result += "not-aligned";
        } else if (jobStatus == "recommended") {
            result += "recommended";
        } else if (jobStatus == "shortlisted") {
            result += "shortlisted";
        } else if (jobStatus == "hired") {
            result += "hired";
        } else {
            result += "secondary";
        }
        return result;
    };

    return {
        getStatusName,
        getStatusBadge
    };
}

export default useJobStatusHelper;