import Image from "next/image";
import Profile from "../data/sticker-face.png"
export default function About(){
    const gradientStyle = {
        background: 'linear-gradient(135deg, #eb34c9, #a6113d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
       
    };
    return(
        <div className="about-page">
         <div className="about">
         <h1 style={gradientStyle}>About Me</h1>
            <h2 style={gradientStyle}> &quot;Passionate Web Developer with a Focus on User-Centric Design!&quot;</h2>
            <p style={gradientStyle}>I&apos;m a web developer with a passion for creating seamless, user-friendly websites that prioritize performance and design. I love transforming complex ideas into clean, functional code, always with the user experience in mind.</p>
         </div>
         <div className="about-logo">
            <Image src={Profile} alt="Profile" width={400}/>
         </div>
        </div>
    )
}