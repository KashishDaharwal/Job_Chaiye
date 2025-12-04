// import React, { useContext, useState } from "react";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";
// import { Link, Navigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const { isAuthorized, setIsAuthorized } = useContext(Context);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/user/login",
//         { email, password, role },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setEmail("");
//       setPassword("");
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
//             <img src="/job-chaiye.jpeg" alt="logo" />
//             <h3>Login to your account</h3>
//           </div>
//           <form>
//             <div className="inputTag">
//               <label>Login As</label>
//               <div>
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                   <option value="">Select Role</option>
                  
//                   <option value="Job Seeker">Job Seeker</option>
//                   <option value="Employer">Employer</option>
//                 </select>
//                 <FaRegUser />
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
//               <label>Password</label>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Enter your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <RiLock2Fill />
//               </div>
//             </div>
//             <button type="submit" onClick={handleLogin}>
//               Login
//             </button>
//             <Link to={"/register"}>Register Now</Link>
//           </form>
//         </div>
//         <div className="banner">
//           <img src="/login.png" alt="login" />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;







import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
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

          .loginCard {
            width: 420px;
            background: rgba(255, 255, 255, 0.15);
            padding: 35px;
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

          .loginCard h2 {
            text-align: center;
            font-size: 28px;
            margin-bottom: 20px;
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
            color: #222;
            background: #fff;
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

          .loginBtn {
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

          .loginBtn:hover {
            background: #000;
            transform: translateY(-2px);
          }

          .registerLink {
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
        <div className="loginCard">
          <h2>Welcome Back 👋</h2>

          <form onSubmit={handleLogin}>
            <div className="inputGroup">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Job Seeker">Job Seeker</option>
                  <option value="Employer">Employer</option>
                </select>
                <FaRegUser />
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
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>

            <button className="loginBtn" type="submit">
              Login
            </button>

            <Link to="/register" className="registerLink">
              Register Now
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;