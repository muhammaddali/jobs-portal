'use client';
import React, { useState } from 'react'
import { JobCard } from './JobCard'
import data from '../../data.json';

export const JobList = () => {

   const [filteredJob, setFilteredJobs] = useState({languages:[], tools:[]})
   
    return (
        <>

            {data.map((job) => (
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
                />
            ))}
        </>
    )
}
