import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data.slice(0, 4)))
    },[])

    return (
        <div className="mx-36 mt-20">
            <div className="text-center mb-4">
                <h1 className="mb-3 text-4xl font-bold">Featured Jobs</h1>
                <p className="text-xs text-dark-3 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {
                    jobs.map(job => <FeatureCard key={job.id} job={job} />)
                }
            </div>
            <div className="my-5 text-center">
                <button className="btn px-5 py-3 rounded-md text-white font-semibold">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeatureJobs;