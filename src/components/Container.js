import classes from "./Container.module.css";
import Tiles from "./UI/Tiles";
import { FiSmile, FiLayers, FiPhone, FiMoreHorizontal } from "react-icons/fi";
import Overlay from "./UI/Overlay";
import { useState } from "react";



const Container = () => {
  const [overlayIsActive, setOverlayIsActive] = useState(false);

  const overlayHandler = () => {
    setOverlayIsActive(!overlayIsActive);
  };

  const onCancelHandler =() => {
    setOverlayIsActive(false)
  }

  return (
    <div className={classes.content}>
      <Tiles onClick={overlayHandler}  >
        <div className={classes.position}>
          <FiSmile className={classes.icon}></FiSmile>About me
        </div>
       
      </Tiles>
      {overlayIsActive && <Overlay  onCancel={onCancelHandler} />}
      <Tiles>
        <div className={classes.position}>
          <FiLayers className={classes.icon}></FiLayers>My Projects
        </div>
      </Tiles>
    
      <Tiles>
        <div className={classes.position}>
          <FiPhone className={classes.icon}></FiPhone>
          <div>Contact</div>
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
