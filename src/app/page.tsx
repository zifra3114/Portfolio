import Image from "next/image";
import Profile from "./data/profile.png";
import Link from "next/link";
export default function Home(){
  const gradientStyle = {
    background: 'linear-gradient(135deg, #eb34c9, #a6113d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
   
};
  return(
    <div>
    <div className="info">
    <div className="photo">
       <Image src={Profile} alt="Photo" width={300}/>
       </div> 
       <div className="name">
        <h1 ><b><i style={gradientStyle}>ZIFRA FIRDOUS</i></b></h1>
       <p style={gradientStyle}>I&apos;m a Frontend Developer</p>
      <div className="buttons">
         <div className="resume">
       <Link href={"./resume"}><button type="button">Resume</button></Link>
    </div>
    <div className="skills">
    <Link href={"./skill"}><button type="button">Skills</button></Link>
    </div>
    </div>
       </div>
    </div>
   </div> 
  )
}