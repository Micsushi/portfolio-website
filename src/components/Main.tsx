import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  const image = process.env.PUBLIC_URL + '/selfie.jpg';
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={image} alt="Avatar" />
        </div>
        <div className="content">
          <h1>Michael Shi</h1>
          <p className="title">Full Stack Developer</p>
          <div className="social_icons">
            <a href="https://github.com/micsushi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/wjshi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;