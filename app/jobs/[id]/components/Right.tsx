import React from "react";
import DateComp from "./DateComp";
import { About } from "@/types/job";
import {
  AnotherCalendar,
  CalendarIcon,
  FireIcon,
  LocationIcon,
  PlusIcon,
} from "@/lib/icons";

interface AboutProp {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

const Right = ({
  posted_on,
  deadline,
  location,
  start_date,
  end_date,
  categories,
  required_skills,
}: AboutProp) => {
  return (
    <div className="font-paras">
      <div className="mb-5">
        <h1 className="header">About</h1>
        <DateComp text={"Posted On"} date={posted_on} icon={PlusIcon} />
        <DateComp text={"Deadline"} date={deadline} icon={FireIcon} />
        <DateComp text={"Location"} date={location} icon={LocationIcon} />
        <DateComp text={"Start Date"} date={start_date} icon={CalendarIcon} />
        <DateComp text={"End Date"} date={end_date} icon={AnotherCalendar} />
      </div>

      <div className="mb-5">
        <h1 className="header">Categories</h1>
        <div className="flex text-sm mt-3 gap-2">
          {categories.map((catagory, i) => (
            <p
              className={`bg-[#FFB836] bg-opacity-15 text-[#FFB836] py-1 px-2 rounded-full`}
            >
              {catagory}
            </p>
          ))}
          {/* <p
            className={`bg-[#56CDAD] bg-opacity-15 text-[#56CDAD] py-1 px-2 rounded-full`}
          >
            Design
          </p> */}
        </div>
      </div>

      <div>
        <h1 className="header">Required Skills</h1>
        <div className="flex flex-wrap gap-2 mt-3">
          {required_skills.map((required_skill) => (
            <p className="text-[#4640DE] bg-[#4640DE] bg-opacity-5 rounded p-2">
              {required_skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Right;
