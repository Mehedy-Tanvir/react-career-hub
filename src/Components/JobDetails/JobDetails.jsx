import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/LocalStorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };
  return (
    <div>
      <h2>{job.job_title}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">{job.company_name}</h2>
          <p>{job.job_description}</p>
        </div>
        <div className="border ">
          <h2 className="text-2xl">Side things</h2>
          <button className="w-full btn btn-primary" onClick={handleApplyJob}>
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
