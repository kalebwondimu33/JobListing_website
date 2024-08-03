import fs from "fs";
import path from "path";
import { Job } from "@/types/job";
import { notFound } from "next/navigation";
import Left from "./components/Left";
import Right from "./components/Right";

interface JobPost {
  params: { id: string };
}

const getJobData = async (id: string): Promise<Job | undefined> => {
  const filePath = path.join(process.cwd(), "lib", "jobs.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const jobs = JSON.parse(jsonData);
  const currJob: Job[] = jobs.job_postings;
  return currJob.find((job) => job.id === id);
};

const JobPost = async ({ params }: JobPost) => {
  const { id } = params;
  const job = await getJobData(id);
  if (job) {
    const {
      description,
      responsibilities,
      ideal_candidate,
      when_where,
      about,
      title,
    } = job;

    const {
      posted_on,
      deadline,
      location,
      start_date,
      end_date,
      categories,
      required_skills,
    } = about;

    console.log(about);

    return (
      <div className="grid grid-cols-4 py-8">
        <div className="col-span-3">
          <Left
            title={title}
            desc={description}
            responsibilities={responsibilities}
            ideal_candidate={ideal_candidate}
            when_where={when_where}
          />
        </div>

        <div className="col-span-1">
          <Right
            posted_on={posted_on}
            deadline={deadline}
            location={location}
            start_date={start_date}
            end_date={end_date}
            categories={categories}
            required_skills={required_skills}
          />
        </div>
      </div>
    );
  } else {
    return <h1>No Page Found</h1>;
  }
};

export default JobPost;
