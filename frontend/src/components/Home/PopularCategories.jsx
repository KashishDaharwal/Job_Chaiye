// import React from "react";
// import {
//   MdOutlineDesignServices,
//   MdOutlineWebhook,
//   MdAccountBalance,
//   MdOutlineAnimation,
// } from "react-icons/md";
// import { TbAppsFilled } from "react-icons/tb";
// import { FaReact } from "react-icons/fa";
// import { GiArtificialIntelligence } from "react-icons/gi";
// import { IoGameController } from "react-icons/io5";

// const PopularCategories = () => {
//   const categories = [
//     {
//       id: 1,
//       title: "Graphics & Design",
//       subTitle: "305 Open Positions",
//       icon: <MdOutlineDesignServices />,
//     },
//     {
//       id: 2,
//       title: "Mobile App Development",
//       subTitle: "500 Open Positions",
//       icon: <TbAppsFilled />,
//     },
//     {
//       id: 3,
//       title: "Frontend Web Development",
//       subTitle: "200 Open Positions",
//       icon: <MdOutlineWebhook />,
//     },
//     {
//       id: 4,
//       title: "MERN STACK Development",
//       subTitle: "1000+ Open Postions",
//       icon: <FaReact />,
//     },
//     {
//       id: 5,
//       title: "Account & Finance",
//       subTitle: "150 Open Positions",
//       icon: <MdAccountBalance />,
//     },
//     {
//       id: 6,
//       title: "Artificial Intelligence",
//       subTitle: "867 Open Positions",
//       icon: <GiArtificialIntelligence />,
//     },
//     {
//       id: 7,
//       title: "Video Animation",
//       subTitle: "50 Open Positions",
//       icon: <MdOutlineAnimation />,
//     },
//     {
//       id: 8,
//       title: "Game Development",
//       subTitle: "80 Open Positions",
//       icon: <IoGameController />,
//     },
//   ];
//   return (
//     <div className="categories">
//       <h3>POPULAR CATEGORIES</h3>
//       <div className="banner">
//         {categories.map((element) => {
//           return (
//             <div className="card" key={element.id}>
//               <div className="icon">{element.icon}</div>
//               <div className="text">
//                 <p>{element.title}</p>
//                 <p>{element.subTitle}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PopularCategories;













import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    { id: 1, title: "Graphics & Design", subTitle: "305 Open Positions", icon: <MdOutlineDesignServices /> },
    { id: 2, title: "Mobile App Development", subTitle: "500 Open Positions", icon: <TbAppsFilled /> },
    { id: 3, title: "Frontend Web Development", subTitle: "200 Open Positions", icon: <MdOutlineWebhook /> },
    { id: 4, title: "MERN STACK Development", subTitle: "1000+ Open Positions", icon: <FaReact /> },
    { id: 5, title: "Account & Finance", subTitle: "150 Open Positions", icon: <MdAccountBalance /> },
    { id: 6, title: "Artificial Intelligence", subTitle: "867 Open Positions", icon: <GiArtificialIntelligence /> },
    { id: 7, title: "Video Animation", subTitle: "50 Open Positions", icon: <MdOutlineAnimation /> },
    { id: 8, title: "Game Development", subTitle: "80 Open Positions", icon: <IoGameController /> },
  ];

  const styles = {
    section: {
      padding: "4rem 2rem",
      background: "#f4f5ff",
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
      background: "linear-gradient(135deg, #ffffff, #e9e9ff)",
      borderRadius: "1rem",
      padding: "2rem",
      flex: "1 1 200px",
      maxWidth: "250px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      textAlign: "center",
      cursor: "pointer",
    },
    icon: {
      fontSize: "2.5rem",
      color: "#4f46e5",
      marginBottom: "1rem",
      transition: "transform 0.3s ease",
    },
    title: {
      fontSize: "1.1rem",
      fontWeight: 600,
      marginBottom: "0.5rem",
      color: "#222",
    },
    subTitle: {
      fontSize: "0.9rem",
      color: "#555",
    },
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.heading}>POPULAR CATEGORIES</h3>
      <div style={styles.banner}>
        {categories.map((category) => (
          <div
            key={category.id}
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
            <div style={styles.icon}>{category.icon}</div>
            <div style={styles.title}>{category.title}</div>
            <div style={styles.subTitle}>{category.subTitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;