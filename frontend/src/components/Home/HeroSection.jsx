// // import React from "react";
// // import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

// // const HeroSection = () => {
// //   const details = [
// //     {
// //       id: 1,
// //       title: "1,23,441",
// //       subTitle: "Live Job",
// //       icon: <FaSuitcase />,
// //     },
// //     {
// //       id: 2,
// //       title: "91220",
// //       subTitle: "Companies",
// //       icon: <FaBuilding />,
// //     },
// //     {
// //       id: 3,
// //       title: "2,34,200",
// //       subTitle: "Job Seekers",
// //       icon: <FaUsers />,
// //     },
// //     {
// //       id: 4,
// //       title: "1,03,761",
// //       subTitle: "Employers",
// //       icon: <FaUserPlus />,
// //     },
// //   ];
// //   return (
// //     <>
// //       <div className="heroSection">
// //         <div className="container">
// //           <div className="title">
// //             <h1>Find a job that suits</h1>
// //             <h1>your interests and skills</h1>
// //             <p>
// //               Discover job opportunities that match your skills and passions.
// //               Connect with employers seeking talent like yours for rewarding
// //               careers.
// //             </p>
// //           </div>
// //           <div className="image">
// //             <img src="/heroS.jpg" alt="hero" />
// //           </div>
// //         </div>
// //         <div className="details">
// //           {details.map((element) => {
// //             return (
// //               <div className="card" key={element.id}>
// //                 <div className="icon">{element.icon}</div>
// //                 <div className="content">
// //                   <p>{element.title}</p>
// //                   <p>{element.subTitle}</p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default HeroSection;























// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

// const HeroSection = () => {
//   const [counts, setCounts] = useState({
//     jobs: 0,
//     companies: 0,
//     jobSeekers: 0,
//     employers: 0,
//   });

//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const jobsRes = await axios.get("http://localhost:4000/api/v1/job/getall", { withCredentials: true });
//         const usersRes = await axios.get("http://localhost:4000/api/v1/user/getall", { withCredentials: true });
//         const companiesRes = await axios.get("http://localhost:4000/api/v1/company/getall", { withCredentials: true });

//         const jobsCount = jobsRes.data.jobs.length;
//         const companiesCount = companiesRes.data.companies.length;
//         const jobSeekersCount = usersRes.data.users.filter(u => u.role === "User").length;
//         const employersCount = usersRes.data.users.filter(u => u.role === "Employer").length;

//         setCounts({
//           jobs: jobsCount,
//           companies: companiesCount,
//           jobSeekers: jobSeekersCount,
//           employers: employersCount,
//         });
//       } catch (error) {
//         console.log("Error fetching counts:", error);
//       }
//     };

//     fetchCounts();
//   }, []);

//   const details = [
//     { id: 1, title: counts.jobs, subTitle: "Live Job", icon: <FaSuitcase /> },
//     { id: 2, title: counts.companies, subTitle: "Companies", icon: <FaBuilding /> },
//     { id: 3, title: counts.jobSeekers, subTitle: "Job Seekers", icon: <FaUsers /> },
//     { id: 4, title: counts.employers, subTitle: "Employers", icon: <FaUserPlus /> },
//   ];

//   return (
//     <div className="heroSection">
//       <div className="container">
//         <div className="title">
//           <h1>Find a job that suits</h1>
//           <h1>your interests and skills</h1>
//           <p>
//             Discover job opportunities that match your skills and passions.
//             Connect with employers seeking talent like yours for rewarding careers.
//           </p>
//         </div>
//         <div className="image">
//           <img src="/heroS.jpg" alt="hero" />
//         </div>
//       </div>
//       <div className="details">
//         {details.map((element) => (
//           <div className="card" key={element.id}>
//             <div className="icon">{element.icon}</div>
//             <div className="content">
//               <p>{element.title}</p>
//               <p>{element.subTitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


















