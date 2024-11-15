import { FaGithub, FaEnvelope , FaLinkedin } from 'react-icons/fa';
export default function Footer(){
    return(
      <footer className="footer">
       
        <div className="icon">
          <FaEnvelope size={30}  />
          <a href="zifrafirdous372@gmail.com" >zifrafirdous372@gmail.com</a>
        
        
          <FaLinkedin size={30}  />
          <a href="https://www.linkedin.com/in/zifrafirdous14">LinkedIn</a>
        
        
          <FaGithub size={30}  />
          <a href="https://github.com/zifra3114 " >GitHub</a>
        </div>
        <hr />
        <div className="zifra">
        <p>&copy; {new Date().getFullYear()} Zifra Firdous. All rights reserved.</p>

        </div>
        
    
      
    
      </footer>
    )
}