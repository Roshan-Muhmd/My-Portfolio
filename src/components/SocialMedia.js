import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import classes from "./SocialMedia.module.css"

const SocialMedia = () => {
  return (
    <footer className={classes.position}>
      <a href="https://github.com/Roshan-Muhmd" >
        <FiGithub className={classes.handles} />
      </a>
      <a href="https://www.instagram.com/ro_shazam/" >
        <FiInstagram  className={classes.handles}/>
      </a>
      <a href="https://www.linkedin.com/in/roshan-muhammed-b53760192/" >
        <FiLinkedin className={classes.handles}>linkdin</FiLinkedin>
      </a>
    </footer>
  );
};

export default SocialMedia;
