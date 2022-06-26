import React from "react";
import classes from "./Overlay.module.css";



const Overlay = (props) => {


  return (
      <React.Fragment>
    <div onClick={props.onCancel} className={classes.backdrop}/>
      <div className={classes.overlay}>{props.about}</div>
      </React.Fragment>
  );
};

export default Overlay;
