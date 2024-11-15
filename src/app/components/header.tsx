import Image from "next/image";
import Logo from "../data/profile-logo.png"
import Link from "next/link";
export default function Header(){
    const gradientStyle = {
        background: 'linear-gradient(135deg, #eb34c9, #a6113d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
       
    };
    return(
       
        <div className="header">
                    <div className="logo" >
                     <Image src={Logo} alt="Logo" />
                    </div>
                    <div>
                   <ul className="header-button">
                    <Link href={"./"}><li  style={gradientStyle}>Home</li></Link>
                    <Link href={"/about"}><li  style={gradientStyle}>About Me</li></Link>
                    <Link href={"./project"}><li  style={gradientStyle}>Projects</li></Link>
                    <Link href={"./contact"}><li  style={gradientStyle}>Contact Me</li></Link>
                   </ul>   
                </div> 
            </div>
        
    
    )
}