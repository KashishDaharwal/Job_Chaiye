// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../../main";

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const { isAuthorized } = useContext(Context);
//   const navigateTo = useNavigate();
//   useEffect(() => {
//     try {
//       axios
//         .get("http://localhost:4000/api/v1/job/getall", {
//           withCredentials: true,
//         })
//         .then((res) => {
//           setJobs(res.data);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   if (!isAuthorized) {
//     navigateTo("/");
//   }

//   return (
//     <section className="jobs page">
//       <div className="container">
//         <h1>ALL AVAILABLE JOBS</h1>
//         <div className="banner">
//           {jobs.jobs &&
//             jobs.jobs.map((element) => {
//               return (
//                 <div className="card" key={element._id}>
//                   <p>{element.title}</p>
//                   <p>{element.category}</p>
//                   <p>{element.country}</p>
//                   <Link to={`/job/${element._id}`}>Job Details</Link>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Jobs;

















import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authorized
    if (!isAuthorized) {
      navigate("/");
      return;
    }

    // Fetch jobs from backend
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/v1/job/getall",
          { withCredentials: true }
        );

        // Check if backend returns { jobs: [...] } or just [...]
        const jobsData = res.data.jobs || res.data;
        setJobs(jobsData);

        console.log("Jobs fetched:", jobsData); // debug
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [isAuthorized, navigate]);

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div className="card" key={job._id}>
                <p><strong>Title:</strong> {job.title}</p>
                <p><strong>Category:</strong> {job.category}</p>
                <p><strong>Country:</strong> {job.country}</p>
                <Link to={`/job/${job._id}`}>Job Details</Link>
              </div>
            ))
          ) : (
            <p>No jobs available yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;