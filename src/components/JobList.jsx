"use client";
import React, { useState } from "react";
import { JobCard } from "./JobCard";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const JobList = () => {
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(data);

  //Functions for Filtering Jobs

  //Filter Jobs
  const handleFilteredClick = (filter) => {
    if (!filters.includes(filter)) {
      const updatedFilters = [...filters, filter];
      setFilters(updatedFilters);

      const filteredData = data.filter((job) =>
        updatedFilters.every(
          (f) =>
            job.languages.includes(f) ||
            job.role === f ||
            job.tools.includes(f) ||
            job.level === f
        )
      );
      setFilteredJobs(filteredData);
    }
  };

  //Remove Explicit Job Filter
  const removeFilter = (filter) => {
    const remainingFilters = filters.filter((f) => f !== filter);
    setFilters(remainingFilters);

    const remainingFilteredData = data.filter((job) =>
      remainingFilters.every(
        (f) =>
          job.languages.includes(f) ||
          job.role === f ||
          job.tools.includes(f) ||
          job.level === f
      )
    );
    setFilteredJobs(remainingFilteredData);
  };

  //Clear All Filters
  const clearFilters = () => {
    setFilteredJobs(data);
    setFilters([]);
  };

  return (
    <>
      {filters.length > 0 && (
        <div className="absolute ">
          <div className="flex flex-wrap gap-2 rounded p-3 w-[318px] sm:w-[690px] md:w-[690px] lg:w-[950px] xl:w-[1090px] mt-[-90px]  bg-white">
            {filters.map((filter, index) => (
              <span
                key={index}
                className="badgeBg badgeText px-3 pb-0 pt-0 pr-0 py-1 rounded-md text-sm font-bold flex gap-1"
              >
                {filter}{" "}
                <button
                  onClick={() => removeFilter(filter)}
                  className="w-6 h-6 flex ml-2 items-center justify-center bg-teal-500 text-white rounded-md cusHover"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-sm " />
                </button>
              </span>
            ))}

            <button
              onClick={clearFilters}
              className="flex ml-auto font-bold greyText"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      <div>
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            company={job.company}
            logo={job.logo}
            New={job.new ? "New" : null}
            Featured={job.featured ? "Featured" : null}
            position={job.position}
            level={job.level}
            role={job.role}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            onClickFilter={handleFilteredClick}
          />
        ))}
      </div>
    </>
  );
};
