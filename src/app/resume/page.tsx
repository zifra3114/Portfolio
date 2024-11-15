export default function Resume() {
    const gradientStyle = {
        background: 'linear-gradient(135deg, #6b031b, #a6113d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
       
    };
    return (
        <div className="container">
            <section id="Personal-information">
        
                    <h2 style={gradientStyle}>PERSONAL INFORMATION</h2>
            
                <ul>
                    <li><b>Name :</b> Zifra Firdous</li>
                    <li><b>Father Name :</b> Muhammad Harron</li>
                    <li><b>Date Of Birth :</b> 14 November 2006</li>
                    <li><b>Marital Status :</b> Single</li>
                    <li><b>Nationality :</b> Pakistani</li>
                </ul>
            </section>

            <section id="Contact-information">
                
                    <h2 style={gradientStyle}>CONTACT INFORMATION</h2>
            
                <ul>
                    <li><b>Email :</b> <a href="mailto:zifrafirdous372@gmail.com">zifrafirdous372@gmail.com</a></li>
                    <li><b>Phone Number :</b> 03412620272</li>
                    <li><b>Address :</b> House # 443, Sector 11 1/2, Orangi Town, Karachi</li>
                </ul>
            </section>

            <section id="objective">
                
                    <h2 style={gradientStyle}>OBJECTIVE</h2>
                
                <p>TO SECURE A POSITION IN YOUR REPUTABLE ORGANIZATION FOR LEARNING THE NEW ADVANCEMENTS AS PER MY FIELD OF STUDY</p>
            </section>

            <section id="Education">
                
                    <h2 style={gradientStyle}>EDUCATION DETAIL</h2>
                
                <ul>
                    <li><b>College Name:</b> Abdullah Govt College For Women</li>
                    <li><b>Degree:</b> Intermediate (Pre-Medical)</li>
                    <li><b>School Name:</b> Adytum Public Academy</li>
                    <li><b>Degree:</b> Matriculation (SCIENCE)</li>
                </ul>
            </section>

            <section id="Skills">
            
                    <h2 style={gradientStyle}>SKILLS</h2>
            
                <ul>
                    <li>HTML, CSS, TypeScript</li>
                </ul>
            </section>

            <section id="Experience">
                    <h2 style={gradientStyle}>EXPERIENCE</h2>
            
                <p>No Experience</p>
            </section>
        </div>
    );
}
