import { Header } from "@/components/Header";
import { JobCard } from "@/components/JobCard";

export default function Home() {
  return (
  
  <div className="flex flex-col items-center">
    <div className="w-full">
     <Header/>
    </div>

    <div className="m-10">
    <JobCard/>
    </div>
  </div>

   
  );
}
