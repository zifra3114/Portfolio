import Image from "next/image";
import Project1 from "../data/project-1.png" 
import Project2 from "../data/project2.png" 
import Project3 from "../data/project3.png" 
import Project4 from "../data/project4.png" 
export default function Project(){
    const gradientStyle = {
        background: 'linear-gradient(135deg, #eb34c9, #a6113d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
       
    };
    return(
        <div className="project-page">
        <h1 style={gradientStyle}>Projects</h1>
           
        <div className="parent-container">
             <div className="project">
           <Image src={Project1} alt="Picture" height={500}/>
            </div>
            <div className="project">
           <Image src={Project2} alt="Picture" height={500}/>
            </div>
            <div className="project">
           <Image src={Project3} alt="Picture" height={500}/>
            </div>
            <div className="project">
           <Image src={Project4} alt="Picture" height={500}/>
            </div>
        </div>
        </div>
    )
}