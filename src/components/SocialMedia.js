import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import classes from "./SocialMedia.module.css"

const SocialMedia = () => {
  return (
    <footer className={classes.position}>
      <div>
        <FiGithub />
      </div>
      <div>
        <FiInstagram />
      </div>
      <div>
        <FiLinkedin>linkdin</FiLinkedin>
      </div>
    </footer>
  );
};

export default SocialMedia;
