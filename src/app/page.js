import { JobList } from "@/components/JobList";
import { Header } from "../components/Header";


export default function Home() {

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Header />
      </div>
      <div className="m-10">
      <JobList/>
      </div>
    </div>
  );
}
