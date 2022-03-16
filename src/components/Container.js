import classes from "./Container.module.css";
import Tiles from "./Tiles";
import { FiSmile, FiLayers, FiPhone, FiMoreHorizontal } from "react-icons/fi";




const Container = () => {
  return (
    <div className={classes.content}>
      <Tiles>
        <div className={classes.position}>
          <FiSmile className={classes.icon}></FiSmile>About me
        </div>
      </Tiles>
      <Tiles>
      <div className={classes.position}>
        <FiLayers className={classes.icon}></FiLayers>My Projects
      </div>
      </Tiles>
      <Tiles>
      <div className={classes.position}>
        <FiPhone className={classes.icon}></FiPhone><div>Contact</div>
      </div>
      </Tiles>
      <Tiles>
      <div className={classes.position}>
        <FiMoreHorizontal className={classes.icon}></FiMoreHorizontal>More
      </div>
      </Tiles>
     
      
      
    </div>
  );
};

export default Container;
