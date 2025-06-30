import { useContext, useEffect, useState } from "react";
import { Context as JobsContext } from "contexts/JobsContext";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AlertContext } from "contexts/AlertContext";
import AddNotesModal from "pageComponents/dashboard/AddNotesModal";
import { CircularProgress } from "@mui/material";
import Paginate from "components/Paginate";
import RecentApplicant from "./recent-applicant";

const DashboardRecentApplicants = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [appId, setAppId] = useState("");
  const [data, setData] = useState([]);
  const {
    state: { recent_applications, isLoading, recentApplicationMeta },
    getRecentApplications,
    updateApplication,
    deleteApplication,
    application_remove_from_recent,
  } = useContext(JobsContext);

  const {
    state: { user },
  } = useContext(AuthContext);

  const { showAlert } = useContext(AlertContext);

  const paginate = (page) => {
    getRecentApplications(user.uuid, 1, page, 1, false, "yes");
  };

  useEffect(() => {
    getRecentApplications(user.uuid, 1, false, 1, false, "yes");
  }, [user]);

  useEffect(() => {
    if (recent_applications?.length > 0) {
      let updatedJobs = [];

      for (let index = 0; index < recent_applications.length; index++) {
        const job = recent_applications[index];
        const updatedApplications = [];
        for (let appIndex = 0; appIndex < job.applications.length; appIndex++) {
          const appl = job.applications[appIndex];
          const remove_from_recent_arr = appl?.removed_from_recent ? appl.removed_from_recent.split(',') : [];
          const user_id = '' + user.id;

          if (!remove_from_recent_arr.includes(user_id)) {
            updatedApplications.push(appl);
          }
        }

        const updatedJob = { ...job, applications: updatedApplications };
        updatedJobs.push(updatedJob);
      }

      filterJobApplicants(updatedJobs);
    }
  }, [recent_applications]);

  const filterJobApplicants = (foundJobs) => {
    const filteredJobs = foundJobs.map((job) => {
      if (job?.advisor_id != null && job?.advisor_id != user?.id) {
        var recommendedApplicants = job.applications.filter((application) => application.status == "recommended");
        var updatedJob = { ...job };
        updatedJob.applications = recommendedApplicants;
        return updatedJob;

      }
      return job;
    });
    setData(filteredJobs);
  };

  const setApplicationStatus = (job_id, app_id, status, cb = () => { }) => {
    updateApplication(app_id, { status }, () => {
      let jobIndex = recent_applications.findIndex((job) => job.id == job_id);
      const updatedJob = { ...recent_applications[jobIndex] };
      let updatedApplications = updatedJob.applications;
      let appIndex = updatedApplications.findIndex((app) => app.id == app_id);
      let updatedApp = { ...updatedApplications[appIndex] };
      updatedApp.status = status;
      updatedApplications[appIndex] = updatedApp;
      const updatedData = [...recent_applications];
      updatedData[jobIndex] = { ...updatedJob };
      setData(updatedData);
      showAlert("Creative status change successful");
      cb();

      if (status != "pending") {
        // remove from list
        onRemoveFromRecent(null, { id: app_id });
      }
    });
  };

  const removeApplicationFromList = (app_id) => {
    let updatedJobs = [];

    for (let index = 0; index < data.length; index++) {
      const job = data[index];
      const updatedApplications = [];
      for (let appIndex = 0; appIndex < job.applications.length; appIndex++) {
        const appl = job.applications[appIndex];
        if (appl.id != app_id) {
          updatedApplications.push(appl);
        }
      }

      const updatedJob = { ...job, applications: updatedApplications };
      updatedJobs.push(updatedJob);
    }
    setData(updatedJobs);
  };

  const onRemoveFromRecent = async (e, application) => {
    e?.preventDefault && e.preventDefault();
    application_remove_from_recent(application.id, user.uuid, () => {
      removeApplicationFromList(application.id);
    });
    return false;
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full max-sm:gap-[1.301rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
        <div className="text-white font-bold leading-none max-sm:text-[0.867rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">Recent Applicants</div>
        <AddNotesModal
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          resource_id={appId}
          type="creatives"
        />
        <div className="flex flex-col max-sm:mt-[0.474rem] mt-[0.356rem] md:mt-[0.434rem] xl:mt-[0.474rem] 2xl:mt-[0.5rem] 3xl:mt-[0.667rem] 4xl:mt-[0.889rem]">
          {isLoading ? (
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <CircularProgress />
              <span>Loading ...</span>
            </div>
          ) : (
            <>
              {data.map((item, index) => (
                <div className="applicants-inner flex flex-col" key={index}>
                  {item?.applications?.length > 0 &&
                    item?.applications.map((application, index) => {
                      if (application?.type == "applications") {
                        return (
                          <RecentApplicant key={index} job={item} application={application}
                            setApplicationStatus={setApplicationStatus}
                            onRemoveFromRecent={onRemoveFromRecent}
                            setAppId={setAppId}
                            setOpen={setOpen}
                            isJobExpired={
                              item?.expired_at &&
                              new Date(item?.expired_at) <=
                              Date.parse(new Date().toISOString())
                            }
                            isJobDeleted={
                              item?.deleted_at &&
                              new Date(item?.deleted_at) <
                              Date.parse(new Date().toISOString())
                            }
                          />
                        );
                      }
                      return (<></>);
                    })}
                </div>
              ))}
              {recentApplicationMeta.total > 9 && (
                <Paginate
                  meta={recentApplicationMeta}
                  paginate={paginate}
                  title={"recent applicants"}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardRecentApplicants;
