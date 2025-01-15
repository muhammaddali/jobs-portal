import { Header } from "../components/Header";
import { JobCard } from "../components/JobCard";
import data from '../../data.json'; 

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Header />
      </div>
      <div className="m-10">
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
      </div>
    </div>
  );
}
