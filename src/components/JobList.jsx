'use client';
import React, { useState } from 'react'
import { JobCard } from './JobCard'
import data from '../../data.json';

export const JobList = () => {

    const [filters, setFilters] = useState([])
    const [filteredJobs, setFilteredJobs] = useState(data)


    //FUnctions for Filtering Jobs
    const handleFilteredClick =(filter)=>{
        if(!filters.includes(filter)){
            const updatedFilters = [...filters, filter]
            setFilters(updatedFilters)

            const filteredData = data.filter(job=>
                updatedFilters.every(f=>
                    job.languages.includes(f)||
                    job.role === f ||
                    job.tools.includes(f) ||
                    job.level === f
                )

            )
            setFilteredJobs(filteredData)
        }
        
    }


    return (
        <>

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
        </>
    )
}
