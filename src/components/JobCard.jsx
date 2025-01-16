import React from "react";
import Image from "next/image";
import { Tags } from "./Tags";
import { Badges } from "./Badges";

export const JobCard = ({ job, onClickFilter }) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages = [],
    tools = [],
  } = job;

  const badges = [];
  if (isNew) badges.push("New");
  if (featured) badges.push("Featured");

  return (
    <>
      <div className="max-w-6xl rounded overflow-hidden shadow-lg bg-white flex flex-col md:flex-row justify-between p-4 sm:gap-3 md:gap-72 mb-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <Image //Logo
            className="rounded-full w-16 h-16 object-cover mt-3 ml-4"
            src={logo}
            alt="Company's Logo"
            width={64}
            height={64}
          />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-[#5CA5A5]">
              <h3 className="font-semibold">{company}</h3>
              {badges.length > 0 && <Badges badges={badges} />}
            </div>

            <h2 className="text-xl font-bold mb-1">{position}</h2>

            <div className="flex flex-wrap gap-3 text-[#7C8F8F] font-semibold text-sm">
              <h4>{postedAt}</h4>
              <h4>{contract}</h4>
              <h4>{location}</h4>
            </div>
          </div>
        </div>

        {/* On Mobile Screen, Line */}
        <hr className="md:hidden my-4 border-gray-500" />

        {/* Tags */}
        <div
          className="flex flex-wrap justify-start md:justify-end gap-3 items-center "
          style={{ cursor: "pointer" }}
        >
          <Tags tags={[role, level]} onClickFilter={onClickFilter} />
          <Tags tags={languages} onClickFilter={onClickFilter} />
          <Tags tags={tools} onClickFilter={onClickFilter} />
        </div>
      </div>
    </>
  );
};
