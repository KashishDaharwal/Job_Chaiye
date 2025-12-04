// import React from "react";
// import { FaMicrosoft, FaApple } from "react-icons/fa";
// import { SiTesla } from "react-icons/si";

// const PopularCompanies = () => {
//   const companies = [
//     {
//       id: 1,
//       title: "Microsoft",
//       location: "Millennium City Centre, Gurugram",
//       openPositions: 10,
//       icon: <FaMicrosoft />,
//     },
//     {
//       id: 2,
//       title: "Tesla",
//       location: "Millennium City Centre, Gurugram",
//       openPositions: 5,
//       icon: <SiTesla />,
//     },
//     {
//       id: 3,
//       title: "Apple",
//       location: "Millennium City Centre, Gurugram",
//       openPositions: 20,
//       icon: <FaApple />,
//     },
//   ];
//   return (
//     <div className="companies">
//       <div className="container">
//         <h3>TOP COMPANIES</h3>
//         <div className="banner">
//           {companies.map((element) => {
//             return (
//               <div className="card" key={element.id}>
//                 <div className="content">
//                   <div className="icon">{element.icon}</div>
//                   <div className="text">
//                     <p>{element.title}</p>
//                     <p>{element.location}</p>
//                   </div>
//                 </div>
//                 <button>Open Positions {element.openPositions}</button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularCompanies;

























import React from "react";
import { FaMicrosoft, FaApple, FaGoogle, FaAmazon, FaFacebook } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    { id: 1, title: "Microsoft", location: "Millennium City Centre, Gurugram", openPositions: 10, icon: <FaMicrosoft /> },
    { id: 2, title: "Tesla", location: "Millennium City Centre, Gurugram", openPositions: 5, icon: <SiTesla /> },
    { id: 3, title: "Apple", location: "Millennium City Centre, Gurugram", openPositions: 20, icon: <FaApple /> },
    { id: 4, title: "Google", location: "DLF Cyber City, Gurugram", openPositions: 15, icon: <FaGoogle /> },
    { id: 5, title: "Amazon", location: "Cyber Hub, Gurugram", openPositions: 12, icon: <FaAmazon /> },
    { id: 6, title: "Meta (Facebook)", location: "DLF Cyber City, Gurugram", openPositions: 8, icon: <FaFacebook /> },
  ];

  const styles = {
    section: {
      padding: "4rem 2rem",
      background: "#f9f9ff",
      fontFamily: "'Poppins', sans-serif",
    },
    heading: {
      textAlign: "center",
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
      background: "linear-gradient(135deg, #ffffff, #e0e0ff)",
      borderRadius: "1rem",
      padding: "1.5rem",
      flex: "1 1 200px",
      maxWidth: "250px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      textAlign: "center",
      cursor: "pointer",
    },
    content: {
      marginBottom: "1rem",
    },
    icon: {
      fontSize: "2.5rem",
      color: "#4f46e5",
      marginBottom: "0.5rem",
      transition: "transform 0.3s ease",
    },
    title: {
      fontSize: "1.1rem",
      fontWeight: 600,
      marginBottom: "0.25rem",
      color: "#222",
    },
    location: {
      fontSize: "0.9rem",
      color: "#555",
    },
    button: {
      padding: "0.5rem 1rem",
      background: "#4f46e5",
      color: "#fff",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.heading}>TOP COMPANIES</h3>
      <div style={styles.banner}>
        {companies.map((company) => (
          <div
            key={company.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
              e.currentTarget.querySelector("svg").style.transform = "scale(1.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
              e.currentTarget.querySelector("svg").style.transform = "scale(1)";
            }}
          >
            <div style={styles.content}>
              <div style={styles.icon}>{company.icon}</div>
              <div style={styles.title}>{company.title}</div>
              <div style={styles.location}>{company.location}</div>
            </div>
            <button style={styles.button}>Open Positions {company.openPositions}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCompanies;
