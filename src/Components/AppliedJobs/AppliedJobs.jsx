import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div className="">
      <h2 className="text-2xl">
        Jobs I applied:
        {appliedJobs.length}
      </h2>
      <details className="mb-32 dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {appliedJobs.map((job, idx) => (
          <li key={idx}>
            {idx + 1}. {job.job_title} - {job.company_name} (
            {job.remote_or_onsite})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
