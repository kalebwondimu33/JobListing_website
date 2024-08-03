import React from "react";
import JobCard from "./JobCard";
import fs from "fs";
import path from "path";
import { Job } from "@/types/job";

const getJobs = async (): Promise<Job[] | undefined> => {
  const filePath = path.join(process.cwd(), "lib", "jobs.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const jobs = JSON.parse(jsonData);
  const currJobs: Job[] = jobs.job_postings;
  return currJobs;
};

const Listings = async () => {
  const jobs = await getJobs();

  return (
    <div className="w-[60%] pl-24 py-8  font-paras">
      <div className="flex justify-between">
        <div>
          <h1 className="header">Opportunities</h1>
          <p className="text-[#7C8493]">Showing {jobs?.length} results</p>
        </div>

        <div className="flex items-center gap-2 ">
          <p className="text-[#7C8493] cursor-pointer">
            Sort by:{" "}
            <span className="text-[#25324B] font-semibold">Most relevant</span>
          </p>
          <img className="w-4 h-4 cursor-pointer" src="/dropdown.png" alt="" />
        </div>
      </div>

      <div>
        {jobs?.map((job) => (
          <JobCard
            id={job.id}
            key={job.id}
            title={job.title}
            desc={job.description}
            location={job.about.location}
            company={job.company}
            logo={job.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Listings;
