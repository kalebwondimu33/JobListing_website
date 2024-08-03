import Link from "next/link";
import React from "react";

interface JobType {
  id: string;
  title: string;
  desc: string;
  location: string;
  company: string;
  logo: string;
}

const JobCard = ({ title, desc, location, company, logo, id }: JobType) => {
  return (
    <Link
      href={`/jobs/${id}`}
      className="flex items-start gap-4 mt-5 border p-5 rounded-[30px] justify-center"
    >
      <img src={logo} alt="" />

      <div>
        <h1 className="font-bold text-[#25324B] my-2">{title}</h1>
        <p className="text-[#7C8493] my-2">
          {company} <span>{location}</span>
        </p>
        <p className="text-[#25324B]">{desc}</p>
        <div className="flex gap-2 mt-5 text-sm">
          <p className="bg-[#56CDAD] bg-opacity-10 text-[#56CDAD] py-1 px-2 rounded-full font-semibold">
            In Person
          </p>
          <p className="border border-[#FFB836] bg-opacity-15 text-[#FFB836] py-1 px-2 rounded-full">
            Education
          </p>
          <p className="border border-[#4640DE] bg-opacity-15 text-[#4640DE] py-1 px-5 rounded-full">
            IT
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
