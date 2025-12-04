import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by kashish Dharwal</div>
<div>
  <Link to={''} target='github'><FaGithub></FaGithub></Link>
  <Link to={''} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'https://www.linkedin.com/in/kashish-daharwal-bb67aa32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={''} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer

























