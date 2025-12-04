// import React, { useContext, useState } from "react";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";
// import { FaPencilAlt } from "react-icons/fa";
// import { FaPhoneFlip } from "react-icons/fa6";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/user/register",
//         { name, phone, email, role, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setName("");
//       setEmail("");
//       setPassword("");
//       setPhone("");
//       setRole("");
//       setIsAuthorized(true);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if(isAuthorized){
//     return <Navigate to={'/'}/>
//   }


//   return (
//     <>
//       <section className="authPage">
//         <div className="container">
//           <div className="header">
//             <img src="/careerconnect-black.png" alt="logo" />
//             <h3>Create a new account</h3>
//           </div>
//           <form>
//             <div className="inputTag">
//               <label>Register As</label>
//               <div>
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                   <option value="">Select Role</option>
//                   <option value="Employer">Employer</option>
//                   <option value="Job Seeker">Job Seeker</option>
//                 </select>
//                 <FaRegUser />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Name</label>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Email Address</label>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <MdOutlineMailOutline />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Phone Number</label>
//               <div>
//                 <input
//                   type="number"
//                   placeholder="Enter your phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//                 <FaPhoneFlip />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Password</label>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <RiLock2Fill />
//               </div>
//             </div>
//             <button type="submit" onClick={handleRegister}>
//               Register
//             </button>
//             <Link to={"/login"}>Login Now</Link>
//           </form>
//         </div>
//         <div className="banner">
//           <img src="/register.png" alt="login" />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Register;


































import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* PREMIUM INLINE CSS */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
          }

          .authPage {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #6E00FF, #8E2DE2);
          }

          .registerCard {
            width: 450px;
            background: rgba(255, 255, 255, 0.15);
            padding: 40px;
            border-radius: 18px;
            backdrop-filter: blur(12px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.25);
            color: #fff;
            animation: fadeIn 0.5s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .registerCard h2 {
            text-align: center;
            font-size: 28px;
            margin-bottom: 25px;
            font-weight: 600;
          }

          .inputGroup {
            margin-bottom: 18px;
          }

          .inputGroup label {
            font-size: 15px;
            margin-bottom: 6px;
            display: block;
            font-weight: 500;
          }

          .inputGroup div {
            position: relative;
          }

          .inputGroup input,
          .inputGroup select {
            width: 100%;
            padding: 12px 45px 12px 14px;
            border-radius: 10px;
            border: none;
            background: rgba(255,255,255,0.25);
            font-size: 15px;
            color: #fff;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          .inputGroup select option {
            color: #222; /* dark text inside dropdown */
            background: #fff; /* white background for options */
          }

          .inputGroup input::placeholder {
            color: #eee;
          }

          .inputGroup svg {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
            color: #fff;
            pointer-events: none;
          }

          .registerBtn {
            width: 100%;
            padding: 12px;
            border-radius: 10px;
            border: none;
            background: #1b1b1b;
            color: white;
            font-size: 17px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.25s;
          }

          .registerBtn:hover {
            background: #000;
            transform: translateY(-2px);
          }

          .loginLink {
            margin-top: 12px;
            display: block;
            text-align: center;
            color: #fff;
            font-size: 15px;
            text-decoration: underline;
          }
        `}
      </style>

      <section className="authPage">
        <div className="registerCard">
          <h2>Create a New Account</h2>

          <form>
            <div className="inputGroup">
              <label>Register As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>

            <div className="inputGroup">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaPencilAlt />
              </div>
            </div>

            <div className="inputGroup">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>

            <div className="inputGroup">
              <label>Phone Number</label>
              <div>
                <input
                  type="number"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FaPhoneFlip />
              </div>
            </div>

            <div className="inputGroup">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>

            <button className="registerBtn" type="submit" onClick={handleRegister}>
              Register
            </button>

            <Link to="/login" className="loginLink">
              Login Now
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;