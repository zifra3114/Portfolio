import Image from "next/image";
import Logo from "../data/sticker.png"
export default function Contact(){
    const gradientStyle = {
        background: 'linear-gradient(135deg, #eb34c9, #a6113d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
       
    };
    return(
        <div className="Contact-page">
        <div className="contact">
            <form action="">
                <h1 style={gradientStyle}>CONTACT US</h1>
                <input style={gradientStyle} type="text"  id="first name"  placeholder="First Name" required/>
                <input style={gradientStyle}type="text"   id="last name"  placeholder="Last Name" required/>
                <input style={gradientStyle}type="email"   id="email"  placeholder="Email" required/>
                <input style={gradientStyle} type="text" id="Mobile"  placeholder="Mobile #" required/>
                <h4 style={gradientStyle} >Type Your Message Here.....</h4>
                <textarea name="" id="" required></textarea>
                <input type="Submit" value="Send" id="button" />
            </form>
        </div>
        <div className="contact-logo">
            <Image src={Logo} alt="Logo" height={350} />
        </div>
        </div>
    )
}