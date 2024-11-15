export default function Skills() {
    const gradientStyle = {
        background: 'linear-gradient(135deg, #eb34c9, #a6113d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
   
};
    return (
        <div className="skills-page">
          <h1 style={gradientStyle}>Skills</h1>
        <h3 style={gradientStyle}>HTML</h3>
        <div className="progress-bg">
          <div className="page html">90%</div>
        </div>
        
        <h3 style={gradientStyle}>CSS</h3>
        <div className="progress-bg">
          <div className="page css">80%</div>
        </div>
        
        <h3 style={gradientStyle}>TypeScript</h3>
        <div className="progress-bg">
          <div className="page ts">65%</div>
        </div>

        </div>
    );
}