import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const [counts, setCounts] = useState({
    jobs: 0,
    companies: 0,
    jobSeekers: 0,
    employers: 0,
  });

  // Smooth count up animation
  const [displayCounts, setDisplayCounts] = useState(counts);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const jobsRes = await axios.get("http://localhost:4000/api/v1/job/getall", { withCredentials: true });
        const usersRes = await axios.get("http://localhost:4000/api/v1/user/getall", { withCredentials: true });
        const companiesRes = await axios.get("http://localhost:4000/api/v1/company/getall", { withCredentials: true });

        const newCounts = {
          jobs: jobsRes.data.jobs.length,
          companies: companiesRes.data.companies.length,
          jobSeekers: usersRes.data.users.filter(u => u.role === "User").length,
          employers: usersRes.data.users.filter(u => u.role === "Employer").length,
        };
        setCounts(newCounts);

        // Animate count up
        let start = { ...displayCounts };
        const duration = 1000;
        const interval = 20;
        const steps = duration / interval;
        let stepCount = 0;

        const counter = setInterval(() => {
          stepCount++;
          const tempCounts = {};
          for (let key in newCounts) {
            tempCounts[key] = Math.floor(start[key] + ((newCounts[key] - start[key]) * stepCount) / steps);
          }
          setDisplayCounts(tempCounts);
          if (stepCount >= steps) clearInterval(counter);
        }, interval);
      } catch (error) {
        console.log("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  const details = [
    { id: 1, title: displayCounts.jobs, subTitle: "Live Jobs", icon: <FaSuitcase /> },
    { id: 2, title: displayCounts.companies, subTitle: "Companies", icon: <FaBuilding /> },
    { id: 3, title: displayCounts.jobSeekers, subTitle: "Job Seekers", icon: <FaUsers /> },
    { id: 4, title: displayCounts.employers, subTitle: "Employers", icon: <FaUserPlus /> },
  ];

  const styles = {
    heroSection: {
      padding: "4rem 2rem",
      background: "linear-gradient(135deg, #f0f4ff, #d9e4ff)",
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2rem",
      marginBottom: "3rem",
    },
    heroText: {
      flex: "1 1 400px",
    },
    heroTextH1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#222",
      marginBottom: "1rem",
    },
    heroTextP: {
      fontSize: "1.1rem",
      color: "#555",
      lineHeight: 1.6,
    },
    heroImage: {
      flex: "1 1 400px",
      textAlign: "center",
    },
    heroImageImg: {
      width: "100%",
      maxWidth: "500px",
      borderRadius: "1rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    },
    heroStats: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "2rem",
    },
    statCard: {
      flex: "1 1 200px",
      background: "linear-gradient(135deg, #ffffff, #f0f0ff)",
      borderRadius: "1rem",
      padding: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      cursor: "default",
    },
    icon: {
      fontSize: "2rem",
      color: "#4f46e5",
      transition: "transform 0.3s ease",
    },
    statTextH2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      margin: 0,
      color: "#222",
    },
    statTextP: {
      fontSize: "0.95rem",
      color: "#555",
      margin: 0,
    },
  };

  return (
    <section style={styles.heroSection}>
      <div style={styles.container}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTextH1}>Find a job that suits your interests</h1>
          <p style={styles.heroTextP}>
            Explore thousands of job opportunities and connect with top employers.
            Kickstart your career and find the perfect match for your skills.
          </p>
        </div>
        <div style={styles.heroImage}>
          <img
            style={styles.heroImageImg}
            src="/heroS.jpg"
            alt="hero"
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </div>
      <div style={styles.heroStats}>
        {details.map((item) => (
          <div
            key={item.id}
            style={styles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
              e.currentTarget.querySelector("svg").style.transform = "scale(1.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
              e.currentTarget.querySelector("svg").style.transform = "scale(1)";
            }}
          >
            <div style={styles.icon}>{item.icon}</div>
            <div>
              <h2 style={styles.statTextH2}>{item.title.toLocaleString()}</h2>
              <p style={styles.statTextP}>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;