// import React from "react";
// import { FaUserPlus } from "react-icons/fa";
// import { MdFindInPage } from "react-icons/md";
// import { IoMdSend } from "react-icons/io";

// const HowItWorks = () => {
//   return (
//     <>
//       <div className="howitworks">
//         <div className="container">
//           <h3>How Career Connect Works !</h3>
//           <div className="banner">
//             <div className="card">
//               <FaUserPlus />
//               <p>Create Account</p>
//               <p>
//                 You can create your profile and find job as 
//                 per skills
//               </p>
//             </div>
//             <div className="card">
//               <MdFindInPage />
//               <p>Find a Job/Post a Job</p>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Consequuntur, culpa.
//               </p>
//             </div>
//             <div className="card">
//               <IoMdSend />
//               <p>Apply For Job/Recruit Suitable Candidates</p>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Consequuntur, culpa.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HowItWorks;
























import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus />,
      title: "Create Account",
      description: "Create your profile and find jobs as per your skills.",
    },
    {
      id: 2,
      icon: <MdFindInPage />,
      title: "Find a Job / Post a Job",
      description:
        "Search jobs matching your skills or post jobs if you are an employer.",
    },
    {
      id: 3,
      icon: <IoMdSend />,
      title: "Apply / Recruit",
      description:
        "Apply for jobs or recruit suitable candidates efficiently and quickly.",
    },
  ];

  const styles = {
    section: {
      padding: "4rem 2rem",
      background: "#f9f9ff",
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "3rem",
      color: "#222",
    },
    banner: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
    },
    card: {
      background: "linear-gradient(135deg, #ffffff, #f0f0ff)",
      borderRadius: "1rem",
      padding: "2rem",
      flex: "1 1 250px",
      maxWidth: "300px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      cursor: "default",
    },
    icon: {
      fontSize: "2.5rem",
      color: "#4f46e5",
      marginBottom: "1rem",
      transition: "transform 0.3s ease",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
      color: "#222",
    },
    description: {
      fontSize: "0.95rem",
      color: "#555",
      lineHeight: 1.5,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h3 style={styles.heading}>How Career Connect Works!</h3>
        <div style={styles.banner}>
          {steps.map((step) => (
            <div
              key={step.id}
              style={styles.card}
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
              <div style={styles.icon}>{step.icon}</div>
              <div style={styles.title}>{step.title}</div>
              <div style={styles.description}>{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;