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
<<<<<<< HEAD
        <FiPhone className={classes.icon}></FiPhone><div className={classes.center}>Contact</div>
=======
        <FiPhone className={classes.icon}></FiPhone><div>Contact</div>
>>>>>>> 4bc23e2d93a4d676460b045e29898a85d244c870
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
