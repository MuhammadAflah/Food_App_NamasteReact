//  import { Outlet } from "react-router-dom";
 import Profile from "./Profile";
 import ProfileClass from "./ProfileClass";
 
 const About = () => {
    return(
        <div>
        <h1>about us</h1>
        <Profile name={"Muhammad Aflah"}/>
        <ProfileClass name={"class component"}/>
        </div>
    )
 }

 export default About;